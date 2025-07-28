import { redirect } from 'next/navigation';

// Получаем список категорий на сервере
async function getCategories() {
  const res = await fetch('https://api.escuelajs.co/api/v1/categories');
  if (!res.ok) return [];
  return res.json();
}

// Server action for adding a product
async function addProduct(formData: FormData) {
  'use server';
  const title = formData.get('title');
  const price = Number(formData.get('price'));
  const description = formData.get('description');
  const categoryId = Number(formData.get('categoryId'));
  const image = formData.get('image');

  // Validation
  if (!title || !price || !description || !categoryId || !image) {
    // can add error handling via state, but server actions should not return an object
    return;
  }

  const body = {
    title,
    price,
    description,
    categoryId,
    images: [image],
  };

  const res = await fetch('https://api.escuelajs.co/api/v1/products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    // can add error handling via state, but server actions should not return an object
    return;
  }

  redirect('/products/server-version?success=1');
}

export default async function CreateProductPage() {
  const categories = await getCategories();
  return (
    <div className="max-w-md mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6" style={{ color: 'var(--primary)' }}>Add Product</h1>
      <form
        action={addProduct}
        className="space-y-4 p-6 rounded shadow"
        style={{
          background: 'var(--background)',
          color: 'var(--foreground)',
          border: '1px solid var(--border)'
        }}
      >
        <div>
          <label className="block mb-1 font-medium" style={{ color: 'var(--primary)' }}>Title</label>
          <input name="title" className="w-full border rounded px-3 py-2" style={{ borderColor: 'var(--border)', background: 'var(--background)', color: 'var(--foreground)' }} required />
        </div>
        <div>
          <label className="block mb-1 font-medium" style={{ color: 'var(--primary)' }}>Price</label>
          <input name="price" type="number" min="1" className="w-full border rounded px-3 py-2" style={{ borderColor: 'var(--border)', background: 'var(--background)', color: 'var(--foreground)' }} required />
        </div>
        <div>
          <label className="block mb-1 font-medium" style={{ color: 'var(--primary)' }}>Description</label>
          <textarea name="description" className="w-full border rounded px-3 py-2" style={{ borderColor: 'var(--border)', background: 'var(--background)', color: 'var(--foreground)' }} required />
        </div>
        <div>
          <label className="block mb-1 font-medium" style={{ color: 'var(--primary)' }}>Category</label>
          <select name="categoryId" className="w-full border rounded px-3 py-2" style={{ borderColor: 'var(--border)', background: 'var(--background)', color: 'var(--foreground)' }} required>
            <option value="" disabled selected>Select category</option>
            {categories.map((cat: any) => (
              <option key={cat.id} value={cat.id}>{cat.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block mb-1 font-medium" style={{ color: 'var(--primary)' }}>Image URL</label>
          <input name="image" type="url" className="w-full border rounded px-3 py-2" style={{ borderColor: 'var(--border)', background: 'var(--background)', color: 'var(--foreground)' }} required />
        </div>
        <button
          type="submit"
          style={{
            background: 'var(--primary)',
            color: 'var(--foreground)',
            border: '1px solid var(--border)'
          }}
          className="px-4 py-2 rounded hover:opacity-90 transition"
        >
          Add
        </button>
      </form>
    </div>
  );
} 