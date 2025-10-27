// import React from 'react'
// import { Mail, Phone, MapPin } from 'lucide-react'

// export default function GetinTouch() {
//   return (
//     <section className='w-full flex justify-center items-center h-[70vh] py-16 bg-white'>

//         <div className='w-[65%]  h-full flex justify-center items-center gap-0 rounded-2xl overflow-hidden shadow-2xl'>

     
//         <div className='w-[50%] h-full flex flex-col p-4 justify-center gap-y-7  bg-gradient-to-br from-[#FF006E] via-[#C9004D] to-[#8B0034] text-white '>

//         <div className='w-full '>
//             <p className='text-sm font-semibold text-white/90 tracking-wide'>LET'S TALK</p>
//             <h3 className='text-4xl font-bold mt-2 leading-tight text-white'>Speak With Expert <br />Engineers.</h3>
//         </div>

//         <div className='flex items-center gap-4'>
//             <div className='w-12 h-12 bg-white flex justify-center items-center rounded-full flex-shrink-0 shadow-lg'>
//                 <Mail className='text-[#FF006E]' size={22} />
//             </div>
//              <div>
//                     <p className='text-sm text-white/70'>Email</p>
//                     <p className='text-base font-semibold text-white'>info@mictech.com</p>
//             </div>
//         </div>

//         <div className='flex items-center gap-4'>
//             <div className='w-12 h-12 bg-white flex justify-center items-center rounded-full flex-shrink-0 shadow-lg'>
//                 <Phone className='text-[#FF006E]' size={22} />
//             </div>
//              <div>
//                     <p className='text-sm text-white/70'>Phone</p>
//                     <p className='text-base font-semibold text-white'>+92 123 456 7890</p>
//             </div>
//         </div>

//         <div className='flex items-center gap-4'>
//             <div className='w-12 h-12 bg-white flex justify-center items-center rounded-full flex-shrink-0 shadow-lg'>
//                 <MapPin className='text-[#FF006E]' size={22} />
//             </div>
//              <div>
//                     <p className='text-sm text-white/70'>Address</p>
//                     <p className='text-base font-semibold text-white'>Karachi, Pakistan</p>
//             </div>
//         </div>

//         </div>



//         <div className='w-[90%] px-12 py-16 bg-gray-50'>
            
//             <div className='mb-8'>
//                 <p className='text-sm font-semibold text-[#FF006E] tracking-wide'>GET IN TOUCH</p>
//                 <h2 className='text-3xl font-bold text-black mt-2'>Fill The Form Below</h2>
//             </div>

//             <form className='flex flex-col gap-5'>
                
//                 <div className='flex gap-4'>
//                     <input 
//                         type="text" 
//                         placeholder="Name" 
//                         className='w-1/2 px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FF006E] focus:outline-none focus:ring-2 focus:ring-[#FF006E]/20 transition-all'
//                     />
//                     <input 
//                         type="email" 
//                         placeholder="E-Mail" 
//                         className='w-1/2 px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FF006E] focus:outline-none focus:ring-2 focus:ring-[#FF006E]/20 transition-all'
//                     />
//                 </div>

//                 <div className='flex gap-4'>
//                     <input 
//                         type="tel" 
//                         placeholder="Phone Number" 
//                         className='w-1/2 px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FF006E] focus:outline-none focus:ring-2 focus:ring-[#FF006E]/20 transition-all'
//                     />
//                     <input 
//                         type="text" 
//                         placeholder="Your Website" 
//                         className='w-1/2 px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FF006E] focus:outline-none focus:ring-2 focus:ring-[#FF006E]/20 transition-all'
//                     />
//                 </div>

//                 <textarea 
//                     placeholder="Your message Here" 
//                     rows="5"
//                     className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FF006E] focus:outline-none focus:ring-2 focus:ring-[#FF006E]/20 transition-all resize-none'
//                 ></textarea>

//                 <button 
//                     type="submit"
//                     className='w-fit px-8 py-3 bg-[#FF006E] text-white font-semibold rounded-lg hover:bg-[#FF006E]/90 hover:shadow-lg hover:shadow-[#FF006E]/30 transition-all duration-300'
//                 >
//                     Submit Now
//                 </button>

//             </form>

//         </div>

//         </div>

//     </section>
//   )
// }

