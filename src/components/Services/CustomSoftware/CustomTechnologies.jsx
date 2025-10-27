import React from "react";

export default function TechPlatforms() {
  const technologies = [
    {
      name: "React",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
    },
    {
      name: "C#",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
    },
    {
      name: "Node.js",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
    },
    {
      name: "Python",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
    }
  ];

  return (
    <section className="w-full h-[48vh] min-h-[200px] bg-gray-50  py-16  flex items-start">
      
      <div className="max-w-7xl  mx-auto w-full">

        {/* Header */}
        <div className="mb-6  md:mb-10">
          <div className="flex items-center gap-2 md:gap-3">
            <h2 className="text-xl text-center md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 leading-tight">
              Top Custom Software Development  Platforms We Use
            </h2>
          </div>
        </div>

        {/* Technologies Grid */}
        <div className="grid  grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center group cursor-pointer"
            >
              <div className="transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2 mb-3">
                <img 
                  src={tech.image} 
                  alt={tech.name}
                  className="w-12 h-12 md:w-16 md:h-16 lg:w-28 lg:h-28 object-contain"
                />
              </div>
              <h3 className="text-base md:text-lg lg:text-xl font-semibold text-gray-900 group-hover:text-[#FF006E] transition-colors duration-300">
                {tech.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}