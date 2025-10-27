import React from 'react';

const MobileHeroSection = () => {
  return (
    <div className="bg-black flex justify-center py-6 px-4">
      <div className="bg-[#FF006E] rounded-2xl w-full md:w-[95%] max-w-7xl mx-auto">
        <div className="flex items-center justify-start md:justify-between px-6 sm:px-10 md:px-16 h-16">
          <h1 className="text-white text-base sm:text-lg md:text-xl font-normal tracking-wide">
            Services <span className="text-white/80">&gt;</span> Mobile App Development
          </h1>
        </div>
      </div>
    </div>
  );
};

export default MobileHeroSection;
