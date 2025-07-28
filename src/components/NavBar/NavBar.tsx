'use client';

import Link from "next/link";
import React from "react";
import ThemeToggler from "../ThemeToggles/ThemeToggles";


export default function NavBar() {
  return (
    <nav className="flex justify-center items-center min-h-12 sticky top-0 px-8 bg-white dark:bg-[#171717] z-10">
      <div className="flex gap-6 items-center">
        <Link href={"/"} className="hover:text-amber-300 transition">
          Home
        </Link>
        <Link href={"/about"} className="hover:text-amber-300 transition">
          About
        </Link>
        <Link href={"/settings"} className="hover:text-amber-300 transition">
          Settings
        </Link>
        <Link href={"/sports"} className="hover:text-amber-300 transition">
          Sports
        </Link>
        <Link href={"/users/client-version"} className="hover:text-amber-300 transition">
          Users client
        </Link>
        <Link href={"/users/server-version"} className="hover:text-amber-300 transition">
          Users server
        </Link>
        <Link href={"/products/client-version"} className="hover:text-amber-300 transition">
          Products client
        </Link>
        <Link href={"/products/server-version"} className="hover:text-amber-300 transition">
          Products server
        </Link>
        <Link href={"/products/server-version/create"} className="hover:text-amber-300 transition">
          Add Product
        </Link>
        <Link href={"/categories"} className="hover:text-amber-300 transition">
          Categories
        </Link>
        <Link href={"/categories/create"} className="hover:text-amber-300 transition">
          Categories create
        </Link>
        {/* Кнопка смены темы */}
        <ThemeToggler />
      </div>
    </nav>
  );
}