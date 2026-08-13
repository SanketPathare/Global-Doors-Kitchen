"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/85 backdrop-blur-md shadow-lux-sm border-b border-wood-500/10"
          : "bg-cream/60 backdrop-blur-sm"
      }`}
      aria-label="Main Navigation"
    >
      <div className="container-lux">
        <div className="flex items-center justify-between h-[78px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3" aria-label="Home">
            <img
              src="/images/logo.png"
              alt="Global Doors & Kitchen logo"
              className="h-12 w-auto drop-shadow-sm"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group relative px-4 py-2 text-[15px] font-medium text-wood-700 transition-colors duration-200 hover:text-brass-dark"
              >
                {item.label}
                <span className="absolute left-4 right-4 bottom-1 h-[2px] scale-x-0 bg-brass-gradient transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
            <Link href="/contact" className="btn-brass ml-3">
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center rounded-md p-2 text-wood-700 transition-colors hover:bg-wood-500/10"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X className="h-7 w-7" aria-hidden="true" />
              ) : (
                <Menu className="h-7 w-7" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-96 pb-4" : "max-h-0"
          }`}
          role="menu"
        >
          <div className="space-y-1 rounded-2xl bg-white/80 p-3 shadow-lux-sm backdrop-blur-md">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className="block rounded-xl px-4 py-3 text-base font-medium text-wood-700 transition-colors hover:bg-wood-500/10 hover:text-brass-dark"
                role="menuitem"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={closeMenu}
              className="btn-brass mt-2 w-full"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
