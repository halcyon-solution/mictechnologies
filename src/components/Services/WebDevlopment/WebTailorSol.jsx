import React from 'react';
import { Search, Menu, Play } from 'lucide-react';

export default function WebDevVsCMS() {
  return (
    <section className='w-full min-h-screen py-8 md:py-12 lg:py-16 px-4  flex items-center'>
      <div className='max-w-7xl mx-auto w-full'>
        <div className='grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center'>
          
          {/* Left - Mobile Mockup */}
          <div className='flex justify-center items-center order-2 lg:order-1'>
            <div className='relative w-full max-w-[320px] sm:max-w-[360px] md:max-w-[400px]'>
              
              {/* Background Decorative Shapes */}
              <div className='absolute -top-16 -left-16 w-48 h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-[3rem] opacity-40'></div>
              <div className='absolute -bottom-20 -right-20 w-56 h-56 bg-gradient-to-br from-gray-300 to-gray-400 rounded-[4rem] opacity-30'></div>
              
              {/* Mobile Device Frame */}
              <div className='relative z-10 bg-white rounded-[2.5rem] p-3 shadow-2xl border-8 border-gray-900'>
                
                {/* Screen Container */}
                <div className='bg-white rounded-[2rem] overflow-hidden'>
                  
                  {/* Header */}
                  <div className='flex justify-between items-center px-4 py-3 border-b border-gray-200'>
                    <div className='bg-gray-900 px-4 py-1.5 rounded-md'>
                      <span className='text-white text-sm font-bold'>LOGO</span>
                    </div>
                    <div className='flex gap-3'>
                      <Search size={20} className='text-gray-700' />
                      <Menu size={20} className='text-gray-700' />
                    </div>
                  </div>

                  {/* Divider Line */}
                  <div className='w-full h-px bg-gray-300 mx-4' style={{width: 'calc(100% - 2rem)'}}></div>

                  {/* Content Area */}
                  <div className='p-4 space-y-3'>
                    
                    {/* About Section */}
                    <div>
                      <h3 className='text-xl font-bold text-gray-900 mb-2'>About us</h3>
                      <p className='text-gray-600 text-sm leading-relaxed'>
                        Lorem ipsum dolor sit amet platea dolore tristique adipiscing elit quam facilisis vel ut sed.
                      </p>
                    </div>

                    {/* Video/Content Area with Carousel */}
                    <div className='relative bg-gray-100 rounded-xl aspect-[4/3] flex items-center justify-center border border-gray-300'>
                      
                      {/* Width Label */}
                      <div className='absolute top-2 left-2 text-xs text-gray-600 bg-white px-2 py-1 rounded shadow-sm font-medium'>
                        390px
                      </div>
                      
                      {/* Content Grid Placeholder */}
                      <div className='grid grid-cols-2 gap-2 p-4 w-full h-full'>
                        <div className='bg-gray-300 rounded-lg'></div>
                        <div className='bg-gray-300 rounded-lg'></div>
                        <div className='bg-gray-300 rounded-lg'></div>
                        <div className='bg-gray-300 rounded-lg'></div>
                      </div>
                      
                      {/* Left Arrow */}
                      <button className='absolute -left-3 top-1/2 -translate-y-1/2 w-7 h-7 border-2 border-gray-800 rounded-full flex items-center justify-center bg-white shadow-lg hover:bg-gray-50 transition-all'>
                        <span className='text-gray-800 text-lg font-bold'>‹</span>
                      </button>
                      
                      {/* Right Arrow */}
                      <button className='absolute -right-3 top-1/2 -translate-y-1/2 w-7 h-7 border-2 border-gray-800 rounded-full flex items-center justify-center bg-white shadow-lg hover:bg-gray-50 transition-all'>
                        <span className='text-gray-800 text-lg font-bold'>›</span>
                      </button>
                      
                      {/* Play Button - Center */}
                      <button className='absolute inset-0 m-auto w-14 h-14 border-2 border-gray-800 rounded-full flex items-center justify-center bg-white shadow-xl hover:scale-105 transition-all'>
                        <Play size={24} className='text-gray-800 ml-1' />
                      </button>
                    </div>

                    {/* Carousel Dots */}
                    <div className='flex justify-center gap-2 pt-1'>
                      <div className='w-2 h-2 rounded-full bg-gray-800'></div>
                      <div className='w-2 h-2 rounded-full bg-gray-300'></div>
                      <div className='w-2 h-2 rounded-full bg-gray-300'></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className='text-white space-y-5 lg:space-y-6 order-1 lg:order-2'>
            <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight'>
              <span className='text-[#FF006E]'>Custom Web Development VS CMS:</span>
              <br />
              <span className='text-white'>Tailoring Your Digital Presence</span>
            </h2>

            <p className='text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed'>
              Choosing between custom-built web development and ready-made Content Management Systems (CMS) or website templates is a crucial decision that shapes your entire digital strategy. Both approaches offer unique advantages designed to meet different organizational requirements and business goals.
            </p>

            <p className='text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed'>
              Custom web development delivers unmatched flexibility and originality. Your platform is constructed from scratch, precisely aligned with your business specifications. This methodology allows MIC Tech to engineer exclusive functionalities, maximize system performance, and create a digital presence that distinguishes you from competitors. It's the perfect solution for enterprises with specialized requirements that standard templates cannot accommodate or organizations seeking to establish a truly unique online identity.
            </p>

            <p className='text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed'>
              Conversely, CMS platforms or pre-built website templates provide a faster, more economical path to establishing your online presence. These solutions offer intuitive content management interfaces and come with comprehensive feature sets and customizable design elements. This approach is ideal for small to medium-sized businesses aiming to launch their digital presence swiftly and cost-effectively.
            </p>

            <p className='text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed'>
              At MIC Tech Software House, we excel in both custom web development and CMS-powered solutions. Our expert team is dedicated to analyzing your unique business requirements and delivering the optimal solution that guarantees your digital success.
            </p>

            {/* <div className='pt-2 md:pt-4'>
              <p className='text-white text-base sm:text-lg md:text-xl'>
                Wanna get in touch?{' '}
                <a href='#contact' className='underline cursor-pointer hover:text-yellow-400 transition-colors duration-300'>
                  Let's talk
                </a>
              </p>
            </div> */}
          </div>

        </div>
      </div>
    </section>
  );
}