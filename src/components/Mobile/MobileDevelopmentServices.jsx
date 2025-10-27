import React from 'react';
import { Smartphone, Globe, Zap, Shield, Code, Rocket } from 'lucide-react';

const MobileDevelopmentServices = () => {
  const services = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "iOS App Development",
      description: "Native iOS applications built with Swift and SwiftUI for optimal performance and user experience on Apple devices."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Android App Development",
      description: "Custom Android apps developed with Kotlin and Java, delivering seamless experiences across all Android devices."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Cross-Platform Apps",
      description: "Build once, deploy everywhere. React Native and Flutter solutions that work flawlessly on both iOS and Android."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "App Security & Testing",
      description: "Comprehensive security audits, penetration testing, and quality assurance to ensure your app is bulletproof."
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Stunning, intuitive mobile interfaces designed to engage users and deliver exceptional mobile experiences."
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "App Maintenance & Support",
      description: "Ongoing updates, performance optimization, and 24/7 technical support to keep your app running smoothly."
    }
  ];

  return (
    <div className='bg-white py-20 px-6 md:px-10 lg:px-16'>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block">
            <span className="px-4 py-2 bg-[#FF006E]/10 text-[#FF006E] rounded-full text-sm font-semibold">
              Our Services
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
            Mobile Development{' '}
            <span className="">Expertise</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive mobile app development services tailored to transform your ideas into powerful mobile applications
          </p>
        </div>

        {/* Services Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-[#FF006E] transition-all duration-300 hover:shadow-2xl hover:shadow-[#FF006E]/20 hover:-translate-y-2"
            >
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#FF006E]/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Icon Container */}
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FF006E] to-[#FF006E]/80 rounded-xl flex items-center justify-center text-white shadow-lg shadow-[#FF006E]/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  {service.icon}
                </div>
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-[#FF006E]/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#FF006E] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#FF006E] to-[#FF006E]/50 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
       
      </div>
    </div>
  )
}

export default MobileDevelopmentServices;