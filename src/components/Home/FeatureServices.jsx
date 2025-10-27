// import React from 'react'
// import { Code, Palette, Share2, Globe, Smartphone, Layers, Server } from 'lucide-react'

// export default function FeatureServices() {
//   const services = [
//     {
//       icon: Code,
//       title: 'Custom Software Development',
//       description: 'Tailored software solutions built to meet your unique business requirements'
//     },
//     {
//       icon: Palette,
//       title: 'Graphic Designing',
//       description: 'Creative and eye-catching designs that make your brand stand out'
//     },
//     {
//       icon: Share2,
//       title: 'Social Media Marketing',
//       description: 'Strategic campaigns to boost your online presence and engagement'
//     },
//     {
//       icon: Globe,
//       title: 'Web Development',
//       description: 'Modern, responsive websites that deliver exceptional user experiences'
//     },
//     {
//       icon: Smartphone,
//       title: 'Mobile App Development',
//       description: 'Native and cross-platform mobile applications for iOS and Android'
//     },
//     {
//       icon: Layers,
//       title: 'UI/UX Designing',
//       description: 'Intuitive interfaces that prioritize user satisfaction and usability'
//     },
//     {
//       icon: Server,
//       title: 'Rental Software Solution',
//       description: 'Comprehensive rental management systems to streamline your operations'
//     }
//   ]

//   return (
//    <section className='w-full min-h-screen bg-[#05010F] py-3'>

//     <div className='w-full text-white flex flex-col gap-y-3 sm:gap-y-4 justify-end items-center px-4 min-h-[12rem] sm:h-48'>
//             <p className='text-lg sm:text-sm text-[#D5D5D5] '>SOLUTIONS</p>
//             <h2 className='text-2xl sm:text-3xl md:text-4xl text-center font-semibold px-4'>
//               We Are Offering All Kinds of <br className='hidden sm:block'/>IT Solutions Services
//             </h2>
//              <div className="relative w-48 sm:w-64 h-1 bg-[#FF006E] rounded-full mt-2 sm:mt-4">
//         <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-[#FF006E] rounded-full shadow-lg shadow-[#9CFE4F]/50 animate-slide ">
//         </div>
//       </div>
      
//       <style jsx>{`
//         @keyframes slide {
//           0% {
//             left: -6px;
//           }
//           100% {
//             left: calc(100% - 6px);
//           }
//         }
        
//         .animate-slide {
//           animation: slide 2s ease-in-out infinite alternate;
//         }
//       `}</style>
//     </div>

//     <div className='w-full flex justify-center items-center mt-8 sm:mt-12 md:mt-16'>
//         <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl px-4 sm:px-6 md:px-8'>
//           {services.map((service, index) => {
//             const Icon = service.icon
//             return (
//               <div 
//                 key={index}
//                 className='group w-[25rem] border border-gray-800 mx-auto bg-transparent   rounded-lg p-6 sm:p-7 flex gap-y-4 flex-col justify-center items-center hover:bg-[#FF006E] hover:shadow-2xl hover:shadow-[#FF006E]/30 hover:bg-gradient-to-br  transition-all duration-500 min-h-[20rem] sm:h-80 cursor-pointer'
//               >
              
//         <Icon 
//   className='text-[#FF69B4] transition-transform duration-500 group-hover:scale-110' 
//   size={44} 
// />

           
//                 <p className='text-xl sm:text-2xl font-semibold text-white  transition-colors duration-500 text-center px-2'>{service.title}</p>
//                 <p className='text-sm text-center text-gray-400 group-hover:text-gray-200 transition-colors duration-500 px-2'>{service.description}</p>
//               </div>
//             )
//           })}
//         </div>
//     </div>
//    </section>
//   )
// }


import React from 'react'
import { Code, Palette, Share2, Globe, Smartphone, Layers, Server } from 'lucide-react'

export default function FeatureServices() {
  const services = [
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'Tailored software solutions built to meet your unique business requirements'
    },
    {
      icon: Palette,
      title: 'Graphic Designing',
      description: 'Creative and eye-catching designs that make your brand stand out'
    },
    {
      icon: Share2,
      title: 'Social Media Marketing',
      description: 'Strategic campaigns to boost your online presence and engagement'
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern, responsive websites that deliver exceptional user experiences'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android'
    },
    {
      icon: Layers,
      title: 'UI/UX Designing',
      description: 'Intuitive interfaces that prioritize user satisfaction and usability'
    },
    {
      icon: Server,
      title: 'Rental Software Solution',
      description: 'Comprehensive rental management systems to streamline your operations'
    }
  ]

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
        <p className='text-sm text-[#D5D5D5]'>SOLUTIONS</p>
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
              <div 
                key={index}
                className='group w-full border border-gray-800 bg-transparent rounded-lg p-6 md:p-7 flex gap-y-4 flex-col justify-center items-center hover:bg-[#FF006E] hover:shadow-2xl hover:shadow-[#FF006E]/30 hover:bg-gradient-to-br transition-all duration-500 min-h-[18rem] md:min-h-[20rem] cursor-pointer'
              >
                <Icon 
                  className='text-[#FF69B4] transition-transform duration-500 group-hover:scale-110' 
                  size={44} 
                />
                <p className='text-xl md:text-2xl font-semibold text-white transition-colors duration-500 text-center px-2'>{service.title}</p>
                <p className='text-sm text-center text-gray-400 group-hover:text-gray-200 transition-colors duration-500 px-2'>{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}