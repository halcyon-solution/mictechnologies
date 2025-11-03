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
  {/* Address - Google Maps Link */}
  <a 
    href="https://www.google.com/maps/search/?api=1&query=1+Montague+Court,+19-21+Roxborough+Rd,+London,+United+Kingdom"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-start space-x-2 text-sm text-gray-400 hover:text-[#FF006E] transition-colors duration-300"
  >
    <MapPin className="w-4 h-4 text-[#FF006E] flex-shrink-0 mt-0.5" />
    <span>1 Montague Court, 19-21 Roxborough Rd , London, United Kingdom</span>
  </a>

  {/* WhatsApp Number */}
  <a 
    href="https://wa.me/447566777617"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-2 text-sm text-gray-400 hover:text-[#FF006E] transition-colors duration-300"
  >
    <svg className="w-4 h-4 text-[#FF006E] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
    <span>+44 7566 777617</span>
  </a>

  {/* Email */}
  <a 
    href="mailto:info@mictechnologies.co.uk"
    className="flex items-start space-x-2 text-sm text-gray-400 hover:text-[#FF006E] transition-colors duration-300"
  >
    <Mail className="w-4 h-4 text-[#FF006E] flex-shrink-0 mt-0.5" />
    <span className="break-all">info@mictechnologies.co.uk</span>
  </a>
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
                <Link to="/services/mobile-development" className="text-gray-400 hover:text-[#FF006E] transition-colors text-xs sm:text-sm block">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link to="/services/graphic-design" className="text-gray-400 hover:text-[#FF006E] transition-colors text-xs sm:text-sm block">
                  Graphic Designing
                </Link>
              </li>
              <li>
                <Link to="/services/uiux-design" className="text-gray-400 hover:text-[#FF006E] transition-colors text-xs sm:text-sm block">
                  UI/UX Designing
                </Link>
              </li>
              <li>
                <Link to="/services/seo" className="text-gray-400 hover:text-[#FF006E] transition-colors text-xs sm:text-sm block">
                  SEO
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
                <Link to="/contact" className="text-gray-400 hover:text-[#FF006E] transition-colors text-xs sm:text-sm block">
                  Contact Us
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