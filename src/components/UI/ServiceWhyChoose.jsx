import React from "react";
import { Code, Database, Wrench } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Code className="text-white" size={32} />,
      title: "Modify Whole System",
      description: "Complete control over your software architecture. We build systems that can be fully customized and modified according to your evolving business needs and requirements."
    },
    {
      icon: <Database className="text-white" size={32} />,
      title: "Beneficial Strategies",
      description: "Data-driven approaches and proven methodologies that deliver measurable results. Our strategic planning ensures your software investment generates maximum ROI."
    },
    {
      icon: <Wrench className="text-white" size={32} />,
      title: "Automated Software",
      description: "Streamline operations with intelligent automation. We develop smart solutions that reduce manual work, eliminate errors, and boost productivity across your organization."
    }
  ];

  return (
    <section className="w-full h-auto min-h-[400px] xl:h-[50vh] xl:min-h-[400px] py-8 sm:py-10 md:py-12 xl:py-1 xl:md:py-8 px-4 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden flex items-center">
      {/* Background pattern effect */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-64 h-64 bg-pink-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-600 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 xl:mb-6 xl:md:mb-8">
          <p className="text-[#FF006E] text-xs md:text-sm font-semibold tracking-wider uppercase mb-2">
            WHY CHOOSE US
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight px-4 sm:px-0">
            We Are Very Different From<br className="hidden sm:block" />
            <span className="sm:hidden"> </span>Others IT Solutions
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6 md:gap-7 lg:gap-8 px-4 sm:px-0">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
            >
              {/* Icon Container with rotating circles */}
              <div className="relative mb-4 sm:mb-5 md:mb-4">
                {/* Rotating circles */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Outer rotating circle */}
                  <div className="absolute w-20 sm:w-22 md:w-24 h-20 sm:h-22 md:h-24 rounded-full border border-gray-700/30">
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#FF006E] rounded-full animate-spin-slow" 
                         style={{ transformOrigin: 'center 40px', animation: 'spin 8s linear infinite' }}></div>
                  </div>
                  
                  {/* Inner rotating circle - opposite direction */}
                  <div className="absolute w-14 sm:w-15 md:w-16 h-14 sm:h-15 md:h-16 rounded-full border border-gray-700/50">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-pink-400 rounded-full" 
                         style={{ transformOrigin: 'center 28px', animation: 'spin 6s linear infinite reverse' }}></div>
                  </div>
                </div>

                {/* Icon Circle */}
                <div className="relative w-12 sm:w-13 md:w-14 h-12 sm:h-13 md:h-14 bg-gradient-to-br from-[#FF006E] to-pink-700 rounded-full flex items-center justify-center shadow-lg shadow-[#FF006E]/30 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-[#FF006E]/50 transition-all duration-300">
                  <div className="scale-90 sm:scale-95 md:scale-100">
                    {feature.icon}
                  </div>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-base md:text-lg font-bold text-white mb-2 sm:mb-2.5 md:mb-2 group-hover:text-[#FF006E] transition-colors duration-300">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-xs md:text-sm text-gray-400 leading-relaxed max-w-sm line-clamp-4 sm:line-clamp-3">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg) translateX(0);
          }
          to {
            transform: rotate(360deg) translateX(0);
          }
        }
      `}</style>
    </section>
  );
}