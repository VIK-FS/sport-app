"use client";

import ProductCard from "@/components/ProductCard/ProductCard";
import type { Product } from "@/types";
import { useEffect, useState } from "react";
import Loading from "./loading";

export default function ProductsClient() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetchProducts();
    }, []);
    async function fetchProducts() {
        setLoading(true);
        const res = await fetch("https://api.escuelajs.co/api/v1/products");
        if (!res.ok) {
            throw new Error("Failed to fetch products");
        }
        const arr = await res.json();
        setProducts(arr);
        setLoading(false);
    }
    if (loading) return <Loading />;
    return (
        <div>
            <ul>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </ul>
        </div>
    );
}