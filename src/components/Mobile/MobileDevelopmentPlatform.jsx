import React from 'react'
import Reactsvg from '../../assets/Mobile/react.svg'
import Nodesvg from '../../assets/Mobile/nodejs.svg'

const MobileDevelopmentPlatform = () => {
  const platforms = [
     { src: Reactsvg, alt: 'React Native - Cross-Platform Mobile Development', name: 'React Native' },
    { src: Nodesvg, alt: 'Node.js - Backend Development for Mobile Apps', name: 'Node.js' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg', alt: 'Flutter - Cross-Platform Mobile Development', name: 'Flutter' }
  ];

  return (
    <section className='bg-white py-16'>
      <div className='max-w-7xl mx-auto px-6 md:px-10 lg:px-16'>
        {/* Section Heading */}
        <div className='text-center mb-5'>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight">
            Top Development Platforms We Use
          </h2>
        </div>

        {/* Platform Logos */}
        <div className='flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16'>
          {platforms.map((platform, index) => (
            <div 
              key={index}
              className='group relative flex items-center justify-center transition-transform hover:scale-110 duration-300'
            >
              <div className='flex flex-col gap-2.5'>
                <div>
                  <img 
                    src={platform.src} 
                    alt={platform.alt}
                    className='w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain transition-all duration-300'
                    loading='lazy'
                  />
                </div>

                <div>
                  {/* Label below icon */}
                  <p className='text-gray-800 text-sm text-center sm:text-base md:text-lg font-medium'>
                    {platform.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MobileDevelopmentPlatform