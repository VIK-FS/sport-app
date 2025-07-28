import { NextRequest, NextResponse } from "next/server";

export default async function About() {
  const BASE_URL = process.env.BASE_URL;
  const res = await fetch(`${BASE_URL}/api/hello`);
  const { message } = await res.json();
  return (
    <div className="px-28 py-20 flex flex-col gap-4">
      <h2 className="text-2xl font-bold mb-2">О проекте</h2>
      <p>{message}</p>
      <p>Платформа для онлайн-обучения различным видам спорта.</p>
      <p>Наша миссия — сделать спорт доступным каждому, независимо от возраста и уровня подготовки. Мы предлагаем структурированные курсы, которые помогут вам освоить новые навыки, улучшить технику и поддерживать активный образ жизни.</p>
      <ul className="list-disc ml-6">
        <li>Доступ к курсам 24/7</li>
        <li>Опытные тренеры и современные методики</li>
        <li>Поддержка для начинающих и продвинутых</li>
      </ul>
    </div>
  );
}