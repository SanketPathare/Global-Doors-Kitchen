"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { Mail, Phone, MapPin, User, MessageSquare, Send } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const services: string[] = [
    "Kitchen Renovation",
    "Door Installation",
    "Custom Cabinetry",
    "Door Repair",
    "Consultation",
  ];

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Implement form submission logic
      console.log("Form submitted:", formData);
      // Reset form after submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        {/* Contact Information */}
        <div className="bg-amber-50 p-6 md:p-8 rounded-lg order-2 md:order-1">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-gray-800">
            Contact Information
          </h2>
          <div className="space-y-4 md:space-y-6">
            <div className="flex items-start space-x-4">
              <MapPin className="text-amber-600 w-6 h-6 md:w-8 md:h-8 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-base md:text-lg">Address</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  ijau Office, Thehur Phat, Kunjirwadi, Pune,
                  Maharashtra 411028
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="text-amber-600 w-6 h-6 md:w-8 md:h-8 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-base md:text-lg">Phone</h3>
                <p className="text-gray-600 text-sm md:text-base">91+ 77972 12121</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="text-amber-600 w-6 h-6 md:w-8 md:h-8 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-base md:text-lg">Email</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  contact@globaldoorskitchen.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="order-1 md:order-2">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-gray-800">
            Request a Consultation
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <div className="relative">
              <User className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full pl-10 pr-4 py-2 md:py-3 border rounded-lg text-sm md:text-base"
              />
            </div>

            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="w-full pl-10 pr-4 py-2 md:py-3 border rounded-lg text-sm md:text-base"
              />
            </div>

            <div className="relative">
              <Phone className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full pl-10 pr-4 py-2 md:py-3 border rounded-lg text-sm md:text-base"
              />
            </div>

            <div className="relative">
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 md:py-3 border rounded-lg text-sm md:text-base"
              >
                <option value="">Select Service</option>
                {services.map((service, index) => (
                  <option key={index} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                rows={4}
                className="w-full pl-10 pr-4 py-2 md:py-3 border rounded-lg text-sm md:text-base"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-amber-600 text-white py-2 md:py-3 rounded-lg hover:bg-amber-600/90 transition-colors flex items-center justify-center space-x-2 text-sm md:text-base"
            >
              <Send className="w-4 h-4 md:w-5 md:h-5" />
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;