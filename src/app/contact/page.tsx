import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Page = () => {
  return (
    <>
      <Navbar />
      <main className="bg-cream">
        {/* Hero Section */}
        <section className="section bg-wood-gradient text-cream">
          <div className="container-lux text-center">
            <span className="eyebrow !text-brass-light">Let&apos;s Talk</span>
            <h1 className="heading mt-2 text-4xl font-semibold text-white sm:text-5xl md:text-6xl">
              Contact Us
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-cream/85">
              We&apos;re here to help! Reach out to us for any inquiries about our
              doors and kitchen solutions.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section">
          <div className="container-lux">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="heading text-2xl font-semibold md:text-3xl">
                    Get in Touch
                  </h2>
                  <div className="mt-6 space-y-5">
                    <div className="flex items-start space-x-4">
                      <Phone className="mt-1 h-6 w-6 flex-shrink-0 text-brass-dark" />
                      <div>
                        <h3 className="font-semibold text-ink">Phone</h3>
                        <p className="text-muted">91+ 77972 12121</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Mail className="mt-1 h-6 w-6 flex-shrink-0 text-brass-dark" />
                      <div>
                        <h3 className="font-semibold text-ink">Email</h3>
                        <p className="text-muted">contact@globaldoorskitchen.com</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <MapPin className="mt-1 h-6 w-6 flex-shrink-0 text-brass-dark" />
                      <div>
                        <h3 className="font-semibold text-ink">Address</h3>
                        <p className="text-muted">
                          ijau Office, Thehur Phat, Kunjirwadi,
                          <br />
                          Pune, Maharashtra 411028
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Clock className="mt-1 h-6 w-6 flex-shrink-0 text-brass-dark" />
                      <div>
                        <h3 className="font-semibold text-ink">Business Hours</h3>
                        <p className="text-muted">Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p className="text-muted">Saturday: 10:00 AM - 4:00 PM</p>
                        <p className="text-muted">Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-64 overflow-hidden rounded-3xl shadow-lux ring-1 ring-wood-500/10 md:h-80">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d472.9849077276717!2d74.0437045301691!3d18.48912742070776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2e70e7d160275%3A0xf5bdcd647b83e95!2sGLOBAL%20DOORS%20AND%20KITCHEN!5e0!3m2!1sen!2sin!4v1739357675334!5m2!1sen!2sin"
                    className="h-full w-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Maps Location"
                  />
                </div>
              </div>

              {/* Contact Form */}
              <div className="card-lux p-7 md:p-9">
                <h2 className="heading mb-6 text-2xl font-semibold">
                  Send us a Message
                </h2>
                <form className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="mb-2 block text-sm font-medium text-wood-700"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full rounded-xl border border-wood-500/25 bg-white/70 px-4 py-2.5 outline-none transition-all focus:border-brass focus:ring-2 focus:ring-brass/30"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="mb-2 block text-sm font-medium text-wood-700"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full rounded-xl border border-wood-500/25 bg-white/70 px-4 py-2.5 outline-none transition-all focus:border-brass focus:ring-2 focus:ring-brass/30"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-wood-700"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full rounded-xl border border-wood-500/25 bg-white/70 px-4 py-2.5 outline-none transition-all focus:border-brass focus:ring-2 focus:ring-brass/30"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium text-wood-700"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full rounded-xl border border-wood-500/25 bg-white/70 px-4 py-2.5 outline-none transition-all focus:border-brass focus:ring-2 focus:ring-brass/30"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-2 block text-sm font-medium text-wood-700"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full rounded-xl border border-wood-500/25 bg-white/70 px-4 py-2.5 outline-none transition-all focus:border-brass focus:ring-2 focus:ring-brass/30"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-wood-700"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full rounded-xl border border-wood-500/25 bg-white/70 px-4 py-2.5 outline-none transition-all focus:border-brass focus:ring-2 focus:ring-brass/30"
                      required
                    />
                  </div>
                  <button type="submit" className="btn-brass w-full py-3.5">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Page;
