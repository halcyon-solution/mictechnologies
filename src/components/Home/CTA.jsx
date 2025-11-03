// import React from 'react'

// export default function CTA() {
//   return (
//     <section className='w-full relative flex justify-center items-center h-[21vh] py-16 overflow-hidden bg-gradient-to-br from-[#FF006E] via-[#C9004D] to-[#8B0034]'>
      
//       {/* Background Pattern/Particles */}
//       <div className='absolute inset-0 opacity-10'>
//         <img 
//           src="https://cdn.pixabay.com/photo/2016/10/11/21/43/geometric-1732847_1280.jpg" 
//           alt="pattern" 
//           className='w-full h-full object-cover'
//         />
//       </div>

//       {/* Decorative Circles */}
//       <div className='absolute top-10 left-10 w-32 h-32 rounded-full border-4 border-white/20 animate-pulse'></div>
//       <div className='absolute bottom-10 right-20 w-40 h-40 rounded-full border-4 border-white/10'></div>
//       <div className='absolute top-1/2 right-40 w-24 h-24 rounded-full border-4 border-white/15'></div>
      
//       {/* Gear/Cog Shape (Left) */}
//       <div className='absolute left-0 top-0 opacity-10'>
//         <svg width="200" height="200" viewBox="0 0 200 200" className='text-white'>
//           <path fill="currentColor" d="M100,40 L110,60 L130,55 L125,75 L145,80 L135,95 L150,110 L130,115 L125,135 L110,130 L100,150 L90,130 L75,135 L80,115 L60,110 L70,95 L55,80 L75,75 L70,55 L90,60 Z">
//             <animateTransform
//               attributeName="transform"
//               type="rotate"
//               from="0 100 100"
//               to="360 100 100"
//               dur="20s"
//               repeatCount="indefinite"
//             />
//           </path>
//         </svg>
//       </div>

//       {/* Gear/Cog Shape (Right) */}
//       <div className='absolute right-10 bottom-0 opacity-10'>
//         <svg width="180" height="180" viewBox="0 0 200 200" className='text-white'>
//           <path fill="currentColor" d="M100,40 L110,60 L130,55 L125,75 L145,80 L135,95 L150,110 L130,115 L125,135 L110,130 L100,150 L90,130 L75,135 L80,115 L60,110 L70,95 L55,80 L75,75 L70,55 L90,60 Z">
//             <animateTransform
//               attributeName="transform"
//               type="rotate"
//               from="360 100 100"
//               to="0 100 100"
//               dur="25s"
//               repeatCount="indefinite"
//             />
//           </path>
//         </svg>
//       </div>

//       {/* Content */}
//       <div className='relative z-10 w-[95%]  flex justify-center gap-5 items-center'>
        
//         <div className='w-[40%] '>
//           <h2 className='text-4xl lg:text-3xl font-bold text-white leading-tight'>
//             Grow Your Business and Build Your Website <br />
//             or Software With us.
//           </h2>
//         </div>

//         <div className='w-[15%]  flex justify-end'>
//           <button className='px-8 py-4 bg-white text-[#FF006E] font-bold text-lg rounded-full hover:bg-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300'>
//             Get In Touch
//           </button>
//         </div>

//       </div>

//     </section>
//   )
// }

import React from 'react'
import { Link } from 'react-router-dom'

export default function CTA() {
  return (
    <section className='w-full relative flex justify-center items-center xl:h-[18vh]  xl:min-h-[3vh] min-h-[40vh] md:h-[21vh] py-12 md:py-16 px-4 overflow-hidden bg-gradient-to-br from-[#FF006E] via-[#C9004D] to-[#8B0034]'>
      
      {/* Background Pattern/Particles */}
      <div className='absolute inset-0 opacity-10'>
        <img 
          src="https://cdn.pixabay.com/photo/2016/10/11/21/43/geometric-1732847_1280.jpg" 
          alt="pattern" 
          className='w-full h-full object-cover'
        />
      </div>

      {/* Decorative Circles */}
      <div className='absolute top-5 md:top-10 left-5 md:left-10 w-20 md:w-32 h-20 md:h-32 rounded-full border-4 border-white/20 animate-pulse'></div>
      <div className='absolute bottom-5 md:bottom-10 right-10 md:right-20 w-24 md:w-40 h-24 md:h-40 rounded-full border-4 border-white/10'></div>
      <div className='absolute top-1/2 right-20 md:right-40 w-16 md:w-24 h-16 md:h-24 rounded-full border-4 border-white/15'></div>
      
      {/* Gear/Cog Shape (Left) */}
      <div className='absolute left-0 top-0 opacity-10 hidden md:block'>
        <svg width="200" height="200" viewBox="0 0 200 200" className='text-white'>
          <path fill="currentColor" d="M100,40 L110,60 L130,55 L125,75 L145,80 L135,95 L150,110 L130,115 L125,135 L110,130 L100,150 L90,130 L75,135 L80,115 L60,110 L70,95 L55,80 L75,75 L70,55 L90,60 Z">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 100 100"
              to="360 100 100"
              dur="20s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </div>

      {/* Gear/Cog Shape (Right) */}
      <div className='absolute right-10 bottom-0 opacity-10 hidden md:block'>
        <svg width="180" height="180" viewBox="0 0 200 200" className='text-white'>
          <path fill="currentColor" d="M100,40 L110,60 L130,55 L125,75 L145,80 L135,95 L150,110 L130,115 L125,135 L110,130 L100,150 L90,130 L75,135 L80,115 L60,110 L70,95 L55,80 L75,75 L70,55 L90,60 Z">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="360 100 100"
              to="0 100 100"
              dur="25s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </div>

      {/* Content */}
      <div className='relative  z-10 w-full max-w-6xl flex flex-col md:flex-row justify-center gap-6 md:gap-5 items-center'>
        
        <div className='w-full md:w-[60%] xl:w-[70%] lg:w-[40%] text-center md:text-left'>
          <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight'>
            Grow Your Business and Build Your Website or Software With us.
          </h2>
        </div>

        <div className='w-full md:w-auto flex justify-center md:justify-end'>
          <Link to="/contact">
            <button className='px-6 cursor-pointer md:px-8 py-3 md:py-4 bg-white text-[#FF006E] font-bold text-base md:text-lg rounded-full hover:bg-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300'>
              Get In Touch
            </button>
          </Link>
        </div>

      </div>

    </section>
  )
}