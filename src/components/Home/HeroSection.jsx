// import React from "react";

// export default function HeroSection() {
//   return (
//     <section className="w-full  flex justify-center items-center   h-[80vh]">
      
//       <div className="w-[64%]   h-full ">
       
//         <div className="w-[60%]  flex gap-y-3 flex-col justify-end h-[60%] ">
//           <div className="w-[85%] text-white  flex flex-col gap-y-5">
//             <p className="text-xl">Transform Your Vision Into Reality</p>
//             <h2 className="text-6xl leading-tight font-semibold">
//               Innovative Software Solutions That Drive Results
//             </h2>

//             <div className="rounded-lg  w-72 h-14">
//               <button className="w-full rounded-lg border-2 border-[#FFFFFF94] text-white font-medium  bg-[#FF006E]  cursor-pointer hover:shadow-xl hover:border-2 hover:border-[#FF006E] hover:bg-white text-xl hover:text-[#FF006E]  transition-all duration-300 h-full">
//                 Get Started Today
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className=" w-[100%] flex items-center justify-end h-52">

//           <div className="bg-[linear-gradient(90deg,#05010F_28%,#FF006E_100%)] p-10 w-[98%] flex items-center justify-end h-40 ">
//               <h1 className="text-white text-6xl font-medium">
//                 Design. Develop. Deliver.
//               </h1>
//             </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import React from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="w-full flex justify-center items-center min-h-svh px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 2xl:px-0 py-6 sm:py-8 md:py-6 lg:py-8 xl:py-0">
      <div className="w-full max-w-7xl mx-auto h-full flex flex-col justify-center gap-y-6 sm:gap-y-8 md:gap-y-6 lg:gap-y-8 xl:gap-y-16">
        
        {/* Main Content */}
        <div className="w-full flex flex-col gap-y-4 sm:gap-y-6 md:gap-y-4 lg:gap-y-6">
          <div className="w-full lg:w-[90%] xl:w-[85%] 2xl:w-[75%] text-white flex flex-col gap-y-3 sm:gap-y-4 md:gap-y-3 lg:gap-y-5 xl:gap-y-8">
            {/* Tagline */}
            <p className="text-sm sm:text-base md:text-base lg:text-lg xl:text-xl text-[#FF006E] font-medium">
              Transform Your Vision Into Reality
            </p>
            
            {/* Main Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-6xl 2xl:text-7xl leading-tight font-semibold">
              Innovative Software Solutions That Drive Results
            </h1>

            {/* CTA Button */}
            <div className="mt-1 sm:mt-2 md:mt-2 lg:mt-3 xl:mt-4">
              <Link to='/contact' className="inline-block w-full sm:w-auto">
                <button className="w-full sm:w-64 md:w-60 lg:w-72 xl:w-80 h-11 sm:h-12 md:h-12 lg:h-14 xl:h-16 rounded-lg border-2 border-[#FFFFFF94] text-white font-medium bg-[#FF006E] cursor-pointer hover:shadow-xl hover:border-[#FF006E] hover:bg-white text-sm sm:text-base md:text-base lg:text-lg xl:text-xl hover:text-[#FF006E] transition-all duration-300">
                  Schedule a Call
                </button>  
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="w-full flex items-center justify-center lg:justify-end">
          <div className="bg-[linear-gradient(90deg,#05010F_28%,#FF006E_100%)] p-4 sm:p-6 md:p-5 lg:p-8 xl:p-12 w-full lg:w-[98%] flex items-center justify-center lg:justify-end rounded-lg lg:rounded-none min-h-[100px] sm:min-h-[110px] md:min-h-[100px] lg:min-h-32 xl:min-h-40">
            <h2 className="text-white text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-5xl 2xl:text-6xl font-medium text-center lg:text-right leading-tight">
              Design. Develop. Deliver.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
