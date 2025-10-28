import React from 'react';
import graphic from '../../../assets/Services/CustomSoftware/Search-Engine-Marketing-SEM-services3.png'


export default function WebDevelopmentHero() {
  return (
    <section className='w-full p-2 md:p-4 text-white min-h-[60vh] '>
      
      <div className='w-full lg:w-[90%] xl:w-[80%] 2xl:w-[70%] mx-auto h-full flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-4 py-6 md:py-8 lg:py-0'>
        
        {/* Text Content */}
        <div className='w-full lg:w-[50%] flex flex-col justify-center gap-y-3 md:gap-y-4 order-2 lg:order-1 text-center lg:text-left'>
          <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight'>
            Web Development Solutions
          </h2>
          <p className='text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed'>
            Build Powerful, Scalable Web Applications That Drive Business Growth And Deliver Exceptional User Experiences
          </p>
           <div className='mt-4 md:mt-6 flex justify-center lg:justify-start'>
            <button className="px-8 py-3 md:px-10 md:py-4 rounded-lg border-2 border-[#FFFFFF94] text-white font-medium bg-[#FF006E] cursor-pointer hover:shadow-xl hover:border-2 hover:border-[#FF006E] hover:bg-white text-lg md:text-xl hover:text-[#FF006E] transition-all duration-300">
              Schedule a Call
            </button>
          </div>
        </div>
        
        {/* Image */}
        <div className='w-full lg:w-[50%] flex justify-center items-center h-64 sm:h-72 md:h-80 lg:h-[50vh] order-1 lg:order-2'>
          <img 
            src={graphic}
            className='w-full object-contain h-full' 
            alt="Web Development Services" 
          />
        </div>
      </div>
      
      {/* Breadcrumb */}
      <div className='w-full rounded-lg md:rounded-xl h-10 md:h-12 bg-[#FF006E] mt-4 md:mt-6'>
        <div className='w-full lg:w-[60%] xl:w-[42%] 2xl:w-[45%] h-full flex justify-center items-center px-4'>
          <p className='text-sm sm:text-base md:text-lg lg:text-xl font-medium truncate'>
            Services {'>'} Web Development
          </p>
        </div>
      </div>
      
    </section>
  );
}