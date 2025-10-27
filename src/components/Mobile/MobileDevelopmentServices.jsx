import React from 'react';
import { Smartphone, Globe, Zap, Shield, Code, Rocket } from 'lucide-react';

const MobileDevelopmentServices = () => {
  const services = [
    {
      icon: <Smartphone className="text-[#FF006E]" size={32} />,
      title: "iOS App Development",
      description: "Native iOS applications built with Swift and SwiftUI for optimal performance and user experience on Apple devices."
    },
    {
      icon: <Globe className="text-[#FF006E]" size={32} />,
      title: "Android App Development",
      description: "Custom Android apps developed with Kotlin and Java, delivering seamless experiences across all Android devices."
    },
    {
      icon: <Zap className="text-[#FF006E]" size={32} />,
      title: "Cross-Platform Apps",
      description: "Build once, deploy everywhere. React Native and Flutter solutions that work flawlessly on both iOS and Android."
    },
    {
      icon: <Shield className="text-[#FF006E]" size={32} />,
      title: "App Security & Testing",
      description: "Comprehensive security audits, penetration testing, and quality assurance to ensure your app is bulletproof."
    },
    {
      icon: <Code className="text-[#FF006E]" size={32} />,
      title: "UI/UX Design",
      description: "Stunning, intuitive mobile interfaces designed to engage users and deliver exceptional mobile experiences."
    },
    {
      icon: <Rocket className="text-[#FF006E]" size={32} />,
      title: "App Maintenance & Support",
      description: "Ongoing updates, performance optimization, and 24/7 technical support to keep your app running smoothly."
    }
  ];

  return (
    <section className="w-full min-h-screen py-16 md:py-20 bg-white text-black lg:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Mobile Development Expertise
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl">
            Comprehensive mobile app development services tailored to transform your ideas into powerful mobile applications
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

export default MobileDevelopmentServices;