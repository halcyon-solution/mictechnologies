import React from "react";
import { Palette, ImageIcon, Sparkles, BookOpen, Package, Video } from "lucide-react";

export default function GraphicService() {
  const services = [
    {
      icon: <Palette className="text-[#FF006E]" size={32} />,
      title: "Brand Identity Design",
      description: "Creating unique and memorable brand identities including logos, color palettes, typography, and visual guidelines that reflect your business values and resonate with your target audience."
    },
    {
      icon: <ImageIcon className="text-[#FF006E]" size={32} />,
      title: "Marketing Materials",
      description: "Designing eye-catching brochures, flyers, posters, banners, and business cards that effectively communicate your message and leave a lasting impression on your customers."
    },
    {
      icon: <Sparkles className="text-[#FF006E]" size={32} />,
      title: "Social Media Graphics",
      description: "Crafting engaging social media posts, cover images, stories, and advertisements that boost your online presence and drive engagement across all platforms."
    },
    {
      icon: <Package className="text-[#FF006E]" size={32} />,
      title: "Packaging Design",
      description: "Developing attractive and functional packaging designs that enhance product appeal, protect your goods, and create a memorable unboxing experience for customers."
    },
    {
      icon: <BookOpen className="text-[#FF006E]" size={32} />,
      title: "Print & Digital Design",
      description: "Creating versatile designs for both print and digital media including magazines, newsletters, eBooks, presentations, and infographics that captivate your audience."
    },
    {
      icon: <Video className="text-[#FF006E]" size={32} />,
      title: "Motion Graphics",
      description: "Designing animated logos, explainer videos, and dynamic visual content that bring your brand to life and engage viewers with compelling storytelling."
    }
  ];

  return (
    <section className="w-full min-h-screen py-16 md:py-20 bg-white text-black lg:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Our Graphic Design Services
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl">
            Transform your vision into stunning visuals that capture attention and drive results
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
            Get Your Free Design Consultation
          </button>
        </div> */}
      </div>
    </section>
  );
}