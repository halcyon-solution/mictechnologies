import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const services = [
    {
      title: 'Custom Software Development',
      category: 'IT Technology',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
      description: 'Tailored solutions for your unique business needs',
      route: '/services/custom-software'
    },
    {
      title: 'Graphic Designing',
      category: 'Creative Services',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
      description: 'Visual excellence that captures your brand essence',
      route: '/services/graphic-design'
    },
    {
      title: 'Social Media Marketing',
      category: 'Digital Marketing',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
      description: 'Amplify your presence across all platforms',
      route: '/services/social-media'
    },
    {
      title: 'Web Development',
      category: 'IT Technology',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
      description: 'Modern, responsive websites built for success',
      route: '/services/web-development'
    },
    {
      title: 'Mobile App Development',
      category: 'IT Technology',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
      description: 'Native and cross-platform mobile solutions',
      route: '/services/mobile-development'
    },
    {
      title: 'UI/UX Designing',
      category: 'Creative Services',
      image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=600&fit=crop',
      description: 'User-centered design that delights and converts',
      route: '/services/uiux-design'
    },
    {
      title: 'SEO',
      category: 'Digital Marketing',
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&h=600&fit=crop',
      description: 'Search engine optimization to boost your online visibility',
      route: '/services/seo'
    },
  ];

  const maxIndex = services.length - 1;

  const handlePrev = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => Math.min(isMobile ? maxIndex : maxIndex - 2, prev + 1));
  };

  return (
    <div className="min-h-screen 2xl:min-h-[60vh] bg-[#05010F] py-12 md:py-20 px-4 md:px-6 2xl:px-14">
      <div className="w-full max-w-8xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start mb-12 md:mb-16">
          
          {/* Left Content */}
          <div className="w-full lg:w-[35%] space-y-6 md:space-y-8">
            <p className="text-[#FF006E] text-xs md:text-sm font-bold tracking-widest uppercase">
              CASE STUDY
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1]">
              How MIC Tech assist your business
            </h1>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              Bring to the table win-win survival strategies to ensure proactive domination. 
              At the end of the day, going forward, a new normal that has evolved from generation X 
              is ready to disrupt the digital landscape.
            </p>
            
            {/* Navigation Buttons */}
            <div className="flex gap-4 pt-6">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-[#FF006E] bg-transparent text-[#FF006E] 
                         flex items-center justify-center hover:bg-white hover:text-[#FF006E] 
                         transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed 
                         disabled:hover:bg-transparent disabled:hover:text-[#FF006E]"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={handleNext}
                disabled={currentIndex >= (isMobile ? maxIndex : maxIndex - 2)}
                className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-[#FF006E] bg-transparent text-[#FF006E] 
                         flex items-center justify-center hover:bg-white hover:text-[#FF006E] 
                         transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed 
                         disabled:hover:bg-transparent disabled:hover:text-[#FF006E]"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Right Content - Service Cards Carousel */}
          <div className="w-full lg:w-[62%] relative">
            <div className="overflow-hidden">
              <div 
                className="flex gap-4 transition-transform duration-700 ease-in-out"
                style={{ 
                  transform: `translateX(-${currentIndex * 296}px)`
                }}
              >
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-[280px]"
                  >
                    <Link to={service.route}>
                      <div className="group relative overflow-hidden rounded-xl bg-gray-900 h-[420px] cursor-pointer shadow-2xl">
                        {/* Background Image */}
                        <div 
                          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                          style={{ backgroundImage: `url(${service.image})` }}
                        />
                        
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#05010F] via-[#05010F]/70 to-transparent opacity-90" />
                        
                        {/* Content */}
                        <div className="absolute bottom-0 left-0 right-0 p-7 space-y-3">
                          <p className="text-white text-xs font-bold tracking-widest uppercase">
                            {service.category}
                          </p>
                          <h3 className="text-white text-2xl font-bold leading-tight pr-4">
                            {service.title}
                          </h3>
                          <p className="text-gray-300 text-sm leading-relaxed opacity-0 transform translate-y-4 
                                      transition-all duration-500 group-hover:opacity-100 
                                      group-hover:translate-y-0 pr-4">
                            {service.description}
                          </p>
                        </div>

                        {/* Hover Border Effect */}
                        <div className="absolute inset-0 border-2 border-[#FF006E] opacity-0 
                                      group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>  
  );
};

export default CaseStudySection;