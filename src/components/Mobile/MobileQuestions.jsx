import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import React from 'react';


export default function MobileQuestions() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What mobile app development platforms do you work with?",
      answer: "We develop mobile applications for both iOS and Android platforms using various technologies including native development (Swift for iOS, Kotlin for Android), cross-platform frameworks like React Native and Flutter, and hybrid solutions. We help you choose the best approach based on your project requirements, budget, and timeline."
    },
    {
      question: "How long does it take to develop a mobile app?",
      answer: "Development time varies based on app complexity and features. A simple app with basic functionality typically takes 2-3 months, while a feature-rich app with advanced integrations can take 4-6 months or more. This includes planning, design, development, testing, and deployment phases with regular updates throughout the process."
    },
    {
      question: "Do you provide post-launch support and maintenance?",
      answer: "Absolutely! We offer comprehensive post-launch support including bug fixes, performance monitoring, OS updates compatibility, feature enhancements, and technical support. Our maintenance packages ensure your app stays updated with the latest platform requirements and continues to run smoothly for your users."
    },
    {
      question: "Can you integrate third-party services and APIs?",
      answer: "Yes, we specialize in integrating various third-party services including payment gateways (Stripe, PayPal), social media logins, push notifications, analytics tools, mapping services, cloud storage, and custom APIs. We ensure seamless integration while maintaining app security and performance standards."
    },
    {
      question: "What is your app development process?",
      answer: "Our process includes discovery and planning, wireframing and design, development sprints with agile methodology, rigorous testing (functional, usability, performance), beta testing with real users, and finally deployment to App Store and Google Play. We maintain transparent communication throughout with regular demos and progress updates."
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="w-full max-w-4xl">
        <div className="text-center ">
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
              className="bg-white border border-gray-200 mt-3 rounded-lg shadow-sm transition-all duration-200 hover:shadow-md"
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