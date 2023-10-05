"use client";
import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <h1>hello world</h1>
      <Link href="/articles">Articles</Link>
      <ProductCard />
    </main>
  );
}
