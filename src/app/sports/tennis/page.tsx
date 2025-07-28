export default function TennisCourse() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">Курс по теннису</h2>
      <p>Введение в теннис: базовые правила и особенности игры.</p>
      <ul className="list-disc ml-6">
        <li>Удары и техника</li>
        <li>Подача</li>
        <li>Правила игры</li>
        <li>Стратегия и тактика</li>
      </ul>
      <p className="text-sm text-gray-700">Курс подходит для всех желающих освоить теннис с нуля.</p>
    </div>
  );
} 