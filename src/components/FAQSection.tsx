// @ts-nocheck
"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      category: "General Questions",
      questions: [
        { question: "What areas do you service?", answer: "We service the entire Pune." },
        {
          question: "Do you offer free consultations?",
          answer:
            "Yes! We offer free in-home consultations where our experts can assess your space, discuss your vision, and provide detailed quotes for your project.",
        },
        {
          question: "What is your typical project timeline?",
          answer:
            "Most kitchen projects take 3-6 weeks from initial consultation to completion. Door installations typically take 1-2 weeks. Timeline varies based on project scope and material availability.",
        },
      ],
    },
    {
      category: "Kitchen Services",
      questions: [
        {
          question: "What types of kitchen cabinets do you offer?",
          answer:
            "We offer custom, semi-custom, and stock cabinets in various materials including solid wood, MDF, and laminate. Our styles range from modern to traditional, with multiple finishes and hardware options.",
        },
        {
          question: "Do you handle kitchen renovations?",
          answer:
            "Yes, we provide full kitchen renovation services including cabinet installation, countertop fitting, backsplash installation, and coordination with plumbers and electricians.",
        },
        {
          question: "Can you work with my existing kitchen layout?",
          answer:
            "Absolutely! We can work with your existing layout or create a completely new design. Our designers will help optimize your space for both functionality and aesthetics.",
        },
      ],
    },
    {
      category: "Door Services",
      questions: [
        {
          question: "What types of doors do you install?",
          answer:
            "We install interior doors (hinged, pocket, barn), exterior doors (entry, storm, patio), garage doors, and custom doors. We offer various materials including wood, fiberglass, steel, and glass.",
        },
        {
          question: "Do you offer door repair services?",
          answer:
            "Yes, we provide door repair services including fixing alignment issues, replacing hardware, weatherstripping, and addressing structural problems.",
        },
        {
          question: "Can you match existing doors in my home?",
          answer:
            "Yes, we can match existing doors in style, color, and material. Our suppliers offer a wide range of options to ensure consistency throughout your home.",
        },
      ],
    },
    {
      category: "Warranty & Maintenance",
      questions: [
        {
          question: "What warranty do you offer?",
          answer:
            "We provide a 5-year warranty on installation and labor. Product warranties vary by manufacturer, typically ranging from 1-25 years. We'll provide detailed warranty information for your specific products.",
        },
        {
          question: "How should I maintain my new installation?",
          answer:
            "We provide detailed care instructions for all our installations. This includes cleaning guidelines, maintenance schedules, and tips for extending the life of your products.",
        },
        {
          question: "What happens if I have issues after installation?",
          answer:
            "Our customer service team is available for post-installation support. We address warranty claims promptly and can schedule service visits if needed.",
        },
      ],
    },
  ];

  const [expandedCategories, setExpandedCategories] = useState({});
  const [expandedQuestions, setExpandedQuestions] = useState({});

  const toggleCategory = (category) =>
    setExpandedCategories((prev) => ({ ...prev, [category]: !prev[category] }));

  const toggleQuestion = (categoryIndex, questionIndex) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setExpandedQuestions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section className="section">
      <div className="container-lux">
        <div className="mb-14 text-center">
          <span className="eyebrow">Support</span>
          <h2 className="heading mt-2 text-3xl font-semibold md:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted">
            Find answers to common questions about our services.
          </p>
        </div>

        <div className="mx-auto max-w-4xl space-y-5">
          {faqs.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="overflow-hidden rounded-2xl bg-white/70 shadow-lux-sm ring-1 ring-wood-500/10 backdrop-blur-sm"
            >
              <button
                onClick={() => toggleCategory(category.category)}
                className="flex w-full items-center justify-between bg-wood-500/5 px-6 py-5 text-left transition-colors hover:bg-wood-500/10"
              >
                <h3 className="font-display text-lg font-semibold text-ink">
                  {category.category}
                </h3>
                {expandedCategories[category.category] ? (
                  <ChevronUp className="h-6 w-6 text-brass-dark" />
                ) : (
                  <ChevronDown className="h-6 w-6 text-brass-dark" />
                )}
              </button>

              <div className={expandedCategories[category.category] ? "block" : "hidden"}>
                {category.questions.map((item, questionIndex) => (
                  <div key={questionIndex} className="border-t border-wood-500/10">
                    <button
                      onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                      className="flex w-full items-center justify-between px-6 py-4 text-left transition-colors hover:bg-cream/60"
                    >
                      <h4 className="text-left text-base font-medium text-wood-800">
                        {item.question}
                      </h4>
                      {expandedQuestions[`${categoryIndex}-${questionIndex}`] ? (
                        <ChevronUp className="ml-4 h-5 w-5 flex-shrink-0 text-brass-dark" />
                      ) : (
                        <ChevronDown className="ml-4 h-5 w-5 flex-shrink-0 text-brass-dark" />
                      )}
                    </button>

                    <div
                      className={`px-6 pb-4 ${
                        expandedQuestions[`${categoryIndex}-${questionIndex}`] ? "block" : "hidden"
                      }`}
                    >
                      <p className="text-muted">{item.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
