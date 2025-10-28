import React, { useState, useEffect } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import logo from '../../assets/final mic-1.png'
import logo2 from '../../assets/final mic-4.png'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Disable scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const services = [
    { name: 'Graphic Designing', path: '/services/graphic-design' },
    { name: 'Social Media Marketing', path: '/services/social-media' },
    { name: 'Web Development', path: '/services/web-development' },
    { name: 'Mobile App Development', path: '/services/mobile-development' },
    { name: 'UI/UX Designing', path: '/services/uiux-design' },
    { name: 'Custom Software Development', path: '/services/custom-software' },

  ]


  return (
    <>
      <header className={`w-full fixed top-0 left-0 right-0 p-2 flex justify-center items-center h-20 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#FF006E] shadow-lg backdrop-blur-sm' : 'bg-transparent'}`}> 
        <nav className='w-[98%]  lg:w-[93%] xl:w-[75%] 2xl:w-[70%]  flex p-1 justify-between items-center h-full'>
          
          

        {isScrolled ?
            <Link to="/" className='w-40 md:w-52 flex items-center rounded-full h-[90%]'>
            <img src={logo2} alt="Logo" className='w-full h-full object-contain'/>
          </Link> 
          :
           <Link to="/" className='w-40 md:w-52 flex items-center rounded-full h-[90%]'>
            <img src={logo} alt="Logo" className='w-full h-full object-contain'/>
          </Link>
          }

          {/* Desktop Navbar Items */}
          <ul className='hidden text-lg  lg:flex justify-center xl:justify-center items-center gap-x-12 xl:gap-x-8 2xl:gap-x-12 h-full'>
            <li className='relative flex items-center gap-1 text-white font-medium cursor-pointer hover:text-gray-200 transition-colors duration-300 group'>
              <Link to="/">Home</Link>
              <span className='absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full'></span>
            </li>
            <li className='relative flex items-center gap-1 text-white font-medium cursor-pointer hover:text-gray-200 transition-colors duration-300 group'>
              <Link to="/about">About Us</Link>
              <span className='absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full'></span>
            </li>
            
            {/* Services Dropdown */}
            <li className='relative group flex items-center gap-1 text-white font-medium cursor-pointer hover:text-gray-200 transition-colors duration-300'>
              Our Services <ChevronDown size={16} className='group-hover:rotate-180 transition-transform duration-300' />
              <span className='absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full'></span>
              
              {/* Dropdown Menu */}
              <div className='absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2'>
                <ul className='py-2'>
                  {services.map((service, index) => (
                    <li key={index}>
                      <Link 
                        to={service.path}
                        className='block px-4 py-2.5 text-gray-700 hover:bg-[#FF006E] hover:text-white transition-colors cursor-pointer text-sm font-medium'
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            <li className='w-44 h-14'>
              <Link to="/contact">
                <button className='w-full cursor-pointer rounded-lg border-2 border-[#FFFFFF94] text-white font-medium bg-[#FF006E] hover:border-2  hover:shadow-xl  hover:border-[#FF006E] hover:bg-white hover:text-[#FF006E] transition-all duration-300 h-full'>
                  Contact Us
                </button>
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button 
            className='lg:hidden text-white z-50'
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Drawer - Slide from Right */}
      <div className={`lg:hidden fixed top-0 right-0 h-full w-[85%] sm:w-[400px] bg-gradient-to-br from-[#05010F] via-[#1a0a2e] to-[#05010F] shadow-2xl z-50 transition-transform duration-500 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        {/* Close Button */}
        <div className='flex justify-between items-center p-6 border-b border-gray-800'>
          <h2 className='text-white text-xl font-bold'>Menu</h2>
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className='text-white hover:text-[#FF006E] transition-colors'
          >
            <X size={28} />
          </button>
        </div>

        {/* Menu Items */}
        <div className='overflow-y-auto h-[calc(100%-88px)] px-6 py-6'>
          <ul className='flex flex-col space-y-1'>
            
            <li className='text-white font-semibold text-lg cursor-pointer hover:text-[#FF006E] transition-colors py-4 border-b border-gray-800/50'>
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            </li>
            
            <li className='text-white font-semibold text-lg cursor-pointer hover:text-[#FF006E] transition-colors py-4 border-b border-gray-800/50'>
              <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
            </li>
            
            {/* Mobile Services Accordion */}
            <li className='border-b border-gray-800/50'>
              <div 
                className='flex items-center justify-between text-white font-semibold text-lg cursor-pointer hover:text-[#FF006E] transition-colors py-4'
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                <span>Our Services</span>
                <ChevronDown 
                  size={20} 
                  className={`transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`}
                />
              </div>
              
              {/* Services List */}
              <div className={`overflow-hidden transition-all duration-500 ${isServicesOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <ul className='pl-4 pb-3 space-y-2'>
                  {services.map((service, index) => (
                    <li key={index}>
                      <Link 
                        to={service.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className='block text-gray-300 hover:text-[#FF006E] cursor-pointer py-2.5 text-base transition-colors border-l-2 border-transparent hover:border-[#FF006E] pl-3'
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            
            {/* Contact Button */}
            <li className='pt-6'>
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <button className='w-full rounded-lg hover:shadow-xl hover:border-2 hover:border-[#FF006E] text-white font-bold bg-[#FF006E] hover:bg-[#d4005c]  hover:shadow-[#FF006E]/50 transition-all duration-300 py-4 text-lg'>
                  Contact Us
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}