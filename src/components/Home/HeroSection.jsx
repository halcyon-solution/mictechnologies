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
    <section className="w-full  flex justify-center items-start sm:items-center min-h-fit px-3 lg:px-0 py-12 md:py-0 md:h-[75vh] xl:h-[80vh]">
      <div className="w-full  max-w-[81rem] h-full">
        
        {/* Main Content */}
        <div className="w-full md:p-3 lg:p-0  md:w-[70%] flex gap-y-4 md:gap-y-3 flex-col xl:w-[88%] 2xl:w-[60%] justify-end md:items-start lg:items-center xl:items-end 2xl:items-start h-full md:h-[60%] pt-8 md:pt-0">
          <div className="w-full md:w-[85%] text-white flex flex-col gap-y-4 md:gap-y-5">
            <p className="text-base md:text-xl">Transform Your Vision Into Reality</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-semibold">
              Innovative Software Solutions That Drive Results
            </h2>

            <div className="rounded-lg w-full sm:w-72 h-14 mt-2">
              <Link to='/contact'>
              <button className="w-full rounded-lg border-2 border-[#FFFFFF94] text-white font-medium bg-[#FF006E] cursor-pointer hover:shadow-xl hover:border-2 hover:border-[#FF006E] hover:bg-white text-lg md:text-xl hover:text-[#FF006E] transition-all duration-300 h-full">
            Get Started Today
              </button>  
              </Link>
                
            
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="w-full flex items-center justify-center md:justify-end mt-8 md:mt-0 h-auto md:h-52">
          <div className="bg-[linear-gradient(90deg,#05010F_28%,#FF006E_100%)] p-6 md:p-10 w-full md:w-[98%] flex items-center justify-center md:justify-end rounded-lg md:rounded-none h-auto md:h-40">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-center md:text-right">
              Design. Develop. Deliver.
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
