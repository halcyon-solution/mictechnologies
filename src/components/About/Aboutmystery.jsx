import React from "react";

const Aboutmystery = () => {
  const services = [
    {
      title: "Web Development",
      subtitle: "Development Excellence",
      description:
        "Build powerful, scalable websites that captivate users and drive business growth with cutting-edge technologies.",
      icon: (
        <svg
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
    },
    {
      title: "Mobile Development",
      subtitle: "Development Excellence",
      description:
        "Create stunning native and cross-platform mobile apps that deliver seamless experiences on iOS and Android.",
      icon: (
        <svg
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "Graphic Designing",
      subtitle: "Creative Excellence",
      description:
        "Transform your brand vision into stunning visuals that leave lasting impressions and elevate your identity.",
      icon: (
        <svg
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
      ),
    },
    {
      title: "UI/UX Design",
      subtitle: "Creative Excellence",
      description:
        "Craft intuitive, user-centered designs that blend aesthetics with functionality for exceptional digital experiences.",
      icon: (
        <svg
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "Social Media Marketing",
      subtitle: "Marketing Mastery",
      description:
        "Amplify your brand presence with strategic campaigns that engage audiences and drive measurable results across all platforms.",
      icon: (
        <svg
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
          />
        </svg>
      ),
    },
    {
      title: "Custom Software Development",
      subtitle: "Development Excellence",
      description:
        "Engineer bespoke software solutions tailored to your unique business needs, from concept to deployment.",
      icon: (
        <svg
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative cursor-pointer py-20 md:py-20 px-6 md:px-12 lg:px-20 overflow-hidden">


      <div className="relative max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16 md:mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-poppins">
            Our{" "} Mastery
          
          </h1>
          <p className="text-gray-300 text-base md:text-lg mt-4 max-w-2xl mx-auto">
            Elevating brands through data, creativity, and precision.
          </p>
        </div>

      

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {services.map((service, index) => (
    <div
      key={index}
      className="group relative border border-gray-800 bg-transparent rounded-2xl p-8 hover:bg-[#FF006E] hover:shadow-2xl hover:shadow-[#FF006E]/30 transition-all duration-500 hover:-translate-y-2 flex flex-col gap-4 cursor-pointer"
    >
      {/* Icon with gradient background */}
      <div className="w-16 h-16 bg-[#FF006E] rounded-xl flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
        {service.icon}
      </div>

      {/* Category Badge */}
      <span className="inline-block w-fit text-xs font-semibold text-pink-400 group-hover:text-white uppercase tracking-wider px-3 py-1 bg-pink-600/20 group-hover:bg-white/20 border border-pink-500/30 group-hover:border-white/30 rounded-full transition-all duration-300">
        {service.subtitle}
      </span>

      {/* Title */}
      <h2 className="text-xl sm:text-2xl font-bold text-white font-poppins transition-colors duration-300">
        {service.title}
      </h2>

      {/* Description */}
      <p className="text-gray-400 group-hover:text-gray-200 text-sm sm:text-base leading-relaxed transition-colors duration-300">
        {service.description}
      </p>

      {/* Corner decoration */}
      <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-pink-500/20 rounded-tr-xl group-hover:border-white/50 transition-colors duration-300"></div>
    </div>
  ))}
</div>
      </div>

     
    </section>
  );
};

export default Aboutmystery;
