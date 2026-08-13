import React from "react";
import { Facebook, Instagram, Mail, Phone, MapPin, Clock } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-wood-800 text-cream">
      {/* Main Footer Content */}
      <div className="container-lux py-14 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" aria-label="Home">
              <span className="inline-flex rounded-2xl bg-cream p-2.5 shadow-lux-sm">
                <img
                  src="/images/logo.png"
                  alt="Global Doors & Kitchen logo"
                  className="h-16 w-auto"
                />
              </span>
            </Link>
            <h3 className="font-display text-2xl font-semibold text-white">
              Global Doors &amp; Kitchen
            </h3>
            <p className="text-sm leading-relaxed text-cream/70">
              Your trusted partner in premium doors and kitchen solutions.
              Quality craftsmanship since 2012.
            </p>
            <div className="flex space-x-3">
              <Link
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/20 text-cream transition-colors hover:border-brass hover:bg-brass"
              >
                <Facebook size={18} />
              </Link>
              <Link
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/20 text-cream transition-colors hover:border-brass hover:bg-brass"
              >
                <Instagram size={18} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-display text-lg font-semibold text-brass-light">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm text-cream/75">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Projects", href: "/projects" },
                { label: "Gallery", href: "#" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-brass-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="mb-4 font-display text-lg font-semibold text-brass-light">
              Our Products
            </h4>
            <ul className="space-y-3 text-sm text-cream/75">
              {[
                "Interior Doors",
                "Exterior Doors",
                "Kitchen Cabinets",
                "Countertops",
                "Hardware & Accessories",
              ].map((label) => (
                <li key={label}>
                  <Link
                    href="#"
                    className="transition-colors hover:text-brass-light"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="mb-4 font-display text-lg font-semibold text-brass-light">
              Contact Us
            </h4>
            <div className="flex items-start space-x-3 text-sm text-cream/75">
              <Phone size={18} className="mt-0.5 flex-shrink-0 text-brass-light" />
              <span>91+ 77972 12121</span>
            </div>
            <div className="flex items-start space-x-3 text-sm text-cream/75">
              <Mail size={18} className="mt-0.5 flex-shrink-0 text-brass-light" />
              <span>contact@globaldoorskitchen.com</span>
            </div>
            <div className="flex items-start space-x-3 text-sm text-cream/75">
              <MapPin size={18} className="mt-0.5 flex-shrink-0 text-brass-light" />
              <span>
                ijau Office, Thehur Phat, Kunjirwadi, Pune, Maharashtra, 411028
              </span>
            </div>
            <div className="flex items-start space-x-3 text-sm text-cream/75">
              <Clock size={18} className="mt-0.5 flex-shrink-0 text-brass-light" />
              <span>Mon-Sat: 9AM-6PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cream/10">
        <div className="container-lux flex flex-col items-center justify-between gap-3 py-6 md:flex-row">
          <p className="text-xs text-cream/60">
            &copy; {new Date().getFullYear()} Global Doors &amp; Kitchen. All
            rights reserved.
          </p>
          <Link
            href="https://portfolio-sanket-pathare.vercel.app/"
            target="_blank"
            className="text-xs text-cream/60 transition-colors hover:text-brass-light"
          >
            Crafted by : Sanket Pathare
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
