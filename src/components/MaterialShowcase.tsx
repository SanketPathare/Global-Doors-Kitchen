"use client";
import React, { useState, useEffect } from "react";
import { PaletteIcon, ChevronLeft, ChevronRight, ShieldCheck } from "lucide-react";

const MaterialShowcase = () => {
  const [currentMaterial, setCurrentMaterial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const materials = [
    {
      name: "Quartz Countertops",
      category: "Countertops",
      description:
        "Durable, non-porous surface with exceptional resistance to stains and scratches.",
      features: ["Highly Durable", "Low Maintenance", "Wide Color Range", "Hygienic Surface"],
      image: "/images/QuartzCountertops.jpg",
    },
    {
      name: "Hardwood Cabinetry",
      category: "Cabinetry",
      description:
        "Premium hardwood with custom finishes for timeless elegance and durability.",
      features: ["Custom Finishes", "Long-Lasting", "Rich Texture", "Multiple Wood Types"],
      image: "/images/HardwoodCabinetry.jpg",
    },
    {
      name: "Modern Sliding Doors",
      category: "Doors",
      description:
        "Sleek, space-saving door solutions with advanced hardware and smooth operation.",
      features: ["Space Optimization", "Contemporary Design", "Multiple Configurations", "High-Quality Tracks"],
      image: "/images/ModernSliding.jpg",
    },
  ];

  useEffect(() => {
    let intervalId: any;
    if (isAutoPlaying) {
      intervalId = setInterval(() => {
        setCurrentMaterial((prev) => (prev + 1) % materials.length);
      }, 4000);
    }
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isAutoPlaying, materials.length]);

  const nextMaterial = () => {
    setIsAutoPlaying(false);
    setCurrentMaterial((prev) => (prev + 1) % materials.length);
    setTimeout(() => setIsAutoPlaying(true), 6000);
  };

  const prevMaterial = () => {
    setIsAutoPlaying(false);
    setCurrentMaterial((prev) => (prev === 0 ? materials.length - 1 : prev - 1));
    setTimeout(() => setIsAutoPlaying(true), 6000);
  };

  const currentMat = materials[currentMaterial];

  return (
    <section className="section bg-sand/50">
      <div className="container-lux">
        <div className="mb-12 text-center">
          <span className="eyebrow">Crafted From</span>
          <h2 className="heading mt-2 text-3xl font-semibold md:text-5xl">
            Premium Materials
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted">
            Quality craftsmanship in every detail.
          </p>
        </div>

        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-3xl shadow-lux ring-1 ring-wood-500/10">
            <img
              src={currentMat.image}
              alt={currentMat.name}
              className="h-80 w-full object-cover md:h-[460px]"
            />
            <button
              onClick={prevMaterial}
              className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-cream/80 text-wood-700 shadow-lux-sm backdrop-blur transition-colors hover:bg-brass hover:text-white"
              aria-label="Previous material"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextMaterial}
              className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-cream/80 text-wood-700 shadow-lux-sm backdrop-blur transition-colors hover:bg-brass hover:text-white"
              aria-label="Next material"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2">
              {materials.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 rounded-full transition-all ${
                    i === currentMaterial ? "w-6 bg-brass" : "w-1.5 bg-cream/70"
                  }`}
                />
              ))}
            </div>
          </div>

          <div>
            <div className="mb-5 flex items-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-wood-500/10">
                <PaletteIcon className="h-7 w-7 text-brass-dark" />
              </div>
              <div className="ml-4">
                <h3 className="font-display text-3xl font-semibold text-ink">
                  {currentMat.name}
                </h3>
                <p className="text-sm uppercase tracking-widest text-brass-dark">
                  {currentMat.category}
                </p>
              </div>
            </div>

            <p className="mb-6 text-lg text-muted">{currentMat.description}</p>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {currentMat.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 rounded-xl bg-white/60 px-4 py-3"
                >
                  <ShieldCheck className="h-5 w-5 flex-shrink-0 text-brass-dark" />
                  <span className="text-wood-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaterialShowcase;
