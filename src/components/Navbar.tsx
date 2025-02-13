"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

// Navigation Configuration
const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      className="sticky top-0 z-50 bg-amber-100/80 border-b border-amber-500"
      aria-label="Main Navigation"
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-14">
        <div className="flex items-center justify-between h-[78px]">
          {/* Logo */}
          <Link href="/" className="" aria-label="Home">
            <img
              src="/images/logo.png"
              alt="logo"
              className=" h-[80px] w-[100px] mb-1 "
            />
          </Link>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X className="h-8 w-8" aria-hidden="true" />
              ) : (
                <Menu className="h-8 w-8" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-lg font-medium hover:text-orange-500 transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden" role="menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={closeMenu}
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-amber-500"
                  role="menuitem"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
