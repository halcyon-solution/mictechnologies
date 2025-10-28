import React from 'react'
import { Link } from 'react-router-dom'
import { Code, Palette, Share2, Globe, Smartphone, Layers, Server } from 'lucide-react'

export default function FeatureServices() {
  const services = [
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'Tailored software solutions built to meet your unique business requirements',
      path: '/services/custom-software'
    },
    {
      icon: Palette,
      title: 'Graphic Designing',
      description: 'Creative and eye-catching designs that make your brand stand out',
      path: '/services/graphic-design'
    },
    {
      icon: Share2,
      title: 'Social Media Marketing',
      description: 'Strategic campaigns to boost your online presence and engagement',
      path: '/services/social-media'
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern, responsive websites that deliver exceptional user experiences',
      path: '/services/web-development'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      path: '/services/mobile-development'
    },
    {
      icon: Layers,
      title: 'UI/UX Designing',
      description: 'Intuitive interfaces that prioritize user satisfaction and usability',
      path: '/services/uiux-design'
    },
   
  ]

  const handleNavigation = (path) => {
    // Navigation handled by Link component
    console.log(`Navigating to: ${path}`)
  }

  return (
    <section className='w-full min-h-screen bg-[#05010F] py-8 md:py-12 px-4'>
      <style>{`
        @keyframes slide {
          0% {
            left: -6px;
          }
          100% {
            left: calc(100% - 6px);
          }
        }
        
        .animate-slide {
          animation: slide 2s ease-in-out infinite alternate;
        }
      `}</style>

      <div className='w-full text-white flex flex-col gap-y-4 justify-end items-center min-h-[12rem] md:h-48'>
        <p className='text-sm text-[#FF006E]'>SOLUTIONS</p>
        <h2 className='text-2xl sm:text-3xl md:text-4xl text-center font-semibold px-4'>
          We Are Offering All Kinds of IT Solutions Services
        </h2>
        <div className="relative w-48 sm:w-64 h-1 bg-[#FF006E] rounded-full mt-2 sm:mt-4">
          <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-[#FF006E] rounded-full shadow-lg shadow-[#FF006E]/50 animate-slide"></div>
        </div>
      </div>

      <div className='w-full flex justify-center items-center mt-8 md:mt-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl w-full'>
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Link
                key={index}
                to={service.path}
                className='group w-full border border-gray-800 bg-transparent rounded-lg p-6 md:p-7 flex gap-y-4 flex-col justify-center items-center hover:bg-[#FF006E] hover:shadow-2xl hover:shadow-[#FF006E]/30 hover:bg-gradient-to-br transition-all duration-500 min-h-[18rem] md:min-h-[20rem] cursor-pointer no-underline'
              >
                <Icon 
                  className='text-[#FF69B4] transition-transform duration-500 group-hover:scale-110 group-hover:text-white' 
                  size={44} 
                />
                <p className='text-xl md:text-2xl font-semibold text-white transition-colors duration-500 text-center px-2'>{service.title}</p>
                <p className='text-[1rem] sm:text-sm text-center text-gray-400 group-hover:text-gray-200 transition-colors duration-500 px-2'>{service.description}</p>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}