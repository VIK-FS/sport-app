import Link from "next/link";

export default function SportsPage() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Курсы по видам спорта</h2>
      <ul className="flex flex-col gap-4">
        <li>
          <Link href="/sports/football" className="text-blue-600 hover:underline font-semibold">Футбол</Link>
          <div className="text-sm text-gray-600">Изучите основы техники, паса, дриблинга и тактики. Подходит для начинающих.</div>
        </li>
        <li>
          <Link href="/sports/tennis" className="text-blue-600 hover:underline font-semibold">Теннис</Link>
          <div className="text-sm text-gray-600">Удары, подача, правила и стратегия игры. Для всех желающих освоить теннис.</div>
        </li>
        <li>
          <Link href="/sports/swimming" className="text-blue-600 hover:underline font-semibold">Плавание</Link>
          <div className="text-sm text-gray-600">Дыхание, техника, стили: кроль, брасс и др. Для любого возраста и уровня.</div>
        </li>
      </ul>
    </div>
  );
}
