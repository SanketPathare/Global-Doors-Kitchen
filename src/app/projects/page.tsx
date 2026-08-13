"use client";

import React, { useState, useEffect } from "react";
import { Search, Filter } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Category {
  id: string;
  name: string;
}

interface Product {
  _id: string;
  title: string;
  category: string;
  description: string;
  image?: {
    asset: {
      _ref: string;
    };
  };
}

const Page: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const categories: Category[] = [
    { id: "all", name: "All Products" },
    { id: "kitchen", name: "Kitchen" },
    { id: "doors", name: "Doors" },
    { id: "acrylic", name: "Acrylic" },
  ];

  useEffect(() => {
    const fetchProducts = async (): Promise<void> => {
      try {
        const query = `*[_type == "product"]{
          _id,
          title,
          category,
          description,
          image
        }`;
        const data = await client.fetch<Product[]>(query);
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products
    .filter(
      (product: Product) =>
        selectedCategory === "all" || product.category === selectedCategory
    )
    .filter(
      (product: Product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-cream">
        <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-t-2 border-brass" />
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <main className="bg-cream">
        <section className="section">
          <div className="container-lux">
            <div className="mb-10 text-center">
              <span className="eyebrow">Gallery</span>
              <h1 className="heading mt-2 text-4xl font-semibold md:text-5xl">
                Our Recent Projects
              </h1>
            </div>

            <div className="mb-10 flex flex-col items-center gap-4 md:flex-row md:justify-between">
              {/* Search Input */}
              <div className="relative w-full md:w-96">
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-muted"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setSearchQuery(e.target.value)
                  }
                  className="w-full rounded-full border border-wood-500/25 bg-white/70 py-2.5 pl-10 pr-4 outline-none transition-all focus:border-brass focus:ring-2 focus:ring-brass/30"
                />
              </div>

              {/* Category Filter */}
              <div className="flex w-full items-center gap-2 md:w-auto">
                <Filter size={20} className="text-muted" />
                <select
                  value={selectedCategory}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                    setSelectedCategory(e.target.value)
                  }
                  className="w-full rounded-full border border-wood-500/25 bg-white/70 px-4 py-2.5 outline-none transition-all focus:border-brass focus:ring-2 focus:ring-brass/30 md:w-auto"
                >
                  {categories.map((category: Category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product: Product) => (
                <article
                  key={product._id}
                  className="group card-lux overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lux"
                >
                  {product.image && (
                    <div className="aspect-[4/3] w-full overflow-hidden">
                      <img
                        src={urlFor(product.image).url()}
                        alt={product.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="p-5">
                    <h3 className="font-display text-xl font-semibold text-ink">
                      {product.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted">
                      {product.description}
                    </p>
                    <span className="mt-3 inline-block rounded-full bg-wood-500/10 px-3 py-1 text-xs font-medium capitalize text-wood-700">
                      {product.category}
                    </span>
                  </div>
                </article>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <p className="mt-10 text-center text-muted">
                No projects found. Try a different search or category.
              </p>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Page;
