import React from "react";

export default function GraphicDesignTools() {
  const tools = [
    {
      name: "Adobe Photoshop",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg"
    },
    {
      name: "Figma",
      image: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
    },
    {
      name: "Adobe InDesign",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Adobe_InDesign_CC_icon.svg"
    },
    {
      name: "Adobe Illustrator",
      image: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg"
    },
    {
      name: "CorelDRAW",
      image: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/coreldraw-icon.png"
    }
  ];

  return (
    <section className="w-full h-auto min-h-[500px] xl:h-[65vh] px-4 sm:px-6 md:px-8 lg:px-16 xl:px-36 py-12 sm:py-14 md:py-16 xl:py-20 bg-gray-50 text-black">
      <div className="max-w-8xl mx-auto">
        {/* Header */}
        <div className="mb-8 sm:mb-10 md:mb-12 xl:mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-5 md:mb-6">
            Harnessing Graphic Design{" "} Tools & Software
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed max-w-8xl">
            At MIC Tech, we utilise an arsenal of industry-leading tools and sophisticated software in our graphic design process. Our team of experts, armed with these state-of-the-art tools, are adept at crafting compelling visuals that effectively communicate your brand's ethos and values while delivering a seamless user experience. Discover how MIC Tech can transform your visual identity with a high-impact design tailored to your unique needs.
          </p>
        </div>

        {/* Tools Row */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-x-52">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-2 sm:gap-3 group transition-all duration-300 hover:scale-110"
            >
              <img 
                src={tool.image} 
                alt={tool.name}
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain"
              />
              <p className="text-xs sm:text-sm md:text-base font-semibold text-gray-800 group-hover:text-[#FF006E] transition-colors duration-300 text-center max-w-[100px] sm:max-w-none">
                {tool.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}