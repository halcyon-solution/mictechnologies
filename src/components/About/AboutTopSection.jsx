import React from 'react'
import { Target, Lightbulb, Rocket, Zap } from 'lucide-react'
import AboutImage from '../../assets/About/Capture.JPG'
import MetricImage from '../../assets/About/metric.webp'
import cuttingedge from '../../assets/About/cuttingedge.webp'
import centric from '../../assets/About/centric.webp'
import support from '../../assets/About/support.webp'
import { Link } from 'react-router-dom'

const AboutTopSection = () => {
  const features = [
    { icon: <Target size={20} />, text: 'Strategic Planning' },
    { icon: <Lightbulb size={20} />, text: 'Innovation Driven' },
    { icon: <Rocket size={20} />, text: 'Growth Focused' },
    { icon: <Zap size={20} />, text: 'Fast Delivery' }
  ]

  const achievements = [
    { number: '30+', label: 'Years Experience', color: 'from-pink-500 to-pink-600' },
    { number: '500+', label: 'Clients Served', color: 'from-purple-500 to-purple-600' },
    { number: '98%', label: 'Success Rate', color: 'from-pink-500 to-purple-500' },
    { number: '1000+', label: 'Projects Completed', color: 'from-purple-500 to-pink-500' }
  ]

  return (
    <section className=" text-white font-poppins overflow-hidden" aria-label="About MAKTECH">
      {/* Hero Section */}
      <div className="relative">
        
        <div className="relative mx-auto sm:w-[98%] xl:w-[82%] 2xl:w-[79%] grid md:grid-cols-2 gap-12 lg:gap-16 px-6 sm:px-7 md:px-7 lg:px-20 py-20 md:py-28">
          {/* Left: Text Section */}
          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center md:items-start gap-8 max-w-2xl text-center md:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 transition-all duration-300">
                <span className="text-xs sm:text-sm font-medium text-white tracking-wide uppercase">
                  About Us
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
                Welcome to MIC TECH
              </h1>
              
              <div className="space-y-4">
                <p className="text-gray-300 text-justify text-base leading-relaxed">
                  At MIC TECH, we transform ideas into digital excellence. As a trusted leader in web development, mobile applications, and creative design, we help brands establish powerful online presence 
                  and deliver exceptional user experiences. With over 30 years of combined expertise in 
                  custom software development, UI/UX design, and digital marketing, 
                  our team empowers businesses to innovate, scale, and turn every interaction into lasting success.
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-3 mt-6">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 bg-gray-800/30 backdrop-blur-sm px-3 py-2 rounded-lg border border-gray-700/50 hover:border-pink-500/50 transition-all duration-300 hover:scale-105">
                      <span className="text-[#FF006E]">{feature.icon}</span>
                      <span className="text-sm text-gray-300">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="w-[70%] mt-2">

                <Link to='/contact'>
                <button className="px-8 py-4 cursor-pointer hover:bg-white hover:text-[#FF006E] bg-[#FF006E] rounded-xl font-semibold text-sm hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300 hover:scale-105">
                  Get Started
                </button>
              </Link>

              </div>
            </div>
          </div>

          {/* Right: Hero Image */}
          <div className="flex items-center justify-center relative">
            <div className="relative group">
              <img
                src={AboutImage}
                alt="MAKTECH team collaboration and digital workspace"
                className="relative w-full max-w-md sm:max-w-lg md:max-w-xl h-auto object-contain rounded-3xl shadow-2xl border border-gray-800 transition-all duration-500 group-hover:scale-105"
                loading="lazy"
              />
            
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Stats Section */}
      <div className="relative px-6 sm:px-10 md:px-12 lg:px-20 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="group relative bg-transparent border border-gray-800 p-6 rounded-2xl hover:bg-[#FF006E] hover:shadow-2xl hover:shadow-[#FF006E]/30 transition-all duration-500 hover:-translate-y-2 text-center cursor-pointer"
              >
                <div className={`text-3xl sm:text-4xl text-white font-bold  bg-clip-text text-transparent group-hover:text-white mb-2 transition-all duration-500`}>
                  {achievement.number}
                </div>
                <div className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-200 transition-colors duration-500">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

         {/* Why Choose Us Section */}
      <div className="relative px-6 sm:px-10 md:px-12 lg:px-20 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Choose MIC TECH?
            </h2>
            <div className="h-1 w-20 bg-[#FF006E] rounded-full mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="group border border-gray-800 bg-transparent rounded-lg p-6 flex gap-y-4 flex-col justify-center items-center hover:bg-[#FF006E] hover:shadow-2xl hover:shadow-[#FF006E]/30 transition-all duration-500 min-h-[18rem] md:min-h-[20rem] cursor-pointer">
              <div className="w-16 h-16">
                <img className='w-full h-full object-contain transition-transform duration-500 group-hover:scale-110' src={centric} alt=''/>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-white transition-colors duration-500 text-center px-2">Client-Centric Approach</h3>
              <p className="text-sm text-center text-gray-400 group-hover:text-gray-200 transition-colors duration-500 px-2">Your success is our mission. We tailor every solution to meet your unique business needs.</p>
            </div>

            <div className="group border border-gray-800 bg-transparent rounded-lg p-6 flex gap-y-4 flex-col justify-center items-center hover:bg-[#FF006E] hover:shadow-2xl hover:shadow-[#FF006E]/30 transition-all duration-500 min-h-[18rem] md:min-h-[20rem] cursor-pointer">
              <div className="w-16 h-16">
                <img className='w-full h-full object-contain transition-transform duration-500 group-hover:scale-110' src={cuttingedge} alt=''/>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-white transition-colors duration-500 text-center px-2">Cutting-Edge Technology</h3>
              <p className="text-sm text-center text-gray-400 group-hover:text-gray-200 transition-colors duration-500 px-2">We leverage the latest tools and frameworks to build future-ready solutions.</p>
            </div>

            <div className="group border border-gray-800 bg-transparent rounded-lg p-6 flex gap-y-4 flex-col justify-center items-center hover:bg-[#FF006E] hover:shadow-2xl hover:shadow-[#FF006E]/30 transition-all duration-500 min-h-[18rem] md:min-h-[20rem] cursor-pointer">
              <div className="w-16 h-16">
                <img className='w-full h-full object-contain transition-transform duration-500 group-hover:scale-110' src={support} alt=''/>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-white transition-colors duration-500 text-center px-2">Dedicated Support</h3>
              <p className="text-sm text-center text-gray-400 group-hover:text-gray-200 transition-colors duration-500 px-2">From concept to launch and beyond, we're with you every step of the journey.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutTopSection