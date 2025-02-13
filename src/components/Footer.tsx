import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Clock } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-amber-100/80  text-black">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link
            href="/"
            className=""
            aria-label="Home"
          >
            <img src="/images/logo.png" alt="logo"  className=" h-32 w-30  marker:flex justify-center items-center mb-4 " />
            <h3 className="text-xl font-bold text-black mb-4">Global Doors & Kitchen</h3>
          </Link>
            <p className="text-md">Your trusted partner in premium doors and kitchen solutions. Quality craftsmanship since 2012.</p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-gray-600 transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="hover:text-gray-600 transition-colors">
                <Instagram size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-600 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-gray-600 transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-gray-600 transition-colors">About Us</Link></li>
              <li><Link href="/projects" className="hover:text-gray-600 transition-colors">Projects</Link></li>
              <li><Link href="#" className="hover:text-gray-600 transition-colors">Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-gray-600 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold text-gray-600 mb-4">Our Products</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-gray-600 transition-colors">Interior Doors</Link></li>
              <li><Link href="#" className="hover:text-gray-600 transition-colors">Exterior Doors</Link></li>
              <li><Link href="#" className="hover:text-gray-600 transition-colors">Kitchen Cabinets</Link></li>
              <li><Link href="#" className="hover:text-gray-600 transition-colors">Countertops</Link></li>
              <li><Link href="#" className="hover:text-gray-600 transition-colors">Hardware & Accessories</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-600 mb-4">Contact Us</h4>
            <div className="flex items-center space-x-3">
              <Phone size={18} />
              <span>91+ 77972 12121</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail size={18} />
              <span>contact@globaldoorskitchen.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin size={18} />
              <span>  ijau Office, Thehur Phat,<br /> Kunjirwadi, Pune <br />
              Maharashtra,<br />411028</span>
            </div>
            <div className="flex items-center space-x-3">
              <Clock size={18} />
              <span>Mon-Sat: 9AM-6PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">&copy; {new Date().getFullYear()} Global Doors & Kitchen. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
          
              <Link href="https://portfolio-sanket-pathare.vercel.app/" target='_blank' className="text-sm hover:text-gray-600 transition-colors hover:underline">Build by : Sanket Pathare</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;