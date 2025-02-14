"use client";

import React, { useState, useEffect } from "react";
import { Search, Filter } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Type definitions
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
    {id: "acrylic", name:"Acrylic"}
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
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <main className="container mx-auto max-w-7xl px-4 py-8 max-w-8xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-center mb-6">
            Our Recent Projects
          </h1>

          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600"
                size={20}
              />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setSearchQuery(e.target.value)
                }
                className="w-full pl-10 pr-4 py-2 border border-gray-400/90 rounded-lg"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2 w-full md:w-auto">
              <Filter size={20} className="text-gray-600" />
              <select
                value={selectedCategory}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setSelectedCategory(e.target.value)
                }
                className="border rounded-lg px-4 py-2 w-full md:w-auto "
              >
                {categories.map((category: Category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product: Product) => (
            <div
              key={product._id}
              className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              {product.image && (
                <div className="aspect-video w-full   ">
                  <img
                    src={urlFor(product.image).url()}
                    alt={product.title}
                    className=" w-full h-[600px]  object-cover"
                  />
                </div>
              )}
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                <p className="text-gray-600">{product.description}</p>
                <span className="inline-block mt-2 text-sm text-gray-600 bg-gray-200 px-2 py-1 rounded">
                  {product.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Page;
