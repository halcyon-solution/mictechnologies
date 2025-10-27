import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function SocialMediaFaq() {
  const [openIndex, setOpenIndex] = useState(null);

const faqs = [
    {
      question: "What technologies do you use for web development?",
      answer: "We use modern, industry-standard technologies including React, Next.js, Node.js, TypeScript, Tailwind CSS, and various databases like MongoDB and PostgreSQL. Our tech stack is chosen based on your project requirements to ensure optimal performance, scalability, and maintainability."
    },
    {
      question: "How long does it take to build a custom website?",
      answer: "Timeline varies based on project complexity. A simple website typically takes 4-6 weeks, while complex web applications may require 3-6 months. We provide detailed timelines during consultation and keep you updated throughout the development process with regular milestones and demos."
    },
    {
      question: "Do you offer website maintenance after launch?",
      answer: "Yes! We provide comprehensive maintenance packages including security updates, bug fixes, performance monitoring, content updates, and feature enhancements. Our support ensures your website remains secure, fast, and up-to-date with the latest technologies and best practices."
    },
    {
      question: "Can you redesign or improve my existing website?",
      answer: "Absolutely! We specialize in website redesigns and improvements. Whether you need a complete overhaul or specific enhancements like performance optimization, UI/UX improvements, or new features, we analyze your current site and provide solutions that align with your goals."
    },
    {
      question: "Will my website be mobile-friendly and SEO optimized?",
      answer: "Yes, all our websites are built with a mobile-first approach ensuring perfect responsiveness across all devices. We implement SEO best practices including fast loading speeds, clean code structure, meta tags, schema markup, and accessibility standards to help your site rank higher in search engines."
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
