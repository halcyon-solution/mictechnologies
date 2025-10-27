import React from 'react';
import { Smartphone, Zap, Code2, Rocket, Shield, Award, Users, Star } from 'lucide-react';
import Ui from '../../assets/Ux/Ui.webp'

const UiDevelopment = () => {
  return (
    <section className=" relative overflow-hidden">
    


      <div className="relative z-10 max-w-[89rem] mx-auto">
        {/* Hero Section */}
        <div className="min-h-[90vh] flex flex-col justify-center px-6 lg:px-16">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left Content - Unique Layout */}
            <div className="flex-1 space-y-10">
         
                <span className="text-white font-semibold">UI/UX Design Services</span>
     

              {/* Large Heading */}
              <div>
                <h1 className="text-5xl lg:text-5xl font-black text-white leading-[1.1] mb-6">
                  Elevate<br/>
                  <span className="">Your Brand Experience</span><br/>
                  with Intuitive Design
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-[#FF006E] to-transparent"></div>
              </div>

              {/* Description */}
              <div className="relative pl-6 border-l-2 border-[#FF006E]/30">
                <p className="text-gray-300 text-lg leading-relaxed">
                  We craft engaging user interfaces and seamless user experiences that captivate audiences. Our UI/UX design approach blends creativity, strategy, and usability to transform ideas into visually stunning digital products.
                </p>
              </div>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 bg-gray-900 border border-gray-800 rounded-full px-5 py-3 hover:border-[#FF006E] transition-colors">
                  <Smartphone className="w-5 h-5 text-[#FF006E]" />
                  <span className="text-white text-sm font-medium">User-Centered Design</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-900 border border-gray-800 rounded-full px-5 py-3 hover:border-[#FF006E] transition-colors">
                  <Zap className="w-5 h-5 text-[#FF006E]" />
                  <span className="text-white text-sm font-medium">Creative Prototyping</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-900 border border-gray-800 rounded-full px-5 py-3 hover:border-[#FF006E] transition-colors">
                  <Shield className="w-5 h-5 text-[#FF006E]" />
                  <span className="text-white text-sm font-medium">Consistent Brand Identity</span>
                </div>
              </div>

              {/* CTA Section */}
              <div className="flex items-center gap-6">
                <button className="group relative bg-[#FF006E] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#ff338c] transition-all overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">
                    Let’s Design
                    <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform"></div>
                </button>
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 rounded-full bg-[#FF006E] border-2 border-black flex items-center justify-center text-white text-xs font-bold">1</div>
                    <div className="w-10 h-10 rounded-full bg-[#FF006E]/80 border-2 border-black flex items-center justify-center text-white text-xs font-bold">2</div>
                    <div className="w-10 h-10 rounded-full bg-[#FF006E]/60 border-2 border-black flex items-center justify-center text-white text-xs font-bold">3</div>
                  </div>
                  <span className="text-gray-400 text-sm">500+ Satisfied Clients</span>
                </div>
              </div>
            </div>

            {/* Right Side - Unique Card Layout */}
            <div className="flex-1 relative">
              <div className="relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#FF006E]/20 rounded-full blur-3xl"></div>
                <div className="relative p-8">
                  <img 
                    src={Ui}
                    alt="UI/UX Design Showcase"
                    className="w-full h-auto rounded-2xl shadow-2xl"
                    loading="lazy"
                  />
                </div>

                {/* Overlay Stats */}
                <div className="absolute -bottom-4 -left-4 bg-[#FF006E] text-white rounded-2xl p-5 px-12 shadow-2xl">
                  <div className="text-4xl font-black">98%</div>
                  <div className="text-sm opacity-90">Client Satisfaction</div>
                </div>

                <div className="absolute top-8 -right-4 bg-white text-black rounded-2xl p-5 shadow-2xl">
                  <div className="text-4xl font-black text-[#FF006E]">700+</div>
                  <div className="text-sm">Projects Designed</div>
                </div>
              </div>

              {/* Floating Icon */}
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-gradient-to-br from-[#FF006E] to-[#ff338c] rounded-2xl flex items-center justify-center shadow-xl shadow-[#FF006E]/50 rotate-12 hover:rotate-0 transition-transform">
                <Code2 className="w-10 h-10 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Section */}
        <div className="pb-24 pt-5 px-6 lg:px-16">
          <div className="bg-gradient-to-r from-gray-900 to-black border border-gray-800 rounded-3xl overflow-hidden">
            <div className="flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-gray-800">
              <div className="flex-1 p-8 text-center hover:bg-[#FF006E]/5 transition-colors">
                <Award className="w-8 h-8 text-[#FF006E] mx-auto mb-3" />
                <div className="text-4xl font-black text-white mb-2">10+</div>
                <div className="text-gray-400">Years of Creativity</div>
              </div>
              <div className="flex-1 p-8 text-center hover:bg-[#FF006E]/5 transition-colors">
                <Users className="w-8 h-8 text-[#FF006E] mx-auto mb-3" />
                <div className="text-4xl font-black text-white mb-2">150+</div>
                <div className="text-gray-400">Design Experts</div>
              </div>
              <div className="flex-1 p-8 text-center hover:bg-[#FF006E]/5 transition-colors">
                <Smartphone className="w-8 h-8 text-[#FF006E] mx-auto mb-3" />
                <div className="text-4xl font-black text-white mb-2">60+</div>
                <div className="text-gray-400">Industries Served</div>
              </div>
              <div className="flex-1 p-8 text-center hover:bg-[#FF006E]/5 transition-colors">
                <Star className="w-8 h-8 text-[#FF006E] mx-auto mb-3" />
                <div className="text-4xl font-black text-white mb-2">4.9★</div>
                <div className="text-gray-400">Average Client Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UiDevelopment;
