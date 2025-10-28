import React from 'react'
import contact from '../../assets/Contact/futuristic-robot-sits-front-computer-screen-with-glowing-code_14117-1130869.jpg'

const ContactTopSection = () => {
  return (
    <div className="">
      <div
        className="relative w-full h-[35vh] md:h-[50vh] xl:h-[65vh]"
        aria-label="Contact us background image"
      >
        {/* Background Image */}
      <img 
  src={contact} 
  className='absolute w-full h-full  inset-0' 
  alt="Contact background" 
/>
        {/* Pink Overlay */}
        <div className='absolute inset-0 bg-[#FF006E]/40'></div>

        {/* Dark Gradient Overlay for better readability */}
        <div className='absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40'></div>

        {/* Content */}
        <div className='absolute inset-0 flex justify-center items-center'>
          <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-2xl">
            Contact Us
          </h1>
        </div>
      </div>
    </div>
  )
}

export default ContactTopSection