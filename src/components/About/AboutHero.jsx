import React from 'react'
import HeroImage from '../../assets/About/4 ONE.png'

const AboutHero = () => {
  return (
    <section
      className="relative bg-gradient-to-br cursor-pointer  text-white font-poppins overflow-hidden py-20 md:py-28"
      aria-label="Who We Are"
    >
      {/* Decorative orbs (optional) */}


      {/* Main grid with explicit min-height so py is visible */}
      <div className="relative grid md:grid-cols-2 gap-8 lg:gap-12 px-6 sm:px-10 md:px-12 lg:px-20 items-center
                      min-h-[70vh] md:min-h-[60vh]">
        {/* Left: Image (fills height) */}
        <div className="flex justify-center items-center  h-full w-full">
          <div className="relative w-full max-w-2xl h-[88%] rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={HeroImage}
              alt="MAKTECH team discussing digital strategy"
              className="w-full h-full object-contain md:object-cover object-center transition-transform duration-500 hover:scale-105"
              loading="lazy"
            />
            {/* soft gradient overlay for better contrast */}
           
          </div>
        </div>

        {/* Right: Text (centered vertically) */}
        <div className="flex flex-col gap-6 text-center md:text-left justify-center h-full">
          {/* Badge */}
      

          {/* Heading */}
          <h1 className="text-3xl sm:text-3xl lg:text-4xl font-bold leading-tight">
            We’re Driven by{' '} Data & Innovation
         
          </h1>

          {/* Paragraph */}
          <p className="text-gray-300 text-base text-justify sm:text-base leading-relaxed max-w-prose">
            Founded in UK and serving clients worldwide, Mic Tech
            is a team of passionate strategists, data scientists, and advertising experts.
            Our journey began with a simple belief:{' '}
            <span className="text-white font-semibold">data-driven decisions are the cornerstone of success</span>.
          </p>

          {/* Accent line */}
          <div className="h-1 w-28 bg-[#FF006E] rounded-full mx-auto md:mx-0 mt-2" />
        </div>
      </div>

      {/* gradient animation */}
      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  )
}

export default AboutHero
