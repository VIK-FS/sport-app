import { db } from "@/db";
import { eventsTable } from "@/db/schema";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const EventInsertSchema = z.object({
    name: z.string().min(3, { message: "Name must be at least 3 characters long." }),
    description: z.string().max(250, { message: "Description must be less than 250 characters." })
    .refine(val => {
        if (val === "Java is the best language") {
            return false;
        }
        return true;
    }, { message: "You should be lern another language." }),
});

// GET: получить все события
export async function GET() {
    const events = await db.select().from(eventsTable);
    return NextResponse.json(events);
}

// POST: создать событие
export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, description } = EventInsertSchema.parse(body);
        if (!name || !description) {
            return NextResponse.json({ error: "Name and description are required." }, { status: 400 });
        }
        const [event] = await db
            .insert(eventsTable)
            .values({ name, description })
            .returning();
        console.log(event);
        return NextResponse.json(event, { status: 201 });
    } catch (error: unknown) {
        if (error instanceof z.ZodError) {
            return NextResponse.json({ error: "Invalid request body.", details: error.issues }, { status: 400 });
        }
        //console.log(error);
        return NextResponse.json({ error: "Internal server error." }, { status: 500 });
    }
} 