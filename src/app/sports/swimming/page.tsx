export default function SwimmingCourse() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">Курс по плаванию</h2>
      <p>Плавание — важный навык для здоровья и безопасности. Научитесь правильно дышать и двигаться в воде.</p>
      <ul className="list-disc ml-6">
        <li>Дыхание и координация</li>
        <li>Техника плавания</li>
        <li>Стили: кроль, брасс, баттерфляй, на спине</li>
      </ul>
      <p className="text-sm text-gray-700">Подходит для всех возрастов и уровней подготовки.</p>
    </div>
  );
}
