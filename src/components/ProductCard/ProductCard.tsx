import { Product } from "@/types";
import React from "react";
import Image from "next/image";
import Link from "next/link";

// Описание пропсов для карточки продукта
interface ProductCardProps {
  product: Product; // объект продукта
  onDelete?: (id: number) => void; // функция для удаления продукта (опционально)
}

// Карточка продукта с изображением, кнопкой удаления и ссылкой на детали
export default function ProductCard({ product, onDelete }: ProductCardProps) {
  return (
    <li>
      {/* Название продукта */}
      <h3>{product.title}</h3>

      {/* Изображение продукта */}
      <Image
        src={product.images[0]}
        alt={"Product " + product.title}
        width={200}
        height={200}
        unoptimized
      />
      {/* Кнопки управления: удалить и перейти к деталям */}
      <div className="mt-2 flex gap-2">
        {/* Кнопка удаления продукта */}
        <button
          className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
          onClick={() => onDelete && onDelete(product.id)}
        >
          Удалить
        </button>
        {/* Ссылка на страницу деталей продукта */}
        <Link
          href={`/products/server-version/${product.id}`}
          className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Details
        </Link>
      </div>
    </li>
  );
}