
export default function Home() {
  return (
    <div className="p-8 flex flex-col items-center gap-6">
      <h1 className="text-3xl font-bold">Добро пожаловать на сайт спортивных курсов!</h1>
      <p className="text-lg max-w-xl text-center">Наша платформа — это ваш путь к освоению различных видов спорта онлайн. Выбирайте интересующий курс и начните обучение прямо сейчас!</p>
      <a href="/sports" className="mt-4 px-6 py-2 bg-amber-300 rounded hover:bg-amber-400 font-semibold">Перейти к курсам по спорту</a>
    </div>
  );
}
