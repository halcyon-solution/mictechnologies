import React from "react";
import { Share2, Target, TrendingUp, Users, BarChart3, Calendar } from "lucide-react";

export default function SocialMediaServices() {
  const services = [
    {
      icon: <Share2 className="text-[#FF006E]" size={32} />,
      title: "Social Media Strategy",
      description: "Developing comprehensive social media strategies tailored to your business goals, target audience, and industry trends to maximize your online presence and engagement."
    },
    {
      icon: <Target className="text-[#FF006E]" size={32} />,
      title: "Paid Advertising Campaigns",
      description: "Creating and managing high-converting ad campaigns across Facebook, Instagram, LinkedIn, and TikTok to reach your ideal customers and drive measurable results."
    },
    {
      icon: <TrendingUp className="text-[#FF006E]" size={32} />,
      title: "Content Creation & Management",
      description: "Producing engaging posts, stories, reels, and graphics that capture attention, spark conversations, and build a loyal community around your brand."
    },
    {
      icon: <Users className="text-[#FF006E]" size={32} />,
      title: "Community Management",
      description: "Building and nurturing your online community through timely responses, meaningful interactions, and proactive engagement that turns followers into brand advocates."
    },
    {
      icon: <BarChart3 className="text-[#FF006E]" size={32} />,
      title: "Analytics & Reporting",
      description: "Tracking performance metrics, analyzing audience behavior, and providing detailed insights to optimize your social media strategy and improve ROI continuously."
    },
    {
      icon: <Calendar className="text-[#FF006E]" size={32} />,
      title: "Influencer Collaborations",
      description: "Identifying and partnering with relevant influencers to amplify your brand message, expand your reach, and build authentic connections with new audiences."
    }
  ];

  return (
    <section className="w-full min-h-screen py-16 md:py-20 bg-white text-black lg:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Our Social Media Marketing Services
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl">
            Elevate your brand's digital presence with data-driven strategies that connect, engage, and convert
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
            Get Your Free Social Media Audit
          </button>
        </div> */}
      </div>
    </section>
  );
}