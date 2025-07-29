import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({ message: "Hello, from backend!" });
}

export async function POST(req: NextRequest) {
    const body = await req.json();
    return NextResponse.json({ message: "Hello, from backend!", body });
}