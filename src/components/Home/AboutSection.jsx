// import React from 'react'
// import { Lightbulb, TrendingUp, RefreshCw, Headphones } from 'lucide-react'

// export default function AboutSection() {
//   return (
//     <section className='w-full text-white min-h-[70vh] py-16'>
    
//     <div className='w-full flex justify-center items-start h-full'>

//       <div className='w-[40%]  flex justify-end items-start h-full'>
     
//         <div className='w-[85%] gap-3 flex justify-center items-center flex-wrap h-[76%]'>

//           <div className='w-72 border border-gray-800 rounded-md mt-4 flex p-7 gap-y-4 flex-col justify-center hover:border-[#FF006E] hover:shadow-lg hover:shadow-[#FF006E]/20 transition-all duration-300 h-56'>
//             <div className='w-10 flex justify-center items-center h-18 rounded-full bg-white'>
//               <Lightbulb className='text-[#FF006E]' size={28} />
//             </div>
//             <p className='text-2xl font-semibold'>Innovation Driven</p>
//             <p className='text-sm text-gray-400'>We blend creativity with cutting-edge technology to deliver forward-thinking solutions</p>
//           </div>

//           <div className='w-72 rounded-md border border-gray-800 -mt-2 flex p-7 gap-y-4 flex-col justify-center hover:border-[#FF006E] hover:shadow-lg hover:shadow-[#FF006E]/20 transition-all duration-300 h-60'>
//             <div className='w-12 flex justify-center items-center h-12 rounded-full bg-white'>
//               <TrendingUp className='text-[#FF006E]' size={28} />
//             </div>
//             <p className='text-2xl font-semibold'>Growth Focused</p>
//             <p className='text-sm text-gray-400'>Helping businesses scale and succeed in the digital landscape</p>
//           </div>

//           <div className='w-72 border border-gray-800 rounded-md flex p-7 gap-y-4 flex-col justify-center hover:border-[#FF006E] hover:shadow-lg hover:shadow-[#FF006E]/20 transition-all duration-300 h-60'>
//             <div className='w-12 flex justify-center items-center h-12 rounded-full bg-white'>
//               <RefreshCw className='text-[#FF006E]' size={28} />
//             </div>
//             <p className='text-2xl font-semibold'>Agile Approach</p>
//             <p className='text-sm text-gray-400'>Flexible development process that adapts to your evolving needs</p>
//           </div>

//           <div className='w-72 border border-gray-800 rounded-md -mt-4 flex p-7 gap-y-4 flex-col justify-center hover:border-[#FF006E] hover:shadow-lg hover:shadow-[#FF006E]/20 transition-all duration-300 h-60'>
//             <div className='w-12 flex justify-center items-center h-12 rounded-full bg-white'>
//               <Headphones className='text-[#FF006E]' size={28} />
//             </div>
//             <p className='text-2xl font-semibold'>Client Centric</p>
//             <p className='text-sm text-gray-400'>Your success is our priority, building lasting partnerships through trust</p>
//           </div>

//         </div>
     
//       </div>

//       <div className='w-[40%] h-full flex justify-start items-start flex-wrap'>

//         <div className='w-[80%] p-2 gap-3 flex flex-col justify-center h-[76%]'>

//           <p className='text-sm text-[#D5D5D5] font-medium'>ABOUT US</p>
//           <h2 className='text-4xl font-semibold text-white leading-snug'>
//             Building Digital Excellence Since Day One
//           </h2>

//           <p className='text-gray-400 leading-relaxed'>
//             We are a team of passionate creators, developers, and strategists dedicated to transforming ideas into exceptional digital experiences. From startups to established enterprises, we partner with businesses to craft solutions that drive real impact and sustainable growth.
//           </p>

//           <div className='flex flex-col justify-end pt-6 gap-y-9 p-0'>
                
//             <div className='w-full'>
//               <div className='flex justify-between items-center mb-2'>
//                 <span className='text-white font-medium'>Projects Delivered</span>
//                 <span className='text-white font-bold'>150+</span>
//               </div>
//               <div className='w-full bg-gray-800/50 rounded-full h-2'>
//                 <div className='bg-[#FF006E] h-2 rounded-full transition-all duration-500' style={{width: '92%'}}></div>
//               </div>
//             </div>

//             <div className='w-full'>
//               <div className='flex justify-between items-center mb-2'>
//                 <span className='text-white font-medium'>Happy Clients</span>
//                 <span className='text-white font-bold'>120+</span>
//               </div>
//               <div className='w-full bg-gray-800/50 rounded-full h-2'>
//                 <div className='bg-[#FF006E] h-2 rounded-full transition-all duration-500' style={{width: '88%'}}></div>
//               </div>
//             </div>

//             <div className='w-full'>
//               <div className='flex justify-between items-center mb-2'>
//                 <span className='text-white font-medium'>Team Members</span>
//                 <span className='text-white font-bold'>25+</span>
//               </div>
//               <div className='w-full bg-gray-800/50 rounded-full h-2'>
//                 <div className='bg-[#FF006E] h-2 rounded-full transition-all duration-500' style={{width: '75%'}}></div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>

//     </div>

//     </section>
//   )
// }


import React from 'react'
import { Lightbulb, TrendingUp, RefreshCw, Headphones } from 'lucide-react'

