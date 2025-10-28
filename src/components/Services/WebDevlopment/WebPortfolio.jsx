import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

import amavi from '../../../assets/Services/WebPortfolio/Amavi Wellbeing.png'
import car from '../../../assets/Services/WebPortfolio/cars wapia.png'
import coconut from '../../../assets/Services/WebPortfolio/-coconuts and kettlebells.png'
import heroica from '../../../assets/Services/WebPortfolio/heroica floral.png'
import lacache from '../../../assets/Services/WebPortfolio/LA cachette head spa.png'
import lune from '../../../assets/Services/WebPortfolio/Lune Tea.png'

import altplumb from '../../../assets/Services/WebPortfolio/ath plumbing inc.png'
import mousegrove from '../../../assets/Services/WebPortfolio/dr musgrove books.png'
import elifdef from '../../../assets/Services/WebPortfolio/ellis defense.png'
import hilltop from '../../../assets/Services/WebPortfolio/-hilltop-outdoors.png'


const WebPortfolio = () => {
      const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Amavi Wellbeing',
      image: amavi,
    },
    {
      id: 2,
      title: 'Car Swapia',
      image: car,
    },
    {
      id: 3,
      title: 'Coconuts & Kettlebells',
      image: coconut,
    },
    {
      id: 4,
      title: 'Heroica Florist',
      image: heroica,
    },
    {
      id: 5,
      title: 'La Cachette Head Spa',
      image: lacache,
    },
    {
      id: 6,
      title: 'Lune Tea',
      image: lune,
    },
    {
      id: 7 ,
      title: 'A.T.H. Plumbing',
      image:altplumb
    },
    {
      id : 8,
      title: 'Musegrove Book',
      image:mousegrove
    },
    {
      id: 9,
      title: 'Ellis Defense',
      image:elifdef
    },
    {
      id: 10,
      title: 'Hilltop Outdoors',
      image:hilltop
    }
  ];

 
  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const maxIndex = projects.length - 3;
      return prev >= maxIndex ? 0 : prev + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const maxIndex = projects.length - 3;
      return prev <= 0 ? maxIndex : prev - 1;
    });
  };

  const visibleProjects = window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3;

  return (
    <section className="relative bg-transparent py-16 sm:py-20 lg:py-24 px-4 overflow-visible">
      <div className="max-w-[1500px] mx-auto">
        {/* Header with Minimalist Design */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 sm:mb-20 lg:mb-24 gap-8">
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-[#FF006E] text-xs pl-4 sm:text-sm font-semibold tracking-[0.2em] uppercase">Portfolio</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-white tracking-tight leading-[1.1]">
              Our Completed
              <br />
              <span className="font-bold text-[#FF006E]">Projects</span>
            </h2>
          </div>
          
          {/* Elegant Navigation */}
          <div className="flex items-center gap-4">
            <div className="text-white/60 text-sm font-light hidden sm:block">
              {String(currentIndex + 1).padStart(2, '0')} / {String(projects.length - visibleProjects + 1).padStart(2, '0')}
            </div>
            <div className="flex gap-2">
              <button
                onClick={prevSlide}
                className="group w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:border-white hover:bg-white/10 transition-all duration-500 backdrop-blur-sm"
                aria-label="Previous projects"
              >
                <ChevronLeft size={22} className="group-hover:-translate-x-0.5 transition-transform duration-300" strokeWidth={1.5} />
              </button>
              <button
                onClick={nextSlide}
                className="group w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:border-white hover:bg-white/10 transition-all duration-500 backdrop-blur-sm"
                aria-label="Next projects"
              >
                <ChevronRight size={22} className="group-hover:translate-x-0.5 transition-transform duration-300" strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>

        {/* Premium Projects Grid */}
        <div className="relative -mb-40 sm:-mb-48 lg:-mb-56 pb-40 sm:pb-48 lg:pb-56">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-[800ms] ease-[cubic-bezier(0.4,0,0.2,1)] gap-5 sm:gap-6 lg:gap-8"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / visibleProjects + (visibleProjects === 1 ? 5 : visibleProjects === 2 ? 3 : 2.5))}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="min-w-[calc(100%-20px)] sm:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-21px)] flex-shrink-0"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="group relative bg-[#05010F] rounded-2xl overflow-hidden border border-[#FF006E]/20 hover:border-[#FF006E]/60 transition-all duration-700 hover:shadow-[0_20px_80px_rgba(255,0,110,0.3)] h-full">
                    {/* Image Container with Gradient Overlay */}
                    <div className="relative h-64 sm:h-72 lg:h-80 xl:h-96 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 z-10"></div>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                      />
                      
                      {/* Floating Category Tag */}
                      <div className="absolute top-5 left-5 z-20">
                        <span className="px-4 py-1.5 bg-white/95 backdrop-blur-sm text-gray-900 text-xs font-semibold rounded-full shadow-lg">
                          {project.category}
                        </span>
                      </div>

                      {/* Premium Hover Overlay */}
                      <div className={`absolute inset-0 bg-[#FF006E]/50 z-20 flex items-center justify-center transition-all duration-700 ${hoveredCard === index ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                        
                      </div>
                    </div>

                    {/* Content Area - Glass Morphism */}
                    <div className="relative bg-[#05010F] backdrop-blur-xl p-6 sm:p-7 lg:p-8 min-h-[140px] sm:min-h-[160px] border-t border-[#FF006E]/20">
                      <div className="space-y-2">
                        <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-semibold leading-tight group-hover:text-[#FF006E] transition-all duration-500">
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-2 text-white/50 text-sm">
                          <div className="w-8 h-[1px] bg-white/30 group-hover:w-12 group-hover:bg-[#FF006E] transition-all duration-500"></div>
                          <span className="font-light">2024</span>
                        </div>
                      </div>

                      {/* Decorative Element */}
                      <div className="absolute -bottom-px left-0 right-0 h-1 bg-[#FF006E] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Minimalist Progress Indicator */}
        <div className="flex justify-center items-center gap-2 mt-8 sm:mt-10">
          {Array.from({ length: Math.max(1, projects.length - visibleProjects + 1) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className="relative group"
              aria-label={`Go to slide ${index + 1}`}
            >
              <div className={`h-[2px] rounded-full transition-all duration-500 ${
                currentIndex === index 
                  ? 'w-12 sm:w-16 bg-[#FF006E]' 
                  : 'w-8 sm:w-10 bg-white/20 group-hover:bg-white/40'
              }`}></div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebPortfolio;