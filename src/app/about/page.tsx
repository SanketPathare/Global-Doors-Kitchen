import React from "react";
import { Award, Users, Clock, CheckCircle, Wrench } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AboutPage = () => {
  const stats = [
    { value: "14+", label: "Years of Experience" },
    { value: "10K+", label: "Projects Completed" },
    { value: "50+", label: "Expert Team Members" },
    { value: "98%", label: "Customer Satisfaction" },
  ];

  const values = [
    { icon: Award, title: "Quality", text: "Premium materials and superior craftsmanship in every project." },
    { icon: Users, title: "Customer Focus", text: "Dedicated to exceeding customer expectations." },
    { icon: Clock, title: "Reliability", text: "On-time delivery and consistent quality assurance." },
    { icon: Wrench, title: "Innovation", text: "Embracing new technologies and design trends." },
  ];

  const whyChoose = [
    "Premium Quality Materials",
    "Expert Craftsmanship",
    "Custom Design Solutions",
    "Professional Installation",
    "Excellent Customer Service",
    "Competitive Pricing",
  ];

  return (
    <>
      <Navbar />
      <main className="bg-cream">
        {/* Hero Section */}
        <section className="section bg-wood-gradient text-cream">
          <div className="container-lux text-center">
            <span className="eyebrow !text-brass-light">Our Story</span>
            <h1 className="heading mt-2 text-4xl font-semibold text-white sm:text-5xl md:text-6xl">
              About Global Doors &amp; Kitchen
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-cream/85">
              Crafting excellence in doors and kitchens since 2012. We bring your
              vision to life with premium materials and expert craftsmanship.
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="section">
          <div className="container-lux">
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <span className="eyebrow">Who We Are</span>
                <h2 className="heading mt-2 text-3xl font-semibold md:text-4xl">
                  Our Story
                </h2>
                <p className="mt-4 text-muted">
                  Founded in 2012, Global Doors &amp; Kitchen began with a simple
                  mission: to provide exceptional quality doors and kitchen
                  solutions that transform houses into homes.
                </p>
                <p className="mt-4 text-muted">
                  Over the past decades, we&apos;ve grown from a small local
                  workshop to a leading provider of premium doors and kitchen
                  solutions, serving thousands of satisfied customers across the
                  region.
                </p>
                <p className="mt-4 text-muted">
                  Our commitment to quality, innovation, and customer
                  satisfaction has earned us a reputation as one of the most
                  trusted names in the industry.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl bg-parchment/60 p-6 text-center shadow-lux-sm"
                  >
                    <h3 className="font-display text-3xl font-bold text-wood-700">
                      {stat.value}
                    </h3>
                    <p className="mt-1 text-sm text-muted">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section bg-sand/50">
          <div className="container-lux">
            <h2 className="heading mb-12 text-center text-3xl font-semibold md:text-4xl">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="card-lux p-6 text-center transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-wood-500/10">
                    <value.icon className="h-7 w-7 text-brass-dark" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{value.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="section">
          <div className="container-lux">
            <h2 className="heading mb-12 text-center text-3xl font-semibold md:text-4xl">
              Why Choose Us
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {whyChoose.map((item) => (
                <div
                  key={item}
                  className="flex items-center space-x-3 rounded-2xl bg-white/70 p-4 shadow-lux-sm ring-1 ring-wood-500/10"
                >
                  <CheckCircle className="h-6 w-6 flex-shrink-0 text-brass-dark" />
                  <span className="text-wood-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
