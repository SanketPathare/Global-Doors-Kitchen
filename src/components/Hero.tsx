"use client";

import React from "react";
import Link from "next/link";

interface HeroProps {
  videoSrc?: string;
}

const Hero: React.FC<HeroProps> = ({ videoSrc = "/videos/hero.mp4" }) => {
  return (
    <div className="relative w-full min-h-[88vh] md:h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 h-full w-full object-cover"
          aria-hidden="true"
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Warm wood gradient + subtle vignette */}
        <div
          className="absolute inset-0 bg-wood-gradient"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-wood-900/70 via-transparent to-wood-900/30"
          aria-hidden="true"
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex h-full min-h-[88vh] md:h-screen flex-col justify-center px-4 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <span className="eyebrow !text-brass-light mb-4 block">
            Premium Doors &amp; Kitchens
          </span>
          <h1 className="font-display text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Global Doors &amp; Kitchen
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-cream/90 sm:text-lg md:text-xl">
            Transforming spaces, elevating homes — bespoke wood craftsmanship
            for the modern luxury interior.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:space-y-0 sm:space-x-4">
            <Link
              href="/contact"
              className="btn-brass w-full px-8 py-3.5 text-base sm:w-auto"
            >
              Book a Consultation
            </Link>
            <Link
              href="/projects"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/70 px-8 py-3.5 text-base font-medium text-white transition-all duration-300 hover:bg-white hover:text-wood-800 sm:w-auto"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
