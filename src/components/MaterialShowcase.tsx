"use client";
import React, { useState, useEffect } from "react";
import {
  PaletteIcon,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";

const MaterialShowcase = () => {
  const [currentMaterial, setCurrentMaterial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const materials = [
    {
      name: "Quartz Countertops",
      category: "Countertops",
      description:
        "Durable, non-porous surface with exceptional resistance to stains and scratches.",
      features: [
        "Highly Durable",
        "Low Maintenance",
        "Wide Color Range",
        "Hygienic Surface",
      ],
      image: "/images/QuartzCountertops.jpg",
    },
    {
      name: "Hardwood Cabinetry",
      category: "Cabinetry",
      description:
        "Premium hardwood with custom finishes for timeless elegance and durability.",
      features: [
        "Custom Finishes",
        "Long-Lasting",
        "Rich Texture",
        "Multiple Wood Types",
      ],
      image: "/images/HardwoodCabinetry.jpg",
    },
    {
      name: "Modern Sliding Doors",
      category: "Doors",
      description:
        "Sleek, space-saving door solutions with advanced hardware and smooth operation.",
      features: [
        "Space Optimization",
        "Contemporary Design",
        "Multiple Configurations",
        "High-Quality Tracks",
      ],
      image: "/images/ModernSliding.jpg",
    },
  ];

  useEffect(() => {
    let intervalId:any;

    if (isAutoPlaying) {
      intervalId = setInterval(() => {
        setCurrentMaterial((prev) => (prev + 1) % materials.length);
      }, 3000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isAutoPlaying, materials.length]);

  const nextMaterial = () => {
    setIsAutoPlaying(false);
    setCurrentMaterial((prev) => (prev + 1) % materials.length);
    // Resume auto-playing after 5 seconds of user inactivity
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const prevMaterial = () => {
    setIsAutoPlaying(false);
    setCurrentMaterial((prev) =>
      prev === 0 ? materials.length - 1 : prev - 1
    );
    // Resume auto-playing after 5 seconds of user inactivity
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const currentMat = materials[currentMaterial];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Premium Materials
        </h2>
        <p className="text-xl text-gray-600">
          Quality Craftsmanship in Every Detail
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Material Image */}
        <div className="relative">
          <img
            src={currentMat.image}
            alt={currentMat.name}
            className="w-full h-96 rounded-lg shadow-lg object-cover"
          />
          <div className="absolute inset-y-0 left-0 flex items-center">
            <button
              onClick={prevMaterial}
              className="bg-white/50 hover:bg-white/70 p-2 rounded-full transition-colors"
              aria-label="Previous material"
            >
              <ChevronLeft className="w-8 h-8 text-gray-800" />
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center">
            <button
              onClick={nextMaterial}
              className="bg-white/50 hover:bg-white/70 p-2 rounded-full transition-colors"
              aria-label="Next material"
            >
              <ChevronRight className="w-8 h-8 text-gray-800" />
            </button>
          </div>
        </div>

        {/* Material Details */}
        <div>
          <div className="flex items-center mb-4">
            <PaletteIcon className="w-10 h-10 text-amber-500 mr-4" />
            <div>
              <h3 className="text-3xl font-bold text-gray-800">
                {currentMat.name}
              </h3>
              <p className="text-gray-600">{currentMat.category}</p>
            </div>
          </div>

          <p className="text-lg text-gray-700 mb-6">{currentMat.description}</p>

          <div className="space-y-4">
            {currentMat.features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <ShieldCheck className="w-6 h-6 text-amber-600" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>

          {/* <button className="mt-8 bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-600/90 transition-colors">
            Explore Material
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default MaterialShowcase;
