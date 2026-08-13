"use client";
import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";

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
    { id: "all", name: "All Products" },
    { id: "kitchen", name: "Kitchen" },
    { id: "doors", name: "Doors" },
  ];

  return (
    <section className="section">
      <div className="container-lux">
        <div className="mb-10 text-center md:mb-14">
          <span className="eyebrow">Portfolio</span>
          <h2 className="heading mt-2 text-3xl font-semibold md:text-5xl">
            Our Recent Projects
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted">
            A glimpse into the bespoke doors and kitchens we have crafted for
            homes and businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group card-lux overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lux"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-[280px] w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-[340px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-wood-900/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="absolute right-3 top-3 rounded-full bg-brass px-3 py-1 text-xs font-medium capitalize text-white shadow-lux-sm">
                  {project.category}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="mt-1 h-5 w-5 flex-shrink-0 text-brass-dark" />
                </div>
                <p className="mt-1 text-sm text-muted">{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGallery;
