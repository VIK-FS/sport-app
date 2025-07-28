import Link from "next/link";

export default function SportsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex flex-col md:flex-row gap-8 p-8">
      <aside className="min-w-[200px]">
        <nav className="flex flex-col gap-4">
          <Link href="/sports/football" className="hover:text-amber-400">Футбол</Link>
          <Link href="/sports/tennis" className="hover:text-amber-400">Теннис</Link>
          <Link href="/sports/swimming" className="hover:text-amber-400">Плавание</Link>
        </nav>
      </aside>
      <main className="flex-1">{children}</main>
    </div>
  );
} 