import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutCore = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);

  const valuesData = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Safety First",
      description: "Secure and safe container handling at every step."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c1.657 0 3-1.343 3-3S13.657 2 12 2 9 3.343 9 5s1.343 3 3 3zm0 0v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Pursue Excellence",
      description: "Delivering top-quality service with efficiency and reliability."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      ),
      title: "Integrity",
      description: "Honesty and transparency in every transaction."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v8m-4-4h8" />
        </svg>
      ),
      title: "Improvement",
      description: "Enhancing efficiency, innovation, and best practices."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16h6M21 12c0 4.97-4.03 9-9 9S3 16.97 3 12 7.03 3 12 3s9 4.03 9 9z" />
        </svg>
      ),
      title: "Connect",
      description: "Fostering strong bonds through clear communication."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
        </svg>
      ),
      title: "Team Work",
      description: "Achieving success together with collaboration and trust."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 12h2a2 2 0 002-2V7a2 2 0 00-2-2h-2V2L8 7v3H6a2 2 0 00-2 2v3a2 2 0 002 2h2v5l8-5v-3z" />
        </svg>
      ),
      title: "Relationship",
      description: "Strengthening connections through trust and commitment."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v14a1 1 0 01-1 1H7l-4 4V4z" />
        </svg>
      ),
      title: "Information & Control",
      description: "Ensuring accuracy and efficiency with smart data management."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 10 }
    }
  };

  return (
    <section className="relative py-20 cursor-pointer md:py-28 px-6 md:px-12 lg:px-20 overflow-hidden">
    

      <motion.div ref={ref} initial="hidden" animate={controls} variants={containerVariants} className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12 ">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-poppins">
            Our{' '} Professional Values
         
          </h1>
        </div>

<motion.div variants={containerVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
  {valuesData.map((value, index) => (
    <motion.div
      key={index}
      variants={itemVariants}
      whileHover={{ y: -8 }}
      className="group border border-gray-800 bg-transparent rounded-2xl p-6 hover:bg-[#FF006E] hover:shadow-2xl hover:shadow-[#FF006E]/30 transition-all duration-500 flex flex-col items-center text-center cursor-pointer"
    >
      <div className="w-16 h-16 bg-[#FF006E] rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
        {value.icon}
      </div>
      <h2 className="text-lg font-bold text-white transition-colors duration-300 font-poppins">
        {value.title}
      </h2>
      <p className="text-gray-400 group-hover:text-gray-200 mt-2 text-sm transition-colors duration-300">{value.description}</p>
    
    </motion.div>
  ))}
</motion.div>
</motion.div>
    </section>
  );
};

export default AboutCore;
