// import React from 'react'
// import { Workflow, Code2, FileText } from 'lucide-react'
// import robotimg from '../../assets/metrics-masters-testimonial-image-with-logo-pink-eye.webp'

// export default function WhyChooseUs() {
//   return (
//     <section className='w-full text-black bg-white min-h-[80vh] py-16'>
    
//     <div className='w-full flex justify-center items-end h-full'>

//       <div className='w-[40%] flex justify-end items-start h-full'>
     
//         <div className='w-[85%] gap-3 flex justify-center items-center flex-wrap h-[76%]'>
//             <img className='w-[87%] h-[58vh] object-cover' src={robotimg} alt="" />
//         </div>
     
//       </div>

//       <div className='w-[40%] h-full flex  justify-start items-start flex-wrap'>

//         <div className='w-[80%]  p-2 gap-6 flex flex-col justify-center h-[95%]'>

//           <p className='text-sm text-black font-semibold'>WHY CHOOSE US</p>
//           <h2 className='text-4xl font-semibold text-black leading-snug'>
//             We Create Result-Oriented Dynamic Applications
//           </h2>

//           <p className='text-gray-400 leading-relaxed'>
//             Over 25 years working in IT services developing software applications and mobile apps for clients all over the world.
//           </p>

//           <div className='flex flex-col gap-y-6 pt-4'>
                
//             <div className='flex items-start gap-4'>
//               <div className='w-14 h-14 flex-shrink-0 flex justify-center items-center rounded-full bg-white'>
//                 <Workflow className='text-black' size={28} />
//               </div>
//               <div className='flex flex-col gap-1'>
//                 <h3 className='text-xl font-semibold text-black'>First Growing Process</h3>
//                 <p className='text-sm text-gray-400'>At vero eos et accusamus etiusto odio praesentium.</p>
//               </div>
//             </div>

//             <div className='flex items-start gap-4'>
//               <div className='w-14 h-14 flex-shrink-0 flex justify-center items-center rounded-full bg-white'>
//                 <Code2 className='text-black' size={28} />
//               </div>
//               <div className='flex flex-col gap-1'>
//                 <h3 className='text-xl font-semibold text-black'>Clean code</h3>
//                 <p className='text-sm text-gray-400'>At vero eos et accusamus etiusto odio praesentium.</p>
//               </div>
//             </div>

//             <div className='flex items-start gap-4'>
//               <div className='w-14 h-14 flex-shrink-0 flex justify-center items-center rounded-full bg-white'>
//                 <FileText className='text-black' size={28} />
//               </div>
//               <div className='flex flex-col gap-1'>
//                 <h3 className='text-xl font-semibold text-black'>Well Documentation</h3>
//                 <p className='text-sm text-gray-400'>At vero eos et accusamus etiusto odio praesentium.</p>
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
import { Workflow, Code2, FileText } from 'lucide-react'
import robotimg from '../../assets/metrics-masters-testimonial-image-with-logo-pink-eye.webp'
export default function WhyChooseUs() {
 
  
  return (
    <section className='w-full text-black bg-white min-h-screen xl:min-h-[70vh] py-12 md:py-16 px-4'>
    
      <div className='w-full flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-0 xl:gap-8 max-w-7xl mx-auto'>

        {/* Image Section */}
        <div className='w-full lg:w-[50%] flex justify-center lg:justify-end items-start order-1 lg:order-1'>
          <div className='w-full max-w-md lg:max-w-lg'>
            <img 
              className='w-full h-auto object-cover rounded-lg ' 
              src={robotimg} 
              alt="Technology Innovation" 
            />
          </div>
        </div>

        {/* Content Section */}
        <div className='w-full lg:w-[50%] flex justify-center lg:justify-start items-start order-2 lg:order-2'>
          <div className='w-full max-w-xl p-2 gap-6 flex flex-col justify-center'>

            <p className='text-sm text-[#FF006E] font-semibold'>WHY CHOOSE US</p>
            <h2 className='text-3xl md:text-4xl font-semibold text-black leading-snug'>
              We Create Result-Oriented Dynamic Applications
            </h2>

            <p className='text-gray-600 leading-relaxed'>
              Over 25 years working in IT services developing software applications and mobile apps for clients all over the world.
            </p>

            <div className='flex flex-col gap-y-6 pt-4'>
                  
              <div className='flex items-start gap-4'>
                <div className='w-12 md:w-14 h-12 md:h-14 flex-shrink-0 flex justify-center items-center rounded-full bg-gray-100 shadow-md'>
                  <Workflow className='text-[#FF006E]' size={24} />
                </div>
                <div className='flex flex-col gap-1'>
                  <h3 className='text-lg md:text-xl font-semibold text-black'>First Growing Process</h3>
                  <p className='text-sm text-gray-600'>At vero eos et accusamus etiusto odio praesentium.</p>
                </div>
              </div>

              <div className='flex items-start gap-4'>
                <div className='w-12 md:w-14 h-12 md:h-14 flex-shrink-0 flex justify-center items-center rounded-full bg-gray-100 shadow-md'>
                  <Code2 className='text-[#FF006E]' size={24} />
                </div>
                <div className='flex flex-col gap-1'>
                  <h3 className='text-lg md:text-xl font-semibold text-black'>Clean Code</h3>
                  <p className='text-sm text-gray-600'>At vero eos et accusamus etiusto odio praesentium.</p>
                </div>
              </div>

              <div className='flex items-start gap-4'>
                <div className='w-12 md:w-14 h-12 md:h-14 flex-shrink-0 flex justify-center items-center rounded-full bg-gray-100 shadow-md'>
                  <FileText className='text-[#FF006E]' size={24} />
                </div>
                <div className='flex flex-col gap-1'>
                  <h3 className='text-lg md:text-xl font-semibold text-black'>Well Documentation</h3>
                  <p className='text-sm text-gray-600'>At vero eos et accusamus etiusto odio praesentium.</p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

    </section>
  )
}