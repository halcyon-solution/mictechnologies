import React from "react";
import { motion } from "framer-motion";
import Values from "../../assets/About/values.webp";

const AboutWho = () => {
  return (
    <section className="relative cursor-pointer flex justify-center overflow-hidden py-20 md:py-28 px-6 md:px-12 lg:px-20">
      <div className="relative grid w-full sm:w-[80%] md:grid-cols-2 gap-10 place-content-center items-center z-10">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white font-poppins">
            Who We Are
          </h1>
          <p className="text-gray-300 text-justify leading-relaxed font-poppins text-sm md:text-base">
            Mic Tech is an innovative software development company committed to turning ideas into powerful digital solutions. 
            We specialize in delivering <span className="font-semibold">custom IT services</span> that enhance business performance, 
            automate workflows, and accelerate <span className="font-semibold">digital transformation</span>. 
            Our goal is to help organizations across industries boost efficiency, reduce costs, and achieve long-term growth through technology.
          </p>
          <p className="text-gray-300 text-justify leading-relaxed font-poppins text-sm md:text-base">
            Our expert team blends creativity with deep technical expertise, crafting 
            tailored solutions in software development, digital transformation, and 
            IT consulting. From logistics and finance to e-commerce, we solve complex 
            challenges with precision and innovation.
          </p>
          <p className="text-gray-300 text-justify leading-relaxed font-poppins text-sm md:text-base">
            Committed to excellence, Mic Tech delivers scalable, high-performance 
            solutions that help businesses thrive in a dynamic digital world.
          </p>
          <div className="h-1 w-32 bg-[#FF006E] rounded-full mt-4"></div>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full h-full flex justify-center items-center"
        >
          <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-700/50 hover:border-pink-500/30 transition-all duration-300 hover:shadow-pink-500/10 w-full sm:w-[85%] md:w-[90%] lg:w-[80%] xl:w-[70%]">
            <img
              src={Values}
              alt="Halcyon Values"
              className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
            />
          </div>
        </motion.div>
      </div>

      {/* Gradient text animation */}
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
  );
};

export default AboutWho;