export default function AboutSection() {
  return (
    <section className='w-full  text-white min-h-screen lg:min-h-fit xl:min-h-[60vh] py-12 md:py-2 px-1'>
      
      <div className='w-full  flex flex-col 2xl:flex-row justify-center items-start lg:items-center 2xl:items-start gap-8 lg:gap-9 xl:gap-12 max-w-7xl mx-auto'>
        
        {/* Cards Section */}
        <div className='w-full  2xl:w-[53%] xl:w-[50%] lg:w-[70%] lg:p-2 xl:p-0 xl flex justify-center lg:justify-end 2xl:order-1 items-start order-2 lg:order-2'>
          <div className='w-full max-w-2xl gap-4 md:gap-6 grid grid-cols-1 sm:grid-cols-2 justify-items-center'>
            
            <div className='w-full max-w-xs border border-gray-800 rounded-md mt-0 sm:mt-4 flex p-6 md:p-7 gap-y-4 flex-col justify-center hover:border-[#FF006E] hover:shadow-lg hover:shadow-[#FF006E]/20 transition-all duration-300 min-h-[14rem]'>
              <div className='w-10 flex justify-center items-center h-10 rounded-full bg-white'>
                <Lightbulb className='text-[#FF006E]' size={28} />
              </div>
              <p className='text-xl md:text-2xl font-semibold'>Innovation Driven</p>
              <p className='text-sm text-gray-400'>We blend creativity with cutting-edge technology to deliver forward-thinking solutions</p>
            </div>

            <div className='w-full max-w-xs rounded-md border border-gray-800 mt-0 sm:-mt-2 flex p-6 md:p-7 gap-y-4 flex-col justify-center hover:border-[#FF006E] hover:shadow-lg hover:shadow-[#FF006E]/20 transition-all duration-300 min-h-[14rem] md:min-h-[15rem]'>
              <div className='w-12 flex justify-center items-center h-12 rounded-full bg-white'>
                <TrendingUp className='text-[#FF006E]' size={28} />
              </div>
              <p className='text-xl md:text-2xl font-semibold'>Growth Focused</p>
              <p className='text-sm text-gray-400'>Helping businesses scale and succeed in the digital landscape</p>
            </div>

            <div className='w-full max-w-xs border border-gray-800 rounded-md flex p-6 md:p-7 gap-y-4 flex-col justify-center hover:border-[#FF006E] hover:shadow-lg hover:shadow-[#FF006E]/20 transition-all duration-300 min-h-[14rem] md:min-h-[15rem]'>
              <div className='w-12 flex justify-center items-center h-12 rounded-full bg-white'>
                <RefreshCw className='text-[#FF006E]' size={28} />
              </div>
              <p className='text-xl md:text-2xl font-semibold'>Agile Approach</p>
              <p className='text-sm text-gray-400'>Flexible development process that adapts to your evolving needs</p>
            </div>

            <div className='w-full max-w-xs border border-gray-800 rounded-md mt-0 sm:-mt-4 flex p-6 md:p-7 gap-y-4 flex-col justify-center hover:border-[#FF006E] hover:shadow-lg hover:shadow-[#FF006E]/20 transition-all duration-300 min-h-[14rem] md:min-h-[15rem]'>
              <div className='w-12 flex justify-center items-center h-12 rounded-full bg-white'>
                <Headphones className='text-[#FF006E]' size={28} />
              </div>
              <p className='text-xl md:text-2xl font-semibold'>Client Centric</p>
              <p className='text-sm text-gray-400'>Your success is our priority, building lasting partnerships through trust</p>
            </div>

          </div>
        </div>

        {/* Content Section */}
        <div className='w-full  md:p-3 lg:p-0 2xl:w-[50%] xl:w-[75%] lg:w-[90%]  flex justify-center md:justify-start lg:justify-start items-start order-1 lg:order-1 2xl:order-2'>
          <div className='w-full max-w-xl p-2 gap-5 md:gap-3 flex flex-col justify-center'>

            <p className='text-sm text-[#FF006E] font-medium'>ABOUT US</p>
            <h2 className='text-3xl md:text-4xl font-semibold text-white leading-snug'>
              Building Digital Excellence Since Day One
            </h2>

            <p className='text-gray-400 leading-relaxed'>
              We are a team of passionate creators, developers, and strategists dedicated to transforming ideas into exceptional digital experiences. From startups to established enterprises, we partner with businesses to craft solutions that drive real impact and sustainable growth.
            </p>

            <div className='flex flex-col justify-end pt-6 gap-y-7 md:gap-y-9 p-0'>
                  
              <div className='w-full'>
                <div className='flex justify-between items-center mb-2'>
                  <span className='text-white font-medium text-sm md:text-base'>Years of Innovation</span>
                  <span className='text-white font-bold text-sm md:text-base'>2+</span>
                </div>
                <div className='w-full bg-gray-800/50 rounded-full h-2'>
                  <div className='bg-[#FF006E] h-2 rounded-full transition-all duration-500' style={{width: '85%'}}></div>
                </div>
              </div>

           

              <div className='w-full'>
                <div className='flex justify-between items-center mb-2'>
                  <span className='text-white font-medium text-sm md:text-base'>Client Satisfaction</span>
                  <span className='text-white font-bold text-sm md:text-base'>98%</span>
                </div>
                <div className='w-full bg-gray-800/50 rounded-full h-2'>
                  <div className='bg-[#FF006E] h-2 rounded-full transition-all duration-500' style={{width: '98%'}}></div>
                </div>
              </div>

              <div className='w-full'>
                <div className='flex justify-between items-center mb-2'>
                  <span className='text-white font-medium text-sm md:text-base'>Growing Team</span>
                  <span className='text-white font-bold text-sm md:text-base'>8+</span>
                </div>
                <div className='w-full bg-gray-800/50 rounded-full h-2'>
                  <div className='bg-[#FF006E] h-2 rounded-full transition-all duration-500' style={{width: '65%'}}></div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  )
}