// @ts-nocheck
import React from "react";
import {
  Phone,
  Pencil,
  Ruler,
  Truck,
  Wrench,
  ScanSearch,
  Check,
} from "lucide-react";

const ProcessTimeline = () => {
  const processSteps = [
    {
      title: "Free Consultation",
      description:
        "Meet with our expert designers to discuss your dream kitchen or door project. We'll review material options, colors, styles, and budget considerations while understanding your specific needs.",
      icon: <Phone className="h-7 w-7 text-brass-dark" />,
    },
    {
      title: "Custom Design Planning",
      description:
        "Our professional design team creates detailed 3D renderings of your project, showcasing our premium door collections or custom kitchen layouts. We'll help you select from our extensive range of materials including solid wood, engineered wood, and metal options.",
      icon: <Pencil className="h-7 w-7 text-brass-dark" />,
    },
    {
      title: "Site Measurement",
      description:
        "Our technical team conducts precise measurements using advanced laser equipment. We assess existing structures, utilities, and space requirements to ensure perfect fit and functionality.",
      icon: <Ruler className="h-7 w-7 text-brass-dark" />,
    },
    {
      title: "Material Selection & Ordering",
      description:
        "Choose from our premium selection of doors, cabinets, hardware, and accessories. We source materials from top manufacturers and order custom pieces according to your specifications.",
      icon: <Truck className="h-7 w-7 text-brass-dark" />,
    },
    {
      title: "Professional Installation",
      description:
        "Our certified installation team executes the project with precision. We handle everything from door hanging and cabinet mounting to hardware installation and adjustments, ensuring proper alignment and smooth operation.",
      icon: <Wrench className="h-7 w-7 text-brass-dark" />,
    },
    {
      title: "Quality Inspection",
      description:
        "Our quality control team performs a comprehensive inspection of all installed components. We check functionality, finish quality, and ensure all hardware is properly secured and adjusted.",
      icon: <ScanSearch className="h-7 w-7 text-brass-dark" />,
    },
    {
      title: "Final Walkthrough",
      description:
        "Walk through your completed project with our team. We'll demonstrate proper care and maintenance procedures, provide warranty information, and ensure your complete satisfaction.",
      icon: <Check className="h-7 w-7 text-brass-dark" />,
    },
  ];

  return (
    <section className="section">
      <div className="container-lux">
        <div className="mb-14 text-center">
          <span className="eyebrow">How We Work</span>
          <h2 className="heading mt-2 text-3xl font-semibold md:text-5xl">
            Our Process Timeline
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted">
            Transforming your space with expertise and precision.
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-8 top-0 h-full w-0.5 bg-wood-500/20 md:left-12">
            <div className="absolute inset-0 bg-brass-gradient opacity-80" />
          </div>

          <div className="space-y-6">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="group relative rounded-2xl bg-white/70 p-6 shadow-lux-sm ring-1 ring-wood-500/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lux"
              >
                <div className="absolute -left-3 top-1/2 h-5 w-5 -translate-y-1/2 translate-x-7 rounded-full border-2 border-brass bg-cream md:translate-x-11">
                  <span className="absolute inset-0 m-auto h-1.5 w-1.5 rounded-full bg-brass" />
                </div>

                <div className="flex items-start space-x-4 pl-12 md:space-x-6 md:pl-20">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-wood-500/10">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted md:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
