import React, { useState } from 'react'

export default function PersonalizedSolution() {
  const [activeTab, setActiveTab] = useState('custom')

  const services = {
    custom: {
      title: 'Transform Your Business with Custom Software Development',
      description1: 'We specialize in building bespoke software solutions tailored to your unique business requirements. Our custom software development services transform complex challenges into streamlined, efficient digital solutions that drive growth and innovation.',
      description2: 'As your trusted custom software development partner, we deliver enterprise-grade applications designed to scale with your business. From initial concept to deployment, our experienced team ensures every line of code aligns perfectly with your strategic objectives.',
      description3: 'Our agile development methodology guarantees transparent communication, rapid iterations, and solutions that exceed expectations. Whether you need ERP systems, CRM platforms, or specialized business tools, we build software that gives you a competitive edge.',
      tags: ['Planning', 'Architecture', 'Development', 'Testing', 'Deployment'],
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80'
    },
    mobile: {
      title: 'Native & Cross-Platform Mobile App Development',
      description1: 'Create powerful mobile experiences that engage users and drive business results. Our mobile app development services cover iOS, Android, and cross-platform solutions using cutting-edge technologies like React Native and Flutter.',
      description2: 'We build intuitive, high-performance mobile applications that seamlessly integrate with your existing systems. From consumer-facing apps to enterprise mobile solutions, our team delivers products that users love and businesses depend on.',
      description3: 'Our mobile development process emphasizes user experience, security, and scalability. We handle everything from UI/UX design to backend integration, app store optimization, and post-launch support to ensure your app succeeds in competitive markets.',
      tags: ['iOS', 'Android', 'React Native', 'Flutter', 'App Store'],
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80'
    },
    web: {
      title: 'Modern Web Development Solutions',
      description1: 'Build robust, scalable web applications that deliver exceptional user experiences across all devices. Our web development expertise spans from dynamic websites to complex web portals and SaaS platforms.',
      description2: 'We leverage modern frameworks and technologies to create fast, secure, and maintainable web solutions. Whether you need a corporate website, e-commerce platform, or custom web application, we deliver solutions that perform flawlessly.',
      description3: 'Our full-stack development capabilities ensure seamless integration between frontend and backend systems. We prioritize responsive design, SEO optimization, and performance to help your web presence stand out and convert visitors into customers.',
      tags: ['React', 'Node.js', 'Database', 'API', 'Cloud Deploy'],
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80'
    }
  }

  const currentService = services[activeTab]

  return (
    <section className='w-full py-12 md:py-20 lg:py-48 px-4 '>
      
      {/* Header with tabs */}
      <div className='max-w-7xl mx-auto'>
        <div className='flex items-center gap-x-2 mb-6 md:mb-8'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white'>
            Professional Software Development Services
          </h1>
        </div>

        {/* Service Tabs */}
        <div className='flex flex-wrap gap-3 md:gap-4 mb-8 md:mb-12'>
          <button 
            onClick={() => setActiveTab('custom')}
            className={`px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-semibold rounded-lg transition-all duration-300 ${
              activeTab === 'custom' 
                ? 'bg-[#FF006E] text-white shadow-lg shadow-pink-600/30 scale-105' 
                : 'bg-gray-800/50 text-gray-300 border border-gray-700 hover:border-pink-600 hover:text-white'
            }`}
          >
            Custom Software Development
          </button>
          <button 
            onClick={() => setActiveTab('mobile')}
            className={`px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-semibold rounded-lg transition-all duration-300 ${
              activeTab === 'mobile' 
                ? 'bg-[#FF006E] text-white shadow-lg shadow-pink-600/30 scale-105' 
                : 'bg-gray-800/50 text-gray-300 border border-gray-700 hover:border-pink-600 hover:text-white'
            }`}
          >
            Mobile App Development
          </button>
          <button 
            onClick={() => setActiveTab('web')}
            className={`px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-semibold rounded-lg transition-all duration-300 ${
              activeTab === 'web' 
                ? 'bg-[#FF006E] text-white shadow-lg shadow-pink-600/30 scale-105' 
                : 'bg-gray-800/50 text-gray-300 border border-gray-700 hover:border-pink-600 hover:text-white'
            }`}
          >
            Web Development
          </button>
        </div>

        {/* Main Content Grid */}
        <div className='grid md:grid-cols-2 gap-8 lg:gap-12 items-center'>
          
          {/* Left Content */}
          <div className='space-y-4 md:space-y-6 order-2 md:order-1'>
            <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight'>
              {currentService.title}
            </h2>
            
            <p className='text-gray-400 text-sm sm:text-base lg:text-lg leading-relaxed'>
              {currentService.description1}
            </p>

            <p className='text-gray-400 text-sm sm:text-base lg:text-lg leading-relaxed'>
              {currentService.description2}
            </p>

            <p className='text-gray-400 text-sm sm:text-base lg:text-lg leading-relaxed'>
              {currentService.description3}
            </p>

            <button className='px-6 md:px-8 py-3 md:py-4 bg-[#FF006E] text-white font-bold rounded-lg shadow-xl shadow-pink-600/40 hover:scale-105 hover:shadow-2xl hover:shadow-pink-600/50 transition-all duration-300 w-full sm:w-auto'>
              Schedule a Demo
            </button>
          </div>

          {/* Right Image */}
          <div className='relative h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center order-1 md:order-2'>
            {/* Decorative pink rectangles - rotated like reference */}
            <div className='absolute top-0 right-5 sm:right-10 lg:right-20 w-24 h-32 sm:w-32 sm:h-40 lg:w-40 lg:h-48 bg-[#FF006E] rounded-2xl transform rotate-12 opacity-80 transition-all duration-500'></div>
            <div className='absolute bottom-10 sm:bottom-20 left-0 sm:left-5 lg:left-10 w-20 h-28 sm:w-28 sm:h-36 lg:w-36 lg:h-44 bg-[#FF006E] rounded-2xl transform -rotate-12 opacity-70 transition-all duration-500'></div>
            
            {/* Main laptop/screen mockup */}
            <div className='relative z-10 w-full max-w-xs sm:max-w-md lg:max-w-lg transition-all duration-500'>
              {/* Laptop screen */}
              <div className='bg-gray-900 rounded-t-xl lg:rounded-t-2xl border-4 lg:border-8 border-gray-800 shadow-2xl overflow-hidden'>
                <img 
                  key={activeTab}
                  src={currentService.image}
                  alt='Development' 
                  className='w-full h-48 sm:h-64 lg:h-80 object-cover transition-all duration-500'
                />
                {/* Screen overlay with Development text */}
                {/* <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-center'>
                  <div className='text-center px-4'>
                    <h3 className='text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4'>Development</h3>
                    <div className='flex justify-center gap-2 sm:gap-3 flex-wrap px-2'>
                      {currentService.tags.map((tag, index) => (
                        <div key={index} className='px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 bg-[#FF006E] text-white font-semibold rounded-lg text-xs sm:text-sm shadow-lg'>
                          {tag}
                        </div>
                      ))}
                    </div>
                  </div>
                </div> */}
              </div>
              {/* Laptop base */}
              <div className='bg-gray-700 h-2 sm:h-3 lg:h-4 rounded-b-lg'></div>
              <div className='bg-gray-600 h-1 sm:h-1.5 lg:h-2 w-24 sm:w-32 lg:w-40 mx-auto rounded-b-md'></div>
            </div>
          </div>

        </div>
      </div>

    </section>
  )
}