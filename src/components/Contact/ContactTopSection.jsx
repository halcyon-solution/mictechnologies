import React from 'react'
import contact from '../../assets/Contact/contact.webp'

const ContactTopSection = () => {
  return (
    <div 
      className="relative w-full h-[35vh] md:h-[50vh] xl:h-[65vh] bg-cover bg-center bg-no-repeat flex justify-center items-center z-0"
      style={{ backgroundImage: `url(${contact})` }}
      aria-label="Contact us background image"
    >
      {/* Pink Overlay */}
    

      {/* Dark Gradient Overlay for better readability */}
      <div className='absolute inset-0 from-black/30 via-black/20 to-black/40'></div>

      {/* Content */}
      <h1 className="relative z-10 text-white text-4xl md:text-6xl font-bold drop-shadow-2xl">
        Contact Us
      </h1>
    </div>
  )
}

export default ContactTopSection