"use client";

import React from "react";
import Link from "next/link";

interface HeroProps {
  videoSrc?: string;
}

const Hero: React.FC<HeroProps> = ({ videoSrc = "/videos/hero.mp4" }) => {
  return (
    <div className="relative w-full min-h-screen md:h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
          aria-hidden="true"
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col justify-center items-center h-screen text-white text-center px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            Global Doors & Kitchen
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8">
            Transforming Spaces, Elevating Homes
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
            <Link
              href="/contact"
              className="bg-white text-black px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-gray-200 transition duration-300 text-sm md:text-base"
            >
              Contact Us
            </Link>
            <Link
              href="/services"
              className="bg-transparent border-2 border-white text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-white hover:text-black transition duration-300 text-sm md:text-base"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
