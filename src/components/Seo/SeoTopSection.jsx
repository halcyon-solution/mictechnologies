import React from 'react';
import { Smartphone, Zap, Code2, Rocket, Shield, Award, Users, Star } from 'lucide-react';
import SeoBanner from './SeoBanner';

const SeoTopSection = () => {
  return (
    <section className="relative overflow-hidden">
    


      <div className="relative z-10 max-w-[89rem] mx-auto">
        {/* Hero Section */}
        <div className="min-h-[90vh] flex flex-col justify-center px-6 lg:px-16">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left Content - Unique Layout */}
            <div className="flex-1 space-y-10">
         
     

              {/* Large Heading */}
              <div>
                <h1 className="text-5xl lg:text-5xl font-black text-white leading-[1.1] mb-6">
                  Professional SEO Services<br/>
                  <span className="">Dominate Search Rankings</span><br/>
                  with Proven SEO Strategies
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-[#FF006E] to-transparent"></div>
              </div>

              {/* Description */}
              <div className="relative pl-6 border-l-2 border-[#FF006E]/30">
                <p className="text-gray-300 text-lg leading-relaxed">
                  Leading SEO agency delivering data-driven search engine optimization services. We specialize in on-page SEO, off-page SEO, technical SEO, and local SEO strategies that increase organic traffic, improve search rankings, and boost online visibility for sustainable business growth.
                </p>
              </div>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 bg-gray-900 border border-gray-800 rounded-full px-5 py-3 hover:border-[#FF006E] transition-colors">
                  <Smartphone className="w-5 h-5 text-[#FF006E]" />
                  <span className="text-white text-sm font-medium">Google First Page Rankings</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-900 border border-gray-800 rounded-full px-5 py-3 hover:border-[#FF006E] transition-colors">
                  <Zap className="w-5 h-5 text-[#FF006E]" />
                  <span className="text-white text-sm font-medium">Technical SEO Optimization</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-900 border border-gray-800 rounded-full px-5 py-3 hover:border-[#FF006E] transition-colors">
                  <Shield className="w-5 h-5 text-[#FF006E]" />
                  <span className="text-white text-sm font-medium">White-Hat SEO Techniques</span>
                </div>
              </div>

              {/* CTA Section */}
              <div className="flex items-center gap-6">
                 <div className='mt-4 md:mt-6 flex justify-center lg:justify-start'>
            <button className="px-8 py-3 md:px-10 md:py-4 rounded-lg border-2 border-[#FFFFFF94] text-white font-medium bg-[#FF006E] cursor-pointer hover:shadow-xl hover:border-2 hover:border-[#FF006E] hover:bg-white text-lg md:text-xl hover:text-[#FF006E] transition-all duration-300">
              Seo Audit
            </button>
          </div>
              
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 rounded-full bg-[#FF006E] border-2 border-black flex items-center justify-center text-white text-xs font-bold">1</div>
                    <div className="w-10 h-10 rounded-full bg-[#FF006E]/80 border-2 border-black flex items-center justify-center text-white text-xs font-bold">2</div>
                    <div className="w-10 h-10 rounded-full bg-[#FF006E]/60 border-2 border-black flex items-center justify-center text-white text-xs font-bold">3</div>
                  </div>
                  <span className="text-gray-400 text-sm">500+ Businesses Ranked #1</span>
                </div>
              </div>
            </div>

            {/* Right Side - Unique Card Layout */}
            <div className="flex-1 relative">
              <div className="relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#FF006E]/20 rounded-full blur-3xl"></div>
                <div className="relative p-8">
                  <img 
                    src="https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&h=400&fit=crop&q=80"
                    alt="SEO Services and Search Engine Optimization Results"
                    className="w-full h-auto rounded-2xl shadow-2xl"
                    loading="lazy"
                  />
                </div>

                {/* Overlay Stats */}
                <div className="absolute -bottom-4 -left-4 bg-[#FF006E] text-white rounded-2xl p-5 px-12 shadow-2xl">
                  <div className="text-4xl font-black">300%</div>
                  <div className="text-sm opacity-90">Avg. Traffic Increase</div>
                </div>

                <div className="absolute top-8 -right-4 bg-white text-black rounded-2xl p-5 shadow-2xl">
                  <div className="text-4xl font-black text-[#FF006E]">2000+</div>
                  <div className="text-sm">Keywords Ranked</div>
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
                <div className="text-gray-400">Years of SEO Excellence</div>
              </div>
              <div className="flex-1 p-8 text-center hover:bg-[#FF006E]/5 transition-colors">
                <Users className="w-8 h-8 text-[#FF006E] mx-auto mb-3" />
                <div className="text-4xl font-black text-white mb-2">50+</div>
                <div className="text-gray-400">SEO Specialists</div>
              </div>
              <div className="flex-1 p-8 text-center hover:bg-[#FF006E]/5 transition-colors">
                <Smartphone className="w-8 h-8 text-[#FF006E] mx-auto mb-3" />
                <div className="text-4xl font-black text-white mb-2">60+</div>
                <div className="text-gray-400">Industries Optimized</div>
              </div>
              <div className="flex-1 p-8 text-center hover:bg-[#FF006E]/5 transition-colors">
                <Star className="w-8 h-8 text-[#FF006E] mx-auto mb-3" />
                <div className="text-4xl font-black text-white mb-2">4.9★</div>
                <div className="text-gray-400">Client Satisfaction Score</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeoTopSection;