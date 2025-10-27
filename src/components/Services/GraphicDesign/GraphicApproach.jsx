import React from 'react';
import { Award, Palette, Sparkles, Target, TrendingUp } from 'lucide-react';

export default function GraphicApproach() {
  const achievements = [
    {
      icon: <Award className="w-12 h-12 sm:w-16 sm:h-16" />,
      text: "Award-winning designs recognized by industry leaders for creativity and innovation."
    },
    {
      icon: <Palette className="w-12 h-12 sm:w-16 sm:h-16" />,
      text: "Expert team delivering stunning visuals that capture your brand's unique identity."
    },
    {
      icon: <Sparkles className="w-12 h-12 sm:w-16 sm:h-16" />,
      text: "Creative excellence combined with strategic thinking for maximum impact."
    },
    {
      icon: <Target className="w-12 h-12 sm:w-16 sm:h-16" />,
      text: "Results-driven approach ensuring your designs convert and engage audiences."
    },
    {
      icon: <TrendingUp className="w-12 h-12 sm:w-16 sm:h-16" />,
      text: "Cutting-edge design trends implemented to keep your brand ahead of competition."
    }
  ];

  const keyAreas = [
    {
      title: "Award-Winning Creativity",
      description: "MIC Tech has earned recognition for exceptional graphic design work, establishing us as a trusted partner for businesses seeking visual excellence."
    },
    {
      title: "Brand Identity Mastery",
      description: "We create compelling visual identities that resonate with your target audience and strengthen your market presence."
    },
    {
      title: "Strategic Design Thinking",
      description: "Our designs aren't just beautiful—they're strategically crafted to achieve your business objectives and drive measurable results."
    },
    {
      title: "Versatile Design Solutions",
      description: "From logos and branding to marketing materials and digital assets, we deliver comprehensive design solutions across all platforms."
    }
  ];

  return (
    <section className='w-full  text-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-16'>
      <div className='max-w-8xl  mx-auto'>
        {/* Main Content Grid */}
        <div className='grid w-full grid-cols-1  xl:gap-1  lg:grid-cols-2 gap-8 lg:gap-12'>
          
          {/* Left Column - Text Content */}
          <div className='flex w-[98%]  flex-col gap-6 sm:gap-8'>
            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight'>
              Achieving Creativity and Excellence: Our{' '} Graphic Design Approach
            </h2>

            <p className='text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed'>
              In a highly competitive digital landscape, MIC Tech stands out as a paragon of creativity and excellence. We are a Pakistan-based, award-winning graphic design company with a strong commitment to delivering visually stunning results. Our unique value proposition lies in our approach to graphic design, which is rooted in the following key areas:
            </p>

            <ul className='flex flex-col xl:pl-8 gap-4 sm:gap-5'>
              {keyAreas.map((area, index) => (
                <li key={index} className='flex gap-3'>
                  <div className='flex-shrink-0 w-2 h-2 bg-[#FF006E] rounded-full mt-2'></div>
                  <div>
                    <p className='text-base sm:text-lg lg:text-xl'>
                      <span className='font-bold text-[#FF006E]'>{area.title}</span>: {area.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <p className='text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed'>
              By choosing MIC Tech as your graphic design partner, you're choosing a company committed to providing exceptional visual solutions that directly contribute to your business success and brand growth.
            </p>
          </div>

          {/* Right Column - Achievements */}
          <div className='flex  w-[80%] flex-col  gap-5 sm:gap-6 lg:gap-7 items-end justify-center'>
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className='flex xl:gap-x-16  items-center gap-4 sm:gap-6 lg:gap-8 p-4 sm:p-5  rounded-xl  transition-all duration-300 group'
              >
                <div className='flex-shrink-0 text-[#FF006E] group-hover:scale-110 transition-transform duration-300'>
                  {achievement.icon}
                </div>
                <p className='text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed'>
                  {achievement.text}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom CTA Section */}
        {/* <div className='mt-12 sm:mt-16 text-center'>
          <div className='inline-block p-6 sm:p-8 bg-gradient-to-r from-[#FF006E]/10 to-pink-600/10 rounded-2xl border border-[#FF006E]/30'>
            <h3 className='text-xl sm:text-2xl font-bold mb-3 text-[#FF006E]'>
              Ready to Elevate Your Brand?
            </h3>
            <p className='text-base sm:text-lg text-gray-300 mb-5'>
              Let's create stunning designs that make your business stand out
            </p>
            <button className='px-6 sm:px-8 py-3 bg-gradient-to-r from-[#FF006E] to-pink-600 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-[#FF006E] transition-all transform hover:scale-105'>
              Get Started Today
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
}