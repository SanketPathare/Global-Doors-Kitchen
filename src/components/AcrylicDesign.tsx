import React from "react";

const GlobalDoorsKitchen = () => {
  const services = [
    {
      title: "Acrylic Design Kitchens",
      description:
        "Transform your kitchen with our premium acrylic finishes. Our modern designs combine style with durability, featuring:",
      features: [
        "High-gloss acrylic cabinet doors",
        "Scratch-resistant surfaces",
        "Custom color options",
        "Seamless finishes",
        "Modern hardware solutions",
      ],
      images: [
        { src: "/images/AcrylicKitchenCabinet.png", alt: "Modern acrylic kitchen design", caption: "Premium Acrylic Kitchen Cabinet" },
        { src: "/images/High-glossDetail.jpg", alt: "Kitchen cabinet detail", caption: "High-gloss Finish Detail" },
      ],
    },
    {
      title: "Acrylic Designer Doors",
      description: "Enhance your space with our elegant door collection, offering:",
      features: [
        "Acrylic finish doors",
        "Custom size options",
        "Premium hardware",
        "Sound insulation",
        "Weather-resistant coating",
      ],
      images: [
        { src: "/images/AcrylicDoor.jpg", alt: "Modern door design", caption: "Designer Acrylic Door" },
        { src: "/images/HardwareDetail.webp", alt: "Door detail", caption: "Premium Hardware Detail" },
      ],
    },
    {
      title: "Acrylic Temple Designs",
      description: "Create a sacred space with our specialized temple designs featuring:",
      features: [
        "Traditional & modern designs",
        "Acrylic backlit panels",
        "Custom mandir layouts",
        "Premium wood combinations",
        "Detailed carving effects",
      ],
      images: [
        { src: "/images/ContemporaryDesign.jpeg", alt: "Modern temple design", caption: "Contemporary Temple Design" },
        { src: "images/BacklitPanel.webp", alt: "Temple detail", caption: "Backlit Panel Detail" },
      ],
    },
  ];

  return (
    <section className="section bg-cream">
      <div className="container-lux space-y-20">
        {services.map((service, index) => (
          <div key={index} className="space-y-8">
            <div className="text-center">
              <span className="eyebrow">Finishes</span>
              <h2 className="heading mt-2 text-3xl font-semibold md:text-4xl">
                {service.title}
              </h2>
              <p className="mx-auto mt-3 max-w-3xl text-muted">
                {service.description}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {service.images.map((image, idx) => (
                <figure key={idx} className="group space-y-3">
                  <div className="overflow-hidden rounded-3xl bg-parchment p-3 shadow-lux-sm ring-1 ring-wood-500/10">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="aspect-[4/3] w-full rounded-2xl object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <figcaption className="text-center text-sm text-muted">
                    {image.caption}
                  </figcaption>
                </figure>
              ))}
            </div>

            <div className="card-lux p-6 md:p-8">
              <ul className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <span className="h-2 w-2 flex-shrink-0 rounded-full bg-brass" />
                    <span className="text-wood-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GlobalDoorsKitchen;
