import React from 'react';
import { Palette, LayoutDashboard, MousePointerClick, Eye, PenTool, MonitorSmartphone } from 'lucide-react';

const UiServices = () => {
  const services = [
    {
      icon: <Palette className="text-[#FF006E]" size={32} />,
      title: "Creative UI Design",
      description: "We design visually captivating interfaces that align with your brand identity, ensuring an engaging and memorable first impression."
    },
    {
      icon: <LayoutDashboard className="text-[#FF006E]" size={32} />,
      title: "User Experience (UX) Strategy",
      description: "Our UX experts craft seamless user journeys through research-driven wireframes and intuitive layouts that boost engagement and conversions."
    },
    {
      icon: <MousePointerClick className="text-[#FF006E]" size={32} />,
      title: "Interactive Prototyping",
      description: "Bring your ideas to life with interactive prototypes that allow real-time testing and user feedback before final development."
    },
    {
      icon: <Eye className="text-[#FF006E]" size={32} />,
      title: "Usability Testing",
      description: "We conduct detailed usability tests to identify friction points, ensuring smooth navigation and a superior user experience."
    },
    {
      icon: <PenTool className="text-[#FF006E]" size={32} />,
      title: "Visual Design Systems",
      description: "From typography to color schemes, we create consistent design systems that enhance usability and strengthen brand identity."
    },
    {
      icon: <MonitorSmartphone className="text-[#FF006E]" size={32} />,
      title: "Responsive Design",
      description: "Our responsive UI/UX designs deliver consistent performance and aesthetics across desktop, tablet, and mobile devices."
    }
  ];

  return (
    <section className="w-full min-h-screen py-16 md:py-20 bg-white text-black lg:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            UI/UX Design Excellence
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl">
            Professional UI/UX design services that combine creativity, functionality, and user psychology to deliver visually stunning and intuitive digital experiences.
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

export default UiServices;