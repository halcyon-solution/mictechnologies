import React, { useState } from 'react';
import { Grid, List, Eye, Sparkles } from 'lucide-react';

import busniesscards from '../../../assets/Services/GraphicPortfolio/Business Card.jpg'
import flyers from '../../../assets/Services/GraphicPortfolio/Flyer.jpg'

import logo2 from '../../../assets/Services/GraphicPortfolio/Logo.jpg'

import Posts from '../../../assets/Services/GraphicPortfolio/Business Card.jpg'
import Thumbnails from '../../../assets/Services/GraphicPortfolio/Thumbnail.jpg'


const GraphicPortfolio = () => {
const [filter, setFilter] = useState('all');
  const [viewMode, setViewMode] = useState('masonry');
  const [hoveredItem, setHoveredItem] = useState(null);

  // Placeholder imports - replace with your actual imports
  const busniesscard = busniesscards;
  const flyer = flyers
  const logo = logo2
  const Post = Posts
  const Thumbnail = Thumbnails;


const categories = [
  { id: 'all', label: 'All Work', count: 5 },
  { id: 'branding', label: 'Branding', count: 2 },
  { id: 'print', label: 'Print Design', count: 1 },
  { id: 'digital', label: 'Digital', count: 1 },
  { id: 'social', label: 'Social Media', count: 1 }
];


 const projects = [
  {
    id: 1,
    title: 'Business Card Design',
    category: 'branding',
    image: busniesscard,
    size: 'large'
  },
  {
    id: 2,
    title: 'Event Flyer',
    category: 'print',
    image: flyer,
    size: 'tall'
  },
  {
    id: 3,
    title: 'Brand Logo Collection',
    category: 'branding',
    image: logo,
    size: 'medium'
  },
  {
    id: 4,
    title: 'Social Media Post',
    category: 'social',
    image: Post,
    size: 'medium'
  },
  {
    id: 5,
    title: 'YouTube Thumbnail',
    category: 'digital',
    image: Thumbnail,
    size: 'wide'
  }
];
 
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const getSizeClasses = (size) => {
    if (viewMode === 'masonry') {
      switch(size) {
        case 'large':
          return 'col-span-1 sm:col-span-2 row-span-2';
        case 'tall':
          return 'col-span-1 row-span-2';
        case 'wide':
          return 'col-span-1 sm:col-span-2 row-span-1';
        default:
          return 'col-span-1 row-span-1';
      }
    }
    return 'col-span-1';
  };

  return (
    <section className="relative bg-transparent py-16 sm:py-20 lg:py-24 px-4 overflow-visible">
      <div className="max-w-[1600px] mx-auto">
        
        {/* Elegant Header */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[#FF006E] pl-3 text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase">
              Portfolio
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-white tracking-tight leading-[1.1] mb-4">
            Graphic Design
            <br />
            <span className="font-bold text-[#FF006E]">Portfolio</span>
          </h2>
          <p className="text-white/60 text-lg sm:text-xl max-w-2xl mt-6">
            A curated collection of visual identities, print materials, and digital designs
          </p>
        </div>

        {/* Filter & View Controls */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12">
          
          {/* Category Filters */}
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`group relative px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === cat.id
                    ? 'bg-[#FF006E] text-white shadow-lg shadow-[#FF006E]/30'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
                }`}
              >
                <span className="relative z-10">{cat.label}</span>
                <span className={`ml-2 text-xs ${filter === cat.id ? 'text-white/80' : 'text-white/40'}`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          {/* View Mode Toggle */}
          <div className="flex gap-2 bg-white/5 p-1 rounded-full border border-white/10">
            <button
              onClick={() => setViewMode('masonry')}
              className={`p-2.5 rounded-full transition-all duration-300 ${
                viewMode === 'masonry'
                  ? 'bg-[#FF006E] text-white'
                  : 'text-white/60 hover:text-white'
              }`}
              aria-label="Masonry view"
            >
              <Grid size={18} />
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2.5 rounded-full transition-all duration-300 ${
                viewMode === 'grid'
                  ? 'bg-[#FF006E] text-white'
                  : 'text-white/60 hover:text-white'
              }`}
              aria-label="Grid view"
            >
              <List size={18} />
            </button>
          </div>
        </div>

        {/* Projects Grid/Masonry */}
        <div className={`grid gap-5 sm:gap-6 lg:gap-8 ${
          viewMode === 'masonry' 
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[250px]' 
            : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
        }`}>
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`${getSizeClasses(project.size)} group relative overflow-hidden rounded-2xl border border-[#FF006E]/20 hover:border-[#FF006E]/60 transition-all duration-500 cursor-pointer`}
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
              style={{
                animationDelay: `${index * 50}ms`
              }}
            >
              {/* Background Image */}
              <div className="absolute inset-0 bg-[#05010F]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05010F] via-[#05010F]/60 to-transparent"></div>
              </div>

              {/* Hover Overlay */}
              <div className={`absolute inset-0 bg-[#FF006E]/50 backdrop-blur-sm transition-all duration-500 flex items-center justify-center ${
                hoveredItem === index ? 'opacity-100' : 'opacity-0'
              }`}>
                <div className="text-center space-y-4 transform transition-all duration-500 px-6">
                  <div className={`transition-all duration-500 delay-100 ${
                    hoveredItem === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}>
                    <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">
                      {project.title}
                    </h3>
                    <div className="flex items-center justify-center gap-2 text-white/80 text-sm">
                      <span className="capitalize">{project.category}</span>
                      <span>•</span>
                      <span>2024</span>
                    </div>
                  </div>
                  
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 bg-white/95 backdrop-blur-sm text-[#05010F] text-xs font-semibold rounded-full">
                  {project.category}
                </span>
              </div>

              {/* Title Bar (Visible on non-hover) */}
              <div className={`absolute bottom-0 left-0 right-0 p-6 transition-all duration-500 ${
                hoveredItem === index ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
              }`}>
                <h3 className="text-white text-lg sm:text-xl font-semibold mb-1">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-[1px] bg-[#FF006E]"></div>
                  <span className="text-white/60 text-sm">2024</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More / Stats */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 px-8 py-4 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-[#FF006E]">{filteredProjects.length}</div>
              <div className="text-xs text-white/60 uppercase tracking-wider">Projects</div>
            </div>
            <div className="w-px h-8 bg-white/20"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">{categories.length - 1}</div>
              <div className="text-xs text-white/60 uppercase tracking-wider">Categories</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default GraphicPortfolio;