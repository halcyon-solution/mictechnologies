import React from "react";
import { Settings, Layers, Zap, Globe, ShoppingCart, Database } from "lucide-react";

export default function CustomSoftwareServices() {
  const services = [
    {
      icon: <Settings className="text-[#FF006E]" size={32} />,
      title: "Enterprise Applications",
      description: "Designing and developing software solutions that cater to the specific needs of large organizations, enhancing their operational efficiency and workflow."
    },
    {
      icon: <Layers className="text-[#FF006E]" size={32} />,
      title: "SaaS Applications",
      description: "Developing feature-rich SaaS solutions that can be accessed remotely through the internet, offering subscription-based services to users."
    },
    {
      icon: <Zap className="text-[#FF006E]" size={32} />,
      title: "HIPAA Compliant Applications",
      description: "Building software that complies with the Health Insurance Portability and Accountability Act (HIPAA), ensuring the security and privacy of medical data."
    },
    {
      icon: <ShoppingCart className="text-[#FF006E]" size={32} />,
      title: "E-Commerce Applications",
      description: "Crafting tailored e-commerce platforms with features like online shopping carts, payment gateways, inventory management, and customer portals."
    },
    {
      icon: <Globe className="text-[#FF006E]" size={32} />,
      title: "Third-Party Applications",
      description: "Integrating custom software solutions with third-party applications, systems, and APIs enhances functionality and custom application development that streamlines processes."
    },
    {
      icon: <Database className="text-[#FF006E]" size={32} />,
      title: "Custom ERP Systems",
      description: "Designing Enterprise Resource Planning systems that integrate and manage various business processes like finance, banking, inventory, HR, etc."
    }
  ];

  return (
    <section className="w-full min-h-screen py-16 md:py-20 bg-white text-black lg:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Our Custom Software Development Services
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl">
            Tailored software solutions designed to meet your unique business requirements
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md cursor-pointer rounded-xl border border-gray-200 hover:border-[#FF006E] p-6 lg:p-8 flex flex-col gap-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
            >
              {/* Icon */}
              <div className="w-16 h-16 flex justify-center items-center rounded-full bg-[#FF006E]/10 group-hover:bg-[#FF006E]/20 transition-all duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl lg:text-2xl font-semibold text-black group-hover:text-[#FF006E] transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        {/* <div className="mt-16 text-center">
          <button className="px-8 py-3 bg-gradient-to-r from-[#FF006E] to-pink-600 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-[#FF006E] transition-all transform hover:scale-105 shadow-lg">
            Start Your Custom Project Today
          </button>
        </div> */}
      </div>
    </section>
  );
}