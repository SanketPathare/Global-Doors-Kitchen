// @ts-nocheck
"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      category: "General Questions",
      questions: [
        {
          question: "What areas do you service?",
          answer:
            "We service the entire Greater Toronto Area (GTA) including Toronto, Mississauga, Brampton, Vaughan, Richmond Hill, and surrounding areas. Contact us for specific location inquiries.",
        },
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

  // State to track which questions are expanded
  const [expandedCategories, setExpandedCategories] = useState({});
  const [expandedQuestions, setExpandedQuestions] = useState({});

  // Toggle category expansion
  const toggleCategory = (category) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  // Toggle question expansion
  const toggleQuestion = (categoryIndex, questionIndex) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setExpandedQuestions((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-gray-600">
          Find answers to common questions about our services
        </p>
      </div>

      <div className="space-y-6">
        {faqs.map((category, categoryIndex) => (
          <div
            key={categoryIndex}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            {/* Category Header */}
            <button
              onClick={() => toggleCategory(category.category)}
              className="w-full px-6 py-4 flex items-center justify-between bg-gradient-to-r from-amber-50 to-amber-100 hover:from-amber-100 hover:to-amber-200 transition-colors duration-300"
            >
              <h3 className="text-lg font-semibold text-gray-900">
                {category.category}
              </h3>
              {expandedCategories[category.category] ? (
                <ChevronUp className="w-6 h-6 text-gray-600" />
              ) : (
                <ChevronDown className="w-6 h-6 text-gray-600" />
              )}
            </button>

            {/* Questions in Category */}
            <div
              className={`${expandedCategories[category.category] ? "block" : "hidden"}`}
            >
              {category.questions.map((item, questionIndex) => (
                <div key={questionIndex} className="border-t border-gray-200">
                  <button
                    onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
                  >
                    <h4 className="text-left text-md font-medium text-gray-900">
                      {item.question}
                    </h4>
                    {expandedQuestions[`${categoryIndex}-${questionIndex}`] ? (
                      <ChevronUp className="flex-shrink-0 ml-4 w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="flex-shrink-0 ml-4 w-5 h-5 text-gray-500" />
                    )}
                  </button>

                  {/* Answer */}
                  <div
                    className={`px-6 pb-4 ${expandedQuestions[`${categoryIndex}-${questionIndex}`] ? "block" : "hidden"}`}
                  >
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
