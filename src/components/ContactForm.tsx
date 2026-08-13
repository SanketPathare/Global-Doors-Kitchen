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
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log("Form submitted:", formData);
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const inputClass =
    "w-full border border-wood-500/25 bg-white/70 pl-10 pr-4 py-3 rounded-xl text-wood-800 placeholder:text-muted/70 outline-none transition-all focus:border-brass focus:ring-2 focus:ring-brass/30";

  return (
    <section className="section">
      <div className="container-lux">
        <div className="grid items-start gap-10 md:grid-cols-2 md:gap-14">
          {/* Contact Information */}
          <div className="rounded-3xl bg-wood-gradient p-8 text-cream shadow-lux md:p-10">
            <span className="eyebrow !text-brass-light">Get In Touch</span>
            <h2 className="heading mt-2 text-3xl font-semibold text-white">
              Contact Information
            </h2>
            <p className="mt-3 text-cream/80">
              Have a project in mind? Reach out and our team will get back to you
              within one business day.
            </p>
            <div className="mt-8 space-y-5">
              <div className="flex items-start space-x-4">
                <MapPin className="mt-1 h-6 w-6 flex-shrink-0 text-brass-light" />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-sm text-cream/80">
                    ijau Office, Thehur Phat, Kunjirwadi, Pune, Maharashtra 411028
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 flex-shrink-0 text-brass-light" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-sm text-cream/80">91+ 77972 12121</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 flex-shrink-0 text-brass-light" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-sm text-cream/80">
                    contact@globaldoorskitchen.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-lux p-7 md:p-9">
            <h2 className="heading mb-6 text-2xl font-semibold md:text-3xl">
              Request a Consultation
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="relative">
                <User className="absolute left-3 top-3.5 h-5 w-5 text-muted" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className={inputClass}
                />
              </div>

              <div className="relative">
                <Mail className="absolute left-3 top-3.5 h-5 w-5 text-muted" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className={inputClass}
                />
              </div>

              <div className="relative">
                <Phone className="absolute left-3 top-3.5 h-5 w-5 text-muted" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className={inputClass}
                />
              </div>

              <div className="relative">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className={`${inputClass} appearance-none`}
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
                <MessageSquare className="absolute left-3 top-3.5 h-5 w-5 text-muted" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  rows={4}
                  className={`${inputClass} pl-10`}
                />
              </div>

              <button
                type="submit"
                className="btn-brass w-full py-3.5"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
