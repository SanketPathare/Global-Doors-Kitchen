"use client"

import React, { useState } from 'react';
import {
  Lock,
  Shield,
  Hammer,
  Building2
} from 'lucide-react';

interface Feature {
  title: string;
  description: string;
}

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  images: string;
}

interface Services {
  [key: string]: Service;
}

const DoorServices: React.FC = () => {
  const [activeService, setActiveService] = useState<string>('residential');

  const services: Services = {
    residential: {
      title: 'Residential Door Solutions',
      description: 'Premium door installations and replacements for your home.',
      icon: <Lock className="w-8 h-8 md:w-12 md:h-12 text-amber-600" />,
      features: [
        'Custom Door Design',
        'Material Selection',
        'Security Enhancement',
        'Aesthetic Improvement'
      ],
      images: "/images/ResidentialDoor.jpg"
    },
    commercial: {
      title: 'Commercial Door Systems',
      description: 'Advanced door solutions for business and professional spaces.',
      icon: <Building2 className="w-8 h-8 md:w-12 md:h-12 text-amber-600" />,
      features: [
        'Access Control Integration',
        'High-Traffic Durability',
        'Compliance Certification',
        'Professional Installation'
      ],
      images: "/images/CommerciaSystems.avif"
    },
    repair: {
      title: 'Door Repair & Maintenance',
      description: 'Expert repair and restoration of existing door systems.',
      icon: <Hammer className="w-8 h-8 md:w-12 md:h-12 text-amber-600" />,
      features: [
        'Comprehensive Diagnostics',
        'Precision Repairs',
        'Hardware Replacement',
        'Performance Optimization'
      ],
      images: "/images/DoorRepair.webp"
    },
  };

  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-4">
          Door Services
        </h2>
        <p className="text-lg md:text-xl text-gray-600">
          Security, Style, and Functionality
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center mb-8 space-y-2 md:space-y-0 md:space-x-4">
        {Object.keys(services).map((serviceKey) => (
          <button
            key={serviceKey}
            onClick={() => setActiveService(serviceKey)}
            className={`px-4 md:px-6 py-2 md:py-3 rounded-lg transition-all ${
              activeService === serviceKey
                ? 'bg-amber-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            <span className="text-sm md:text-base">
              {services[serviceKey].title}
            </span>
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
        <div className="order-1 md:order-1">
          <img
            src={services[activeService].images}
            alt={`${services[activeService].title} Preview`}
            className="w-full h-[250px] md:h-[400px] rounded-lg shadow-xl "
          />
        </div>
        
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg order-2 md:order-2">
          <div className="flex items-center mb-4 md:mb-6">
            {services[activeService].icon}
            <h3 className="text-xl md:text-2xl font-bold ml-3 md:ml-4 text-gray-800">
              {services[activeService].title}
            </h3>
          </div>
          <p className="text-gray-600 mb-6 text-sm md:text-base">
            {services[activeService].description}
          </p>
          <div className="space-y-3 md:space-y-4">
            {services[activeService].features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-3"
              >
                <Shield className="w-5 h-5 md:w-6 md:h-6 text-amber-600 flex-shrink-0" />
                <span className="text-gray-700 text-sm md:text-base">
                  {feature}
                </span>
              </div>
            ))}
          </div>
          <button 
            className="mt-6 w-full bg-amber-600 text-white py-2 md:py-3 rounded-lg hover:bg-amber-600/90 transition-colors text-sm md:text-base"
            onClick={() => console.log('Quote requested for:', services[activeService].title)}
          >
            Get Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoorServices;