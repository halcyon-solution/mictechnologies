import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function GraphicFaq() {
  const [openIndex, setOpenIndex] = useState(null);

 const faqs = [
  {
    question: "What graphic design services does MIC Tech offer?",
    answer: "We offer comprehensive graphic design services including brand identity design, logo creation, marketing materials, social media graphics, packaging design, print and digital design, and motion graphics. Our designs are tailored to effectively communicate your brand message and engage your target audience."
  },
  {
    question: "How long does it take to complete a graphic design project?",
    answer: "Timeline varies based on project complexity. A logo design typically takes 1-2 weeks, while complete brand identity packages may take 3-4 weeks. Marketing materials usually require 3-5 days. We provide detailed timelines during consultation and keep you updated throughout the process."
  },
  {
    question: "Can you redesign my existing brand identity or marketing materials?",
    answer: "Absolutely! We specialize in rebranding and refreshing existing designs. Our team analyzes your current brand, understands your goals, and creates modern, compelling designs that align with your vision while maintaining brand recognition and trust with your audience."
  },
  {
    question: "Do you provide the source files and multiple format options?",
    answer: "Yes! Upon project completion, you receive all source files (AI, PSD, etc.) and multiple format options (PNG, JPG, PDF, SVG) suitable for both print and digital use. You'll have full ownership and flexibility to use your designs across all platforms."
  },
  {
    question: "How do you ensure the designs match our brand vision?",
    answer: "We start with in-depth consultations to understand your brand values, target audience, and preferences. Throughout the design process, we provide multiple concepts, welcome your feedback, and make revisions until you're completely satisfied. Your vision guides every creative decision we make."
  }
];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-28 px-4 bg-white">
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