import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import logo from '../../assets/final mic-1.png';


export default function Footer() {
  return (
    <footer className="bg-[#05010F] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-44 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                <img src={logo} className='w-full h-8' alt="Mic Tech Logo" />
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transform Your Vision into Digital Reality
            </p>
            <p className="text-gray-500 text-xs">
              We Drive Innovation with Software Solutions
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 pt-4">
              <div className="flex items-start space-x-2 text-sm text-gray-400">
                <MapPin className="w-4 h-4 text-[#FF006E] flex-shrink-0 mt-0.5" />
                <span>Karachi, Pakistan</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Phone className="w-4 h-4 text-[#FF006E] flex-shrink-0" />
                <span>+44 7566 777617</span>
              </div>
              <div className="flex items-start space-x-2 text-sm text-gray-400">
                <Mail className="w-4 h-4 text-[#FF006E] flex-shrink-0 mt-0.5" />
                <span className="break-all">info@mictechnologies.co.uk</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-[#FF006E]">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/custom-software" className="text-gray-400 hover:text-[#FF006E] transition-colors text-xs sm:text-sm block">
                  Custom Software Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-[#FF006E] transition-colors text-xs sm:text-sm block">
                  Web Development
                </Link>
              </li>
               <li>
                <Link to="/services/social-media" className="text-gray-400 hover:text-[#FF006E] transition-colors text-xs sm:text-sm block">
                  Social Media Marketing
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-[#FF006E] transition-colors text-xs sm:text-sm block">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link to="/services/graphic-design" className="text-gray-400 hover:text-[#FF006E] transition-colors text-xs sm:text-sm block">
                  Graphic Designing
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-[#FF006E] transition-colors text-xs sm:text-sm block">
                  UI/UX Designing
                </Link>
              </li>
            
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-[#FF006E]">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-[#FF006E] transition-colors text-xs sm:text-sm block">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-[#FF006E] transition-colors text-xs sm:text-sm block">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-[#FF006E] transition-colors text-xs sm:text-sm block">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-[#FF006E] transition-colors text-xs sm:text-sm block">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-[#FF006E] transition-colors text-xs sm:text-sm block">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-[#FF006E] transition-colors text-xs sm:text-sm block">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-[#FF006E]">Newsletter</h3>
            <p className="text-gray-400 text-xs sm:text-sm mb-4">
              Subscribe to get latest updates and exclusive offers!
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#FF006E] transition-colors"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-[#FF006E] cursor-pointer text-white text-sm font-semibold rounded-lg hover:from-pink-600 hover:to-[#FF006E] transition-all transform hover:text-[#FF006E] hover:bg-white"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 gap-4">
          <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Mic Tech. All rights reserved.
          </p>
          
          {/* Social Links */}
          <div className="flex space-x-3 sm:space-x-4">
            <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-900 hover:bg-[#FF006E] rounded-full flex items-center justify-center transition-all transform hover:scale-110">
              <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-900 hover:bg-[#FF006E] rounded-full flex items-center justify-center transition-all transform hover:scale-110">
              <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-900 hover:bg-[#FF006E] rounded-full flex items-center justify-center transition-all transform hover:scale-110">
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-900 hover:bg-[#FF006E] rounded-full flex items-center justify-center transition-all transform hover:scale-110">
              <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}