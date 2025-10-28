import React, { useState } from 'react';
import { Palette, Layers, Sparkles, ArrowUpRight, Monitor } from 'lucide-react';

// Import your actual images
import AcademicApp from '../../assets/Services/UIUXPortfolio/Academic App UI.jpg';
import DaniiaUI from "../../assets/Services/UIUXPortfolio/Daniia Dikaia's UI Mastery.jpg";
import DashboardUI from '../../assets/Services/UIUXPortfolio/Dashboard UI.jpg';
import ELearningUI from '../../assets/Services/UIUXPortfolio/E Learing UI.png';
import EduKa from '../../assets/Services/UIUXPortfolio/EDU KA.jpg';
import ITFirm from '../../assets/Services/UIUXPortfolio/IT firm.jpg';
import LogisticCargo from '../../assets/Services/UIUXPortfolio/Logistic Cargo.jpg';
import CloudDashboard from '../../assets/Services/UIUXPortfolio/My Cloud Dashboard.jpg';
import RegistrationUI from '../../assets/Services/UIUXPortfolio/Registration Screen UI.jpg';
import SmartHome from '../../assets/Services/UIUXPortfolio/SMart home design ui.jpg';

const UiPortfolio = () => {
  const [filter, setFilter] = useState('all');
  const [hoveredItem, setHoveredItem] = useState(null);

  const categories = [
    { id: 'all', label: 'All Designs', icon: Layers },
    { id: 'dashboard', label: 'Dashboards', icon: Monitor },
    { id: 'education', label: 'Education', icon: Sparkles },
    { id: 'business', label: 'Business', icon: Palette }
  ];

  const projects = [
    {
      id: 1,
      title: 'Academic Learning Platform',
      category: 'education',
      image: AcademicApp,
      description: 'Modern educational interface with intuitive navigation',
      tags: ['Web App', 'Mobile', 'Dashboard'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'UI Mastery Collection',
      category: 'dashboard',
      image: DaniiaUI,
      description: 'Sophisticated UI components and design system',
      tags: ['Design System', 'Components', 'Web'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      title: 'Analytics Dashboard',
      category: 'dashboard',
      image: DashboardUI,
      description: 'Data-driven interface with clean visualizations',
      tags: ['SaaS', 'Analytics', 'Admin'],
      color: 'from-emerald-500 to-teal-500'
    },
    {
      id: 4,
      title: 'E-Learning Platform',
      category: 'education',
      image: ELearningUI,
      description: 'Engaging online learning experience',
      tags: ['LMS', 'Interactive', 'Courses'],
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 5,
      title: 'EDU KA Education',
      category: 'education',
      image: EduKa,
      description: 'Comprehensive educational ecosystem',
      tags: ['Platform', 'Students', 'Teachers'],
      color: 'from-indigo-500 to-blue-500'
    },
    {
      id: 6,
      title: 'IT Firm Website',
      category: 'business',
      image: ITFirm,
      description: 'Professional corporate web presence',
      tags: ['Corporate', 'Landing', 'Marketing'],
      color: 'from-slate-500 to-zinc-500'
    },
    {
      id: 7,
      title: 'Logistics Dashboard',
      category: 'dashboard',
      image: LogisticCargo,
      description: 'Cargo tracking and management system',
      tags: ['Tracking', 'Fleet', 'Operations'],
      color: 'from-amber-500 to-yellow-500'
    },
    {
      id: 8,
      title: 'Cloud Management',
      category: 'dashboard',
      image: CloudDashboard,
      description: 'Intuitive cloud storage interface',
      tags: ['Cloud', 'Storage', 'Management'],
      color: 'from-sky-500 to-blue-500'
    },
    {
      id: 9,
      title: 'Registration Flow',
      category: 'business',
      image: RegistrationUI,
      description: 'Seamless onboarding experience',
      tags: ['Onboarding', 'Forms', 'UX'],
      color: 'from-violet-500 to-purple-500'
    },
    {
      id: 10,
      title: 'Smart Home Control',
      category: 'business',
      image: SmartHome,
      description: 'IoT device management interface',
      tags: ['IoT', 'Home', 'Automation'],
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section className="relative bg-transparent py-20 sm:py-24 lg:py-32 px-4">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255, 0, 110, 0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-[1600px] mx-auto relative z-10">
        
        {/* Creative Header with Side Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-20 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[#FF006E] text-sm font-bold tracking-[0.2em] uppercase">
                PORTFOLIO
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[0.9] mb-8">
              Design
              <br />
              <span className="relative inline-block">
                Excellence
                <div className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-[#FF006E] to-pink-500 opacity-30 blur-sm"></div>
              </span>
            </h1>
            
            <p className="text-white/70 text-lg leading-relaxed max-w-xl">
              Transforming ideas into stunning digital experiences. 
              Every pixel crafted with purpose, every interaction designed with care.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#FF006E] to-pink-400 mb-2">
                10+
              </div>
              <div className="text-white/60 text-sm font-semibold">
                Projects Completed
              </div>
            </div>
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <div className="text-5xl font-black text-white mb-2">
                4
              </div>
              <div className="text-white/60 text-sm font-semibold">
                Design Categories
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Scrolling Categories */}
        <div className="mb-16 overflow-x-auto scrollbar-hide">
          <div className="flex gap-4 min-w-max pb-4">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setFilter(cat.id)}
                  className={`group flex items-center gap-3 px-8 py-4 rounded-2xl text-base font-bold transition-all duration-300 whitespace-nowrap ${
                    filter === cat.id
                      ? 'bg-gradient-to-r from-[#FF006E] to-pink-500 text-white shadow-2xl shadow-[#FF006E]/50 scale-105'
                      : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10 hover:scale-105'
                  }`}
                >
                  <Icon size={20} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Bento Grid Layout - Different from Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 auto-rows-[300px]">
          {filteredProjects.map((project, index) => {
            // Create varied grid patterns
            const getGridSpan = (idx) => {
              const patterns = [
                'lg:col-span-8 lg:row-span-2', // Large
                'lg:col-span-4 lg:row-span-1', // Small
                'lg:col-span-4 lg:row-span-2', // Tall
                'lg:col-span-8 lg:row-span-1', // Wide
                'lg:col-span-6 lg:row-span-1', // Medium
                'lg:col-span-6 lg:row-span-1', // Medium
                'lg:col-span-5 lg:row-span-2', // Tall
                'lg:col-span-7 lg:row-span-1', // Wide
                'lg:col-span-7 lg:row-span-2', // Large
                'lg:col-span-5 lg:row-span-1', // Medium
              ];
              return patterns[idx % patterns.length];
            };

            return (
              <div
                key={project.id}
                className={`${getGridSpan(index)} group relative rounded-3xl overflow-hidden cursor-pointer`}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
                style={{
                  animationDelay: `${index * 80}ms`
                }}
              >
                {/* Image with Overlay */}
                <div className="absolute inset-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-[#FF006E]/50 opacity-0 group-hover:opacity-90 mix-blend-multiply transition-all duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between">
                  
                  {/* Top - Tags (Hidden on hover) */}
                  <div className={`flex flex-wrap gap-2 transition-all duration-300 ${
                    hoveredItem === index ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'
                  }`}>
                    {project.tags.slice(0, 2).map((tag, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-white/90 backdrop-blur-sm text-black text-xs font-bold rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Center - Arrow (Visible on hover) */}
                  {/* <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                    hoveredItem === index ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border-2 border-white flex items-center justify-center transform transition-transform duration-500 group-hover:rotate-45">
                      <ArrowUpRight className="text-white" size={32} />
                    </div>
                  </div> */}

                  {/* Bottom - Title & Description */}
                  <div className={`transition-all duration-500 ${
                    hoveredItem === index ? 'translate-y-0' : 'translate-y-2'
                  }`}>
                    <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-black mb-2 leading-tight">
                      {project.title}
                    </h3>
                    <p className={`text-white/80 text-sm sm:text-base leading-relaxed transition-all duration-500 ${
                      hoveredItem === index ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0'
                    }`}>
                      {project.description}
                    </p>
                    
                    {/* All Tags on Hover */}
                    <div className={`flex flex-wrap gap-2 mt-4 transition-all duration-500 delay-100 ${
                      hoveredItem === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}>
                      {project.tags.map((tag, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-white/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        {/* <div className="mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 p-8 bg-gradient-to-r from-white/5 via-white/10 to-white/5 rounded-3xl border border-white/10 backdrop-blur-sm">
            <div className="text-left">
              <div className="text-3xl font-black text-white mb-1">
                Ready to elevate your brand?
              </div>
              <div className="text-white/60 text-sm">
                Let's create something extraordinary together
              </div>
            </div>
            <button className="px-8 py-4 bg-gradient-to-r from-[#FF006E] to-pink-500 text-white font-bold rounded-full hover:shadow-2xl hover:shadow-[#FF006E]/50 transition-all duration-300 hover:scale-105 whitespace-nowrap">
              Start a Project
            </button>
          </div>
        </div> */}

      </div>
    </section>
  );
};

export default UiPortfolio;