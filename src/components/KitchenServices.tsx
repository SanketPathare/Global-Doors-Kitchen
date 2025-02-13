"use client"

import React, { useState } from 'react';
import {
  Home,
  ShoppingCart,
  Star,
  Settings,
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

const KitchenServices: React.FC = () => {
  const [activeService, setActiveService] = useState<string>('renovation');

  const services: Services = {
    renovation: {
      title: 'Kitchen Renovation',
      description: 'Complete transformation of your kitchen space with modern design and functionality.',
      icon: <Home className="w-8 h-8 md:w-12 md:h-12 text-amber-600" />,
      features: [
        'Custom Layout Design',
        'Full Space Reconfiguration',
        'Modern Appliance Integration',
        'Comprehensive Styling',
      ],
      images: 'images/KitchenRenovation.avif'
    },
    cabinetry: {
      title: 'Custom Cabinetry',
      description: 'Precision-crafted cabinets tailored to your exact specifications and style.',
      icon: <ShoppingCart className="w-8 h-8 md:w-12 md:h-12 text-amber-600" />,
      features: [
        'Personalized Design',
        'Premium Materials',
        'Maximized Storage Solutions',
        'Custom Finishes'
      ],
      images: 'images/CustomCabinetry.avif'
    },
    consultation: {
      title: 'Design Consultation',
      description: 'Expert guidance to transform your kitchen vision into a realistic plan.',
      icon: <Star className="w-8 h-8 md:w-12 md:h-12 text-amber-600" />,
      features: [
        '3D Visualization',
        'Material Selection',
        'Budget Planning',
        'Professional Recommendations'
      ],
      images: 'images/DesignConsultation.jpeg'
    }
  };

  return (
    <div className="container mx-auto max-w-7xl px-4 py-8 md:py-16">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-4">
          Kitchen Services
        </h2>
        <p className="text-lg md:text-xl text-gray-600">
          Transforming Spaces, Elevating Lifestyles
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
            {services[serviceKey].title}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg order-2 md:order-1">
          <div className="flex items-center mb-4 md:mb-6">
            {services[activeService].icon}
            <h3 className="text-xl md:text-2xl font-bold ml-3 md:ml-4 text-gray-800">
              {services[activeService].title}
            </h3>
          </div>
          <p className="text-gray-600 mb-6">
            {services[activeService].description}
          </p>
          <div className="space-y-3 md:space-y-4">
            {services[activeService].features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-3"
              >
                <Settings className="w-5 h-5 md:w-6 md:h-6 text-amber-600" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
          <button 
            className="mt-6 w-full bg-amber-600 text-white py-2 md:py-3 rounded-lg hover:bg-amber-600/90 transition-colors"
            onClick={() => console.log('Quote requested for:', services[activeService].title)}
          >
            Get Quote
          </button>
        </div>
        <div className="order-1 md:order-2">
          <img
            src={services[activeService].images}
            alt={`${services[activeService].title} Preview`}
            className="w-full h-[300px] md:h-[400px] rounded-lg shadow-xl object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default KitchenServices;