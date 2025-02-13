import React from "react";
import { Award, Users, Clock, CheckCircle, Wrench } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen container mx-auto max-w-7xl">
        {/* Hero Section */}
        <section className="relative text-black py-12 md:py-20">
          <div className="container mx-auto  px-4 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
              About Global Doors & Kitchen
            </h1>
            <p className="text-lg md:text-xl max-w-2xl text-gray-600 mx-auto px-4">
              Crafting excellence in doors and kitchens since 2012. We bring
              your vision to life with premium materials and expert
              craftsmanship.
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
                  Our Story
                </h2>
                <p className="text-gray-600 mb-4 text-sm md:text-base">
                  Founded in 2012, Global Doors & Kitchen began with a simple
                  mission: to provide exceptional quality doors and kitchen
                  solutions that transform houses into homes.
                </p>
                <p className="text-gray-600 mb-4 text-sm md:text-base">
                  Over the past decades, we've grown from a small local workshop
                  to a leading provider of premium doors and kitchen solutions,
                  serving thousands of satisfied customers across the region.
                </p>
                <p className="text-gray-600 text-sm md:text-base">
                  Our commitment to quality, innovation, and customer
                  satisfaction has earned us a reputation as one of the most
                  trusted names in the industry.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="bg-gray-100 p-4 md:p-6 rounded-lg">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1 md:mb-2">
                    14+
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    Years of Experience
                  </p>
                </div>
                <div className="bg-gray-100 p-4 md:p-6 rounded-lg">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1 md:mb-2">
                    10K+
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    Projects Completed
                  </p>
                </div>
                <div className="bg-gray-100 p-4 md:p-6 rounded-lg">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1 md:mb-2">
                    50+
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    Expert Team Members
                  </p>
                </div>
                <div className="bg-gray-100 p-4 md:p-6 rounded-lg">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1 md:mb-2">
                    98%
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    Customer Satisfaction
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              <div className="text-center">
                <div className="bg-amber-50 border border-amber-600/50  p-4 md:p-6 rounded-lg shadow-sm mb-4">
                  <Award className="w-10 h-10 md:w-12 md:h-12 mx-auto text-amber-600 mb-3 md:mb-4" />
                  <h3 className="text-lg md:text-xl font-semibold mb-2">
                    Quality
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    Premium materials and superior craftsmanship in every
                    project
                  </p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-amber-50 border border-amber-600/50 p-4 md:p-6 rounded-lg shadow-sm mb-4">
                  <Users className="w-10 h-10 md:w-12 md:h-12 mx-auto text-amber-600 mb-3 md:mb-4" />
                  <h3 className="text-lg md:text-xl font-semibold mb-2">
                    Customer Focus
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    Dedicated to exceeding customer expectations
                  </p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-amber-50 border border-amber-600/50 p-4 md:p-6 rounded-lg shadow-sm mb-4">
                  <Clock className="w-10 h-10 md:w-12 md:h-12 mx-auto text-amber-600 mb-3 md:mb-4" />
                  <h3 className="text-lg md:text-xl font-semibold mb-2">
                    Reliability
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    On-time delivery and consistent quality assurance
                  </p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-amber-50 border border-amber-600/50 p-4 md:p-6 rounded-lg shadow-sm mb-4">
                  <Wrench className="w-10 h-10 md:w-12 md:h-12 mx-auto text-amber-600 mb-3 md:mb-4" />
                  <h3 className="text-lg md:text-xl font-semibold mb-2">
                    Innovation
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    Embracing new technologies and design trends
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
              Why Choose Us
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {[
                "Premium Quality Materials",
                "Expert Craftsmanship",
                "Custom Design Solutions",
                "Professional Installation",
                "Excellent Customer Service",
                "Competitive Pricing",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 bg-amber-50 p-3 md:p-4 rounded-lg shadow-sm"
                >
                  <CheckCircle className="text-amber-600 w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
                  <span className="text-gray-700 text-sm md:text-base">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