import React from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function GetinTouch() {
  return (
    <section className='w-full flex justify-center items-center min-h-screen 2xl:min-h-[50vh] py-12 md:py-16 px-4 bg-white'>

      <div className='w-full max-w-6xl flex flex-col lg:flex-row justify-center items-stretch gap-0 rounded-2xl overflow-hidden shadow-2xl'>

        {/* Left Side - Contact Info */}
        <div className='w-full lg:w-[50%] flex flex-col p-6 md:p-8 lg:p-12 justify-center gap-y-6 md:gap-y-7 bg-gradient-to-br from-[#FF006E] via-[#C9004D] to-[#8B0034] text-white'>

          <div className='w-full'>
            <p className='text-xs md:text-sm font-semibold text-white/90 tracking-wide'>LET'S TALK</p>
            <h3 className='text-3xl md:text-4xl font-bold mt-2 leading-tight text-white'>
              Speak With Expert Engineers.
            </h3>
          </div>

          <div className='flex items-center gap-4'>
            <div className='w-12 h-12 bg-white flex justify-center items-center rounded-full flex-shrink-0 shadow-lg'>
              <Mail className='text-[#FF006E]' size={22} />
            </div>
            <div>
              <p className='text-sm text-white/70'>Email</p>
              <p className='text-base font-semibold text-white'>info@mictech.com</p>
            </div>
          </div>

          <div className='flex items-center gap-4'>
            <div className='w-12 h-12 bg-white flex justify-center items-center rounded-full flex-shrink-0 shadow-lg'>
              <Phone className='text-[#FF006E]' size={22} />
            </div>
            <div>
              <p className='text-sm text-white/70'>Phone</p>
              <p className='text-base font-semibold text-white'>+92 123 456 7890</p>
            </div>
          </div>

          <div className='flex items-center gap-4'>
            <div className='w-12 h-12 bg-white flex justify-center items-center rounded-full flex-shrink-0 shadow-lg'>
              <MapPin className='text-[#FF006E]' size={22} />
            </div>
            <div>
              <p className='text-sm text-white/70'>Address</p>
              <p className='text-base font-semibold text-white'>Karachi, Pakistan</p>
            </div>
          </div>

        </div>

        {/* Right Side - Contact Form */}
        <div className='w-full lg:w-[50%] px-6 md:px-8 lg:px-12 py-8 md:py-12 lg:py-16 bg-gray-50'>
          
          <div className='mb-6 md:mb-8'>
            <p className='text-xs md:text-sm font-semibold text-[#FF006E] tracking-wide'>GET IN TOUCH</p>
            <h2 className='text-2xl md:text-3xl font-bold text-black mt-2'>Fill The Form Below</h2>
          </div>

          <form className='flex flex-col gap-4 md:gap-5'>
            
            <div className='flex flex-col sm:flex-row gap-4'>
              <input 
                type="text" 
                placeholder="Name" 
                className='w-full sm:w-1/2 px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FF006E] focus:outline-none focus:ring-2 focus:ring-[#FF006E]/20 transition-all'
              />
              <input 
                type="email" 
                placeholder="E-Mail" 
                className='w-full sm:w-1/2 px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FF006E] focus:outline-none focus:ring-2 focus:ring-[#FF006E]/20 transition-all'
              />
            </div>

            <div className='flex flex-col sm:flex-row gap-4'>
              <input 
                type="tel" 
                placeholder="Phone Number" 
                className='w-full sm:w-1/2 px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FF006E] focus:outline-none focus:ring-2 focus:ring-[#FF006E]/20 transition-all'
              />
              <input 
                type="text" 
                placeholder="Your Website" 
                className='w-full sm:w-1/2 px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FF006E] focus:outline-none focus:ring-2 focus:ring-[#FF006E]/20 transition-all'
              />
            </div>

            <textarea 
              placeholder="Your message Here" 
              rows="5"
              className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FF006E] focus:outline-none focus:ring-2 focus:ring-[#FF006E]/20 transition-all resize-none'
            ></textarea>

            <button 
              type="submit"
              className='w-full sm:w-fit px-8 py-3 bg-[#FF006E] text-white font-semibold rounded-lg hover:bg-[#FF006E]/90 hover:shadow-lg hover:shadow-[#FF006E]/30 transition-all duration-300'
            >
              Submit Now
            </button>

          </form>

        </div>

      </div>

    </section>
  )
}