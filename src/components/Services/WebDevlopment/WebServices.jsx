import React from "react";
import { Code2, Palette, Smartphone, Zap, Globe, Wrench } from "lucide-react";

export default function WebDevServices() {
  const services = [
    {
      icon: <Code2 className="text-[#FF006E]" size={32} />,
      title: "Custom Web Development",
      description: "Building powerful, scalable web applications from scratch using modern frameworks like React, Next.js, and Node.js tailored to your specific business requirements."
    },
    {
      icon: <Palette className="text-[#FF006E]" size={32} />,
      title: "UI/UX Design",
      description: "Creating intuitive, visually stunning interfaces that provide exceptional user experiences and drive engagement through thoughtful design principles."
    },
    {
      icon: <Smartphone className="text-[#FF006E]" size={32} />,
      title: "Responsive Web Design",
      description: "Developing mobile-first, fully responsive websites that deliver seamless experiences across all devices, from smartphones to desktops."
    },
    {
      icon: <Globe className="text-[#FF006E]" size={32} />,
      title: "CMS Development",
      description: "Implementing content management systems like WordPress, Shopify, and custom CMS solutions that empower you to manage your content effortlessly."
    },
    {
      icon: <Zap className="text-[#FF006E]" size={32} />,
      title: "Performance Optimization",
      description: "Enhancing website speed, performance, and SEO through code optimization, caching strategies, and best practices for maximum efficiency."
    },
    {
      icon: <Wrench className="text-[#FF006E]" size={32} />,
      title: "Maintenance & Support",
      description: "Providing ongoing technical support, updates, security patches, and feature enhancements to keep your website running smoothly and securely."
    }
  ];

  return (
    <section className="w-full min-h-screen py-16 md:py-20 bg-white text-black lg:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Our Web Development Services
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl">
            Transform your digital vision into reality with cutting-edge web solutions that drive growth and innovation
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
      </div>
    </section>
  );
}