import React from 'react'
import MobileImage from '../../assets/Mobile/Mobile.webp'

const UxTopSection= () => {
  return (
    <section className="w-full bg-black">
      <div className='grid md:grid-cols-2 min-h-[70vh] lg:min-h-[80vh] max-w-7xl mx-auto'>
        {/* Left Content Section */}
        <div className='flex justify-center items-center px-6 py-16 md:px-10 lg:px-16'>
          <div className='w-[96%] space-y-6'>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
             Ui Ux Services
            </h1>
            <p className="text-base text-justify sm:text-lg md:text-xl lg:text-xl text-gray-300 leading-relaxed">
           we specialize in delivering professional UI/UX design services that combine creativity, usability, and technology. Our goal is to create modern, user-friendly, and visually appealing interfaces
            </p>
          </div>
        </div>

        {/* Right Image Section */}
        <div className='flex justify-center items-center min-h-[70vh] lg:min-h-[80vh] px-6 py-16 md:px-10'>
          <div className="w-full max-w-md lg:max-w-lg">
            <img 
              className="w-full h-auto object-contain drop-shadow-2xl" 
              alt="Mobile App Development Services - iOS and Android Applications" 
              src={MobileImage}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default UxTopSection