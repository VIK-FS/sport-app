export default function FootballCourse() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">Курс по футболу</h2>
      <p>Введение в футбол: основы игры, история и развитие.</p>
      <ul className="list-disc ml-6">
        <li>Техника владения мячом</li>
        <li>Пас и дриблинг</li>
        <li>Тактика и командная игра</li>
        <li>Физическая подготовка</li>
      </ul>
      <p className="text-sm text-gray-700">Подходит для начинающих и всех, кто хочет улучшить свои навыки.</p>
    </div>
  );
} 