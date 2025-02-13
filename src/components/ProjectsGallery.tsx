"use client";
import React, { useState } from "react";
import { Search, Filter, Image as ImageIcon } from "lucide-react";

const ProjectsGallery = () => {
  const projects = [
    {
      id: 1,
      title: "Modern Kitchen Renovation",
      category: "kitchen",
      image: "/images/ModernKitchen.avif",
      description: "Sleek contemporary kitchen with custom cabinetry",
    },
    {
      id: 2,
      title: "Classic Wooden Doors",
      category: "doors",
      image: "/images/ClassiDoors.webp",
      description: "Elegant wooden door installation for classic home",
    },
    {
      id: 3,
      title: "Open Concept Kitchen",
      category: "kitchen",
      image: "/images/OpenKitchen.jpg",
      description: "Spacious kitchen design with island and modern appliances",
    },
    {
      id: 4,
      title: "Commercial Doors",
      category: "doors",
      image: "/images/CommercialDoor.jpg",
      description: "Custom door solutions for commercial spaces",
    },
  ];

  const categories = [
    { id: "all", name: "All  Products" },
    { id: "kitchen", name: "Kitchen" },
    { id: "doors", name: "Doors" },
  ];

  return (
    <div className="container mx-auto max-w-7xl px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">
          Our Recent Projects
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white border border-gray-100 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[350px] object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsGallery;
