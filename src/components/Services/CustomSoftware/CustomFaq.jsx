import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function CustomFaq() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Why should I choose custom software and web app development?",
      answer: "Custom software is tailored specifically to your business needs, providing unique solutions that off-the-shelf products cannot offer. It scales with your business, integrates seamlessly with existing systems, and gives you a competitive advantage in the market."
    },
    {
      question: "What technologies do you use for custom development?",
      answer: "We use cutting-edge technologies including React, Node.js, Python, C#, and modern frameworks. Our tech stack is chosen based on your project requirements to ensure optimal performance, scalability, and maintainability."
    },
    {
      question: "Can you help migrate our existing software to a new custom solution?",
      answer: "Yes, we specialize in software migration and modernization. We carefully analyze your current system, create a migration strategy, ensure data integrity, and provide a smooth transition with minimal downtime to your new custom solution."
    },
    {
      question: "Do you provide ongoing support and maintenance after development?",
      answer: "Absolutely! We offer comprehensive post-launch support including bug fixes, updates, performance monitoring, security patches, and feature enhancements. Our support plans are flexible and designed to keep your software running smoothly."
    },
    {
      question: "How do you ensure user-friendliness in the software or web app?",
      answer: "We follow user-centered design principles, conduct user research, create intuitive interfaces, and perform extensive usability testing. Our team focuses on creating clean, accessible, and responsive designs that provide excellent user experiences."
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