import { User } from "@/types";
import { notFound } from "next/navigation";
import Image from "next/image";

export default async function UserInfo({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = await params;
    const id = resolvedParams.id;
    const res = await fetch(`https://api.escuelajs.co/api/v1/users/${id}`);
    if (!res.ok) {
        if (res.status === 404) {
            notFound();
        }
        throw new Error("Failed to fetch users");
    }
    const user: User = await res.json();

    return (
        <section className="flex flex-col items-center gap-4 py-8 bg-primary text-secondary">
            <div className="flex flex-col items-center gap-4 py-8 bg-secondary text-primary">
                <Image
                    src={user.avatar}
                    alt={user.name}
                    width={200}
                    height={160}
                    unoptimized={true}
                    className="rounded-full border shadow"
                />
                <h2 className="text-2xl font-bold">{user.name}</h2>
                <p className="text-lg">{user.email}</p>
            </div>
        </section>
    );
}
