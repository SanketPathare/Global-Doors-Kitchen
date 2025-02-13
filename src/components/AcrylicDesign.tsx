import React from 'react';


const GlobalDoorsKitchen = () => {
  const services = [
    {
      title: "Acrylic Design Kitchens",
      description: "Transform your kitchen with our premium acrylic finishes. Our modern designs combine style with durability, featuring:",
      features: [
        "High-gloss acrylic cabinet doors",
        "Scratch-resistant surfaces",
        "Custom color options",
        "Seamless finishes",
        "Modern hardware solutions"
      ],
      images: [
        {
          src: "/images/AcrylicKitchenCabinet.png",
          alt: "Modern acrylic kitchen design",
          caption: "Premium Acrylic Kitchen Cabinet"
        },
        {
          src: "/images/High-glossDetail.jpg",
          alt: "Kitchen cabinet detail",
          caption: "High-gloss Finish Detail"
        }
      ]
    },
    {
      title: " Acrylic Designer Doors",
      description: "Enhance your space with our elegant door collection, offering:",
      features: [
        "Acrylic finish doors",
        "Custom size options",
        "Premium hardware",
        "Sound insulation",
        "Weather-resistant coating"
      ],
      images: [
        {
          src: "/images/AcrylicDoor.jpg",
          alt: "Modern door design",
          caption: "Designer Acrylic Door"
        },
        {
          src: "/images/HardwareDetail.webp",
          alt: "Door detail",
          caption: "Premium Hardware Detail"
        }
      ]
    },
    {
      title: " Acrylic Temple Designs",
      description: "Create a sacred space with our specialized temple designs featuring:",
      features: [
        "Traditional & modern designs",
        "Acrylic backlit panels",
        "Custom mandir layouts",
        "Premium wood combinations",
        "Detailed carving effects"
      ],
      images: [
        {
          src: "/images/ContemporaryDesign.jpeg",
          alt: "Modern temple design",
          caption: "Contemporary Temple Design"
        },
        {
          src: "images/BacklitPanel.webp",
          alt: "Temple detail",
          caption: "Backlit Panel Detail"
        }
      ]
    }
  ];



  return (
    <div className="min-h-screen  mt-10">
      {/* Services Sections */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 space-y-24 mb-24">
        {services.map((service, index) => (
          <div key={index} className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">{service.description}</p>
            </div>

            {/* Image Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.images.map((image, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="relative aspect-square overflow-hidden rounded-lg p-2 border-2 border-gray-100">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-sm text-center text-gray-600">{image.caption}</p>
                </div>
              ))}
            </div>

            {/* Features */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
     
    </div>
  );
};

export default GlobalDoorsKitchen;
