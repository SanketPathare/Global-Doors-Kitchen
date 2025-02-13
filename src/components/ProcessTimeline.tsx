// @ts-nocheck
import React from "react";
import {
  Compass,
  Pencil,
  Ruler,
  Hammer,
  Check,
  ScanSearch,
  Truck,
  Phone,
  Wrench,
} from "lucide-react";

const ProcessTimeline = () => {
  const processSteps = [
    {
      title: "Free Consultation",
      description:
        "Meet with our expert designers to discuss your dream kitchen or door project. We'll review material options, colors, styles, and budget considerations while understanding your specific needs.",
      icon: <Phone className="w-8 h-8 text-blue-500" />,
    },
    {
      title: "Custom Design Planning",
      description:
        "Our professional design team creates detailed 3D renderings of your project, showcasing our premium door collections or custom kitchen layouts. We'll help you select from our extensive range of materials including solid wood, engineered wood, and metal options.",
      icon: <Pencil className="w-8 h-8 text-green-500" />,
    },
    {
      title: "Site Measurement",
      description:
        "Our technical team conducts precise measurements using advanced laser equipment. We assess existing structures, utilities, and space requirements to ensure perfect fit and functionality.",
      icon: <Ruler className="w-8 h-8 text-purple-500" />,
    },
    {
      title: "Material Selection & Ordering",
      description:
        "Choose from our premium selection of doors, cabinets, hardware, and accessories. We source materials from top manufacturers and order custom pieces according to your specifications.",
      icon: <Truck className="w-8 h-8 text-amber-500" />,
    },
    {
      title: "Professional Installation",
      description:
        "Our certified installation team executes the project with precision. We handle everything from door hanging and cabinet mounting to hardware installation and adjustments, ensuring proper alignment and smooth operation.",
      icon: <Wrench className="w-8 h-8 text-orange-500" />,
    },
    {
      title: "Quality Inspection",
      description:
        "Our quality control team performs a comprehensive inspection of all installed components. We check functionality, finish quality, and ensure all hardware is properly secured and adjusted.",
      icon: <ScanSearch className="w-8 h-8 text-red-500" />,
    },
    {
      title: "Final Walkthrough",
      description:
        "Walk through your completed project with our team. We'll demonstrate proper care and maintenance procedures, provide warranty information, and ensure your complete satisfaction.",
      icon: <Check className="w-8 h-8 text-emerald-500" />,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Our Process Timeline
        </h2>
        <p className="text-lg text-gray-600 mb-4">
          Transforming Your Space with Expertise and Precision
        </p>
      </div>

      <div className="relative">
        {/* Vertical Timeline Line */}
        <div className="absolute left-8 md:left-12 top-0 bottom-0 w-0.5 bg-gray-200">
          <div className="absolute inset-0 bg-amber-500 opacity-80"></div>
        </div>

        <div className="space-y-8 ">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              {/* Connection dot */}
              <div className="absolute left-8 md:left-12 -translate-x-1/2 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white border-2 border-amber-500 group-hover:border-amber-500 transition-colors duration-300"></div>

              <div className="pl-16 md:pl-24 pr-6 py-6">
                {/* Desktop and Tablet Layout */}
                <div className="hidden md:flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-50 to-amber-50 flex items-center justify-center border-2 border-gray-100 group-hover:border-gray-200 transition-colors duration-300">
                      {step.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-2">{step.description}</p>
                  </div>
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                      {step.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-1">
                      {step.description}
                    </p>
                  
                    <p className="text-xs text-amber-600 font-medium">
                      {step.duration}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessTimeline;
