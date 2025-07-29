'use server';
import { revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';

export async function addProduct(formData: FormData) {
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
    //return;
    revalidateTag('products');
    redirect('/products/server-version?success=1');
    
  }

  //redirect('/products/server-version?success=1');
} 