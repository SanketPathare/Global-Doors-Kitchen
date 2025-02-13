import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Page = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative text-black py-12 md:py-18">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              We're here to help! Reach out to us for any inquiries about our
              doors and kitchen solutions.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className=" text-2xl md:text-3xl font-bold mb-6">
                    Get in Touch
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <Phone className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-1">Phone</h3>
                        <p className="text-gray-600">91+ 77972 12121</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Mail className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <p className="text-gray-600">
                          contact@globaldoorskitchen.com
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <MapPin className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-1">Address</h3>
                        <p className="text-gray-600">
                          ijau Office, Thehur Phat, Kunjirwadi,
                        </p>
                        <p className="text-gray-600">
                          Pune, Maharashtra 411028
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Clock className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-1">Business Hours</h3>
                        <p className="text-gray-600">
                          Monday - Friday: 9:00 AM - 6:00 PM
                        </p>
                        <p className="text-gray-600">
                          Saturday: 10:00 AM - 4:00 PM
                        </p>
                        <p className="text-gray-600">Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Google Map */}
                <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d472.9849077276717!2d74.0437045301691!3d18.48912742070776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2e70e7d160275%3A0xf5bdcd647b83e95!2sGLOBAL%20DOORS%20AND%20KITCHEN!5e0!3m2!1sen!2sin!4v1739357675334!5m2!1sen!2sin"
                    className="w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Maps Location"
                  ></iframe>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-amber-100/90 p-6 md:p-8 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md "
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md "
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md "
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md "
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md "
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md "
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-Atext-amber-600 text-white py-3 px-6 rounded-md bg-amber-600 hover:bg-amber-600/90 transition-colors duration-200"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Page;
