import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import React from 'react';
export default function UiQuestions() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is UI/UX design and why is it important?",
      answer: "UI (User Interface) design focuses on the visual elements and aesthetics of a product, while UX (User Experience) design concentrates on the overall feel and user journey. Together, they create intuitive, engaging digital experiences that improve user satisfaction, increase conversions, and strengthen brand loyalty."
    },
    {
      question: "What's the difference between UI and UX design?",
      answer: "UI design deals with the look and feel - colors, typography, buttons, and visual elements. UX design focuses on functionality, user flow, information architecture, and how users interact with the product. Think of UI as the paint and decoration of a house, while UX is the floor plan and structure that makes it livable."
    },
    {
      question: "How long does a UI/UX design project typically take?",
      answer: "Project duration depends on complexity and scope. A simple mobile app design might take 3-4 weeks, while a comprehensive website or enterprise application can take 8-12 weeks. This includes research, wireframing, prototyping, user testing, and final designs with multiple revision rounds."
    },
    {
      question: "Do you conduct user research and testing?",
      answer: "Yes! User research is fundamental to our process. We conduct user interviews, competitive analysis, usability testing, and gather feedback throughout the design process. This ensures our designs are based on real user needs and behaviors, not just assumptions, leading to more effective and user-friendly products."
    },
    {
      question: "What deliverables do you provide at the end of a project?",
      answer: "You'll receive complete design files in Figma or Adobe XD, a comprehensive style guide, component library, interactive prototypes, design specifications for developers, and all source assets. We also provide documentation to ensure smooth handoff to your development team."
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <div className="flex justify-center items-center gap-2">
            <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
            <div className="w-8 h-1 bg-pink-500"></div>
            <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
          </div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-sm transition-all duration-200 hover:shadow-md"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="text-lg font-medium text-gray-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-pink-500 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5 pt-1">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}