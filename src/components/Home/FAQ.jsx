/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

const faqData = [
  {
    question: "What services does MIC Tech offer?",
    answer:
      "We offer a comprehensive range of IT services including Custom Software Development, Web Development, Mobile App Development, UI/UX Designing, Graphic Designing, Social Media Marketing, and Rental Software Solutions tailored to your business needs.",
  },
  {
    question: "How long does it take to develop a project?",
    answer:
      "Timeline depends on project complexity. A basic website takes 2-4 weeks, mobile apps 6-12 weeks, and custom software 2-6 months. We provide a detailed timeline after understanding your requirements.",
  },
  {
    question: "Do you provide support after project delivery?",
    answer:
      "Yes! We offer ongoing support and maintenance including bug fixes, updates, performance optimization, and technical assistance to ensure your solution runs smoothly and stays up-to-date.",
  },
  {
    question: "What is your development process?",
    answer:
      "We follow an agile methodology: Discovery & Planning → Design & Prototyping → Development & Testing → Deployment → Support. You'll receive regular updates and can provide feedback at every stage.",
  },
  {
    question: "How much does a project cost?",
    answer:
      "Costs vary based on features, complexity, and timeline. We offer flexible packages starting from affordable rates for startups to enterprise solutions. Contact us for a free consultation and customized quote.",
  },
];
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-16  text-white">
      {/* FAQ Section Header */}
      <div className="w-full flex flex-col gap-y-2 items-center justify-center">
        <h2 className='text-2xl sm:text-4xl font-bold text-[#FF006E]'>FREQUENTLY ASKED QUESTIONS</h2>
        <p className="text-base font-medium text-center w-[70%] text-gray-400">
          Have questions about our services? We're here to help! If you need further assistance, feel free to reach out to us at <span className='text-white font-semibold'>info@mictech.com</span>
        </p>
      </div>

      {/* FAQ Content */}
      <div className="w-full flex flex-col lg:flex-row justify-center items-start gap-8 mt-12 px-6">
        {/* Help Box */}
        <div className="w-full lg:pt-20 lg:w-[33%] flex flex-col gap-y-4 items-center text-center">
          <h2 className="text-2xl sm:text-4xl text-white font-bold leading-snug">
            Got Questions? <br /> We've Got Answers.
          </h2>
          <div className="border-2 flex flex-col justify-center gap-y-3 w-[22rem] xl:w-[25rem] p-6 rounded-2xl border-[#FF006E] bg-[#FF006E]/10">
            <h2 className="text-2xl font-bold text-white">
              Need Help?
            </h2>
            <p className="text-base text-gray-300">
              Our team is ready to assist you with any questions. <span className='text-white font-semibold'>Contact us</span> today! <br />
              <span className='text-[#FF006E] font-semibold'>info@mictech.com</span>
            </p>
          </div>
        </div>

        {/* Accordion Section */}
        <div className="w-full h-auto lg:w-[60%] xl:h-fit">
          <div className="space-y-3">
            {faqData.map((item, index) => (
              <div key={index} className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden hover:border-[#FF006E]/50 transition-all duration-300">
                <button
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-800/50 transition-colors"
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="flex items-center gap-4">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#FF006E] text-white text-sm font-bold">
                      {index + 1}
                    </span>
                    <span className="font-semibold text-white">{item.question}</span>
                  </div>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-[#FF006E]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-56' : 'max-h-0'
                  }`}
                >
                  <p className="p-5 text-gray-400 border-t border-gray-800">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}