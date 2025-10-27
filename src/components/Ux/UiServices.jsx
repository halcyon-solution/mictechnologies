import React from 'react';
import { Palette, LayoutDashboard, MousePointerClick, Eye, PenTool, MonitorSmartphone } from 'lucide-react';

const UiServices = () => {
  const services = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Creative UI Design",
      description: "We design visually captivating interfaces that align with your brand identity, ensuring an engaging and memorable first impression."
    },
    {
      icon: <LayoutDashboard className="w-8 h-8" />,
      title: "User Experience (UX) Strategy",
      description: "Our UX experts craft seamless user journeys through research-driven wireframes and intuitive layouts that boost engagement and conversions."
    },
    {
      icon: <MousePointerClick className="w-8 h-8" />,
      title: "Interactive Prototyping",
      description: "Bring your ideas to life with interactive prototypes that allow real-time testing and user feedback before final development."
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Usability Testing",
      description: "We conduct detailed usability tests to identify friction points, ensuring smooth navigation and a superior user experience."
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: "Visual Design Systems",
      description: "From typography to color schemes, we create consistent design systems that enhance usability and strengthen brand identity."
    },
    {
      icon: <MonitorSmartphone className="w-8 h-8" />,
      title: "Responsive Design",
      description: "Our responsive UI/UX designs deliver consistent performance and aesthetics across desktop, tablet, and mobile devices."
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
            UI/UX Design{' '}
            <span className="">Excellence</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional UI/UX design services that combine creativity, functionality, and user psychology to deliver visually stunning and intuitive digital experiences.
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

export default UiServices;
