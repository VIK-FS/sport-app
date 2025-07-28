import { Product } from "@/types";

export default async function ProductsServerVersion({ searchParams }: { searchParams?: { [key: string]: string } }) {
  // Получение данных с внешнего API
  const res = await fetch("https://api.escuelajs.co/api/v1/products");
  if (!res.ok) {
    throw new Error("Products failed to fetch");
  }
  const products = await res.json();

  // Проверяем query success
  const success = searchParams?.success === "1";

  // Рендер списка продуктов
  return (
    <div>
      {success && (
        <div style={{ background: 'var(--success)', color: 'var(--foreground)', border: '1px solid var(--border)', padding: '12px', borderRadius: '8px', marginBottom: '16px' }}>
          Product successfully created!
        </div>
      )}
      {products.map((product: Product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </div>
  );
}