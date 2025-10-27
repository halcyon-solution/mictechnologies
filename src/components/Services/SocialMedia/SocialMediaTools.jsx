import React from "react";
import { Facebook, Instagram, Linkedin, Twitter, Youtube, MessageCircle } from "lucide-react";

export default function SocialMediaTools() {
  const platforms = [
    {
      icon: <Facebook size={48} />,
      name: "Facebook",
      color: "#1877F2",
      bgColor: "bg-blue-50"
    },
    {
      icon: <Instagram size={48} />,
      name: "Instagram",
      color: "#E4405F",
      bgColor: "bg-pink-50"
    },
    {
      icon: <Linkedin size={48} />,
      name: "LinkedIn",
      color: "#0A66C2",
      bgColor: "bg-blue-50"
    },
    {
      icon: <Twitter size={48} />,
      name: "Twitter (X)",
      color: "#000000",
      bgColor: "bg-gray-50"
    },
    {
      icon: <Youtube size={48} />,
      name: "YouTube",
      color: "#FF0000",
      bgColor: "bg-red-50"
    },
    {
      icon: <MessageCircle size={48} />,
      name: "TikTok",
      color: "#000000",
      bgColor: "bg-gray-50"
    }
  ];

  return (
    <section className="w-full py-16 md:py-20 lg:py-24 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
                Top Platforms We Master
              </h2>
            </div>
          </div>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mt-4">
            We create impactful campaigns across all major social media platforms
          </p>
        </div>

        {/* Platforms Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="group cursor-pointer"
            >
              <div className={`${platform.bgColor} rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-2 border-transparent hover:border-[#FF006E]`}>
                {/* Icon */}
                <div 
                  className="transition-transform duration-300 group-hover:scale-110"
                  style={{ color: platform.color }}
                >
                  {platform.icon}
                </div>
                
                {/* Platform Name */}
                <h3 className="text-base md:text-lg font-semibold text-black text-center">
                  {platform.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="mt-12 md:mt-16 text-center">
          <p className="text-gray-600 text-sm md:text-base">
            And many more platforms tailored to your business needs
          </p>
        </div>

      </div>
    </section>
  );
}