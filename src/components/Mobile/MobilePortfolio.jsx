import React, { useState } from 'react';
import { Smartphone, Code, Zap, Eye, Filter } from 'lucide-react';

// Import your actual images
import Financeapp from '../../assets/Services/MobileDesign/FInance Mobile App.jpg';
import HouseMouse from '../../assets/Services/MobileDesign/House Rental Mobile App.jpg';
import InsightLancer from '../../assets/Services/MobileDesign/Insight Lancer Mobile App.jpg';
import LearnitMobile from '../../assets/Services/MobileDesign/Learnit Mobile App.jpg';
import MoneyTransfer from '../../assets/Services/MobileDesign/Money Transfer App.jpg';

const MobilePortfolio = () => {
  const [filter, setFilter] = useState('all');
  const [hoveredItem, setHoveredItem] = useState(null);

  const categories = [
    { id: 'all', label: 'All Apps', count: 5 },
    { id: 'finance', label: 'Finance', count: 2 },
    { id: 'real-estate', label: 'Real Estate', count: 1 },
    { id: 'education', label: 'Education', count: 1 },
    { id: 'business', label: 'Business', count: 1 }
  ];

  const projects = [
    {
      id: 1,
      title: 'Finance Mobile App',
      category: 'finance',
      image: Financeapp,
      description: 'Comprehensive financial management solution',
      features: ['Digital Wallet', 'Analytics', 'Secure Transactions']
    },
    {
      id: 2,
      title: 'House Rental App',
      category: 'real-estate',
      image: HouseMouse,
      description: 'Modern property rental platform',
      features: ['Property Listings', 'Virtual Tours', 'Booking System']
    },
    {
      id: 3,
      title: 'Insight Lancer',
      category: 'business',
      image: InsightLancer,
      description: 'Freelance marketplace application',
      features: ['Project Management', 'Client Portal', 'Payment Gateway']
    },
    {
      id: 4,
      title: 'Learnit Mobile',
      category: 'education',
      image: LearnitMobile,
      description: 'E-learning mobile platform',
      features: ['Video Courses', 'Progress Tracking', 'Certifications']
    },
    {
      id: 5,
      title: 'Money Transfer App',
      category: 'finance',
      image: MoneyTransfer,
      description: 'Fast & secure money transfer solution',
      features: ['Instant Transfer', 'Multi-Currency', 'QR Payments']
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section className="relative bg-transparent py-16 sm:py-20 lg:py-28 px-4 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#FF006E]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Premium Header */}
        <div className="mb-16 sm:mb-20 text-center">
          <div className="inline-flex items-center gap-3 mb-6 px-5 py-2  rounded-full">
            <span className="text-[#FF006E] text-sm font-semibold tracking-wider uppercase">
              PORTFOLIO
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6">
            Mobile App
            <br />
            <span className="bg-gradient-to-r from-[#FF006E] to-pink-500 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          
          <p className="text-white/70 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Crafting innovative mobile experiences for iOS & Android. 
            <br className="hidden sm:block" />
            From concept to deployment, we build apps that users love.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`group relative px-6 sm:px-8 py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 ${
                filter === cat.id
                  ? 'bg-[#FF006E] text-white shadow-xl shadow-[#FF006E]/40 scale-105'
                  : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10 hover:border-white/20'
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                {cat.label}
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  filter === cat.id 
                    ? 'bg-white/20' 
                    : 'bg-white/10'
                }`}>
                  {cat.count}
                </span>
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid - Professional Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] rounded-3xl overflow-hidden border border-white/10 hover:border-[#FF006E]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#FF006E]/20 hover:-translate-y-2"
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Image Container */}
              <div className="relative h-72 sm:h-80 overflow-hidden bg-gradient-to-br from-[#05010F] to-[#1a0a2e]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#05010F] via-[#05010F]/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                
                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-[#FF006E] to-transparent transition-opacity duration-500 ${
                  hoveredItem === index ? 'opacity-90' : 'opacity-0'
                }`}></div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4 z-20">
                  <span className="px-4 py-1.5 bg-white/95 backdrop-blur-md text-[#05010F] text-xs font-bold rounded-full shadow-lg capitalize">
                    {project.category.replace('-', ' ')}
                  </span>
                </div>

                {/* Features (On Hover) */}
                <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                  hoveredItem === index ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="text-center px-6 transform transition-all duration-500">
                    <Eye className="w-12 h-12 text-white mx-auto mb-4" />
                    <div className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <div 
                          key={idx}
                          className="text-white text-sm font-medium bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full inline-block mx-1"
                        >
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 sm:p-8">
                <h3 className="text-white text-xl sm:text-2xl font-bold mb-3 group-hover:text-[#FF006E] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-white/60 text-sm sm:text-base mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Stats Bar */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  
                  <div className="flex items-center gap-2 text-white/40 text-xs">
                    <Zap size={14} />
                    <span>2024</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-8 bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl border border-white/10">
            <div className="text-4xl sm:text-5xl font-bold text-[#FF006E] mb-2">
              {filteredProjects.length}
            </div>
            <div className="text-white/60 text-sm uppercase tracking-wider font-semibold">
              Projects Delivered
            </div>
          </div>
          
          <div className="text-center p-8 bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl border border-white/10">
            <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
              {categories.length - 1}
            </div>
            <div className="text-white/60 text-sm uppercase tracking-wider font-semibold">
              Industries Served
            </div>
          </div>
          
          <div className="text-center p-8 bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl border border-white/10">
            <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
              100%
            </div>
            <div className="text-white/60 text-sm uppercase tracking-wider font-semibold">
              Client Satisfaction
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MobilePortfolio;