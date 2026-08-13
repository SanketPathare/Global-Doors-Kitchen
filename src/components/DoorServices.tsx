"use client";

import React, { useState } from "react";
import { Lock, Shield, Hammer, Building2 } from "lucide-react";

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  images: string;
}

const DoorServices: React.FC = () => {
  const [activeService, setActiveService] = useState<string>("residential");

  const services: { [key: string]: Service } = {
    residential: {
      title: "Residential Door Solutions",
      description:
        "Premium door installations and replacements tailored to the character of your home.",
      icon: <Lock className="h-7 w-7 md:h-9 md:w-9 text-brass-dark" />,
      features: [
        "Custom Door Design",
        "Material Selection",
        "Security Enhancement",
        "Aesthetic Improvement",
      ],
      images: "/images/ResidentialDoor.jpg",
    },
    commercial: {
      title: "Commercial Door Systems",
      description:
        "Advanced door solutions engineered for business and professional spaces.",
      icon: <Building2 className="h-7 w-7 md:h-9 md:w-9 text-brass-dark" />,
      features: [
        "Access Control Integration",
        "High-Traffic Durability",
        "Compliance Certification",
        "Professional Installation",
      ],
      images: "/images/CommerciaSystems.avif",
    },
    repair: {
      title: "Door Repair & Maintenance",
      description:
        "Expert repair and restoration of existing door systems with precision.",
      icon: <Hammer className="h-7 w-7 md:h-9 md:w-9 text-brass-dark" />,
      features: [
        "Comprehensive Diagnostics",
        "Precision Repairs",
        "Hardware Replacement",
        "Performance Optimization",
      ],
      images: "/images/DoorRepair.webp",
    },
  };

  return (
    <section className="section">
      <div className="container-lux">
        <div className="mb-10 text-center md:mb-14">
          <span className="eyebrow">Our Expertise</span>
          <h2 className="heading mt-2 text-3xl font-semibold md:text-5xl">
            Door Services
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted">
            Security, style, and functionality — crafted to last.
          </p>
        </div>

        <div className="mb-10 flex flex-col items-center justify-center gap-3 md:flex-row md:space-x-3">
          {Object.keys(services).map((serviceKey) => (
            <button
              key={serviceKey}
              onClick={() => setActiveService(serviceKey)}
              className={`w-full rounded-full px-5 py-3 text-sm font-medium transition-all duration-300 md:w-auto ${
                activeService === serviceKey
                  ? "bg-wood-gradient text-white shadow-lux-sm"
                  : "border border-wood-500/30 bg-white/60 text-wood-700 hover:border-brass"
              }`}
            >
              {services[serviceKey].title}
            </button>
          ))}
        </div>

        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="order-1 overflow-hidden rounded-3xl shadow-lux ring-1 ring-wood-500/10">
            <img
              src={services[activeService].images}
              alt={`${services[activeService].title} Preview`}
              className="h-[260px] w-full object-cover md:h-[440px]"
            />
          </div>

          <div className="card-lux order-2 p-7 md:p-9">
            <div className="mb-5 flex items-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-wood-500/10">
                {services[activeService].icon}
              </div>
              <h3 className="ml-4 font-display text-2xl font-semibold text-ink">
                {services[activeService].title}
              </h3>
            </div>
            <p className="mb-6 text-muted">
              {services[activeService].description}
            </p>
            <div className="space-y-3">
              {services[activeService].features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 flex-shrink-0 text-brass-dark" />
                  <span className="text-wood-700">{feature}</span>
                </div>
              ))}
            </div>
            <button className="btn-brass mt-8 w-full">Get Quote</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoorServices;
