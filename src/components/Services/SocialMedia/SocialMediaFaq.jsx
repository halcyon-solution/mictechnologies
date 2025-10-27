import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function SocialMediaFaq() {
  const [openIndex, setOpenIndex] = useState(null);

 const faqs = [
  {
    question: "What social media platforms do you manage?",
    answer: "We manage all major social media platforms including Facebook, Instagram, LinkedIn, Twitter/X, TikTok, YouTube, and Pinterest. We tailor our strategies to each platform's unique audience and features to maximize your brand's reach and engagement across all channels."
  },
  {
    question: "How do you measure the success of social media campaigns?",
    answer: "We track key performance indicators (KPIs) including engagement rates, reach, impressions, follower growth, website traffic, conversions, and ROI. You'll receive detailed monthly reports with actionable insights and recommendations to continuously improve campaign performance."
  },
  {
    question: "Can you help with both organic and paid social media marketing?",
    answer: "Absolutely! We offer comprehensive services covering both organic content strategy and paid advertising campaigns. Our integrated approach ensures consistent messaging while maximizing your reach through strategic ad placements and community engagement."
  },
  {
    question: "How often will you post content on our social media accounts?",
    answer: "Posting frequency depends on your goals and platform. Typically, we recommend 4-7 posts per week on Facebook/Instagram, 3-5 posts daily on Twitter, and 2-3 posts weekly on LinkedIn. We create a customized content calendar that aligns with your business objectives and audience behavior."
  },
  {
    question: "Do you provide content creation or do we need to supply it?",
    answer: "We handle complete content creation including copywriting, graphic design, video editing, and photography coordination. However, we're also happy to work with your existing content. Our team ensures all posts align with your brand voice and resonate with your target audience."
  }
];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="w-3 h-3 bg-[#FF006E] rounded-sm"></div>
            <div className="w-8 h-1 bg-[#FF006E]"></div>
            <div className="w-3 h-3 bg-[#FF006E] rounded-sm"></div>
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white  rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-200"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-5 md:px-6 cursor-pointer py-4 md:py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-sm md:text-base lg:text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 md:w-6 md:h-6 text-[#FF006E] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-5 md:px-6 pb-4 md:pb-5 pt-2">
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}