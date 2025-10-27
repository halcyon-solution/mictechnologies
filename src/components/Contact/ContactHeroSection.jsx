import React, { useState } from 'react'

const ContactHeroSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Form submitted! Data: ' + JSON.stringify(formData, null, 2))
  }

  const contactInfo = [
    {
      title: 'Timing',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      content: (
        <>
          <p className="text-sm sm:text-base text-gray-300">Monday – Friday: 09:00 – 17:00</p>
          <p className="text-sm sm:text-base text-gray-300">Saturday: 10:00 – 15:00</p>
          <p className="text-sm sm:text-base text-gray-300">Sunday – Off</p>
        </>
      )
    },
    {
      title: 'Phone',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      content: (
        <a href="tel:+923001234567" className="text-sm sm:text-base text-gray-300 hover:text-pink-400 transition-colors">
         +44 203310 3822
        </a>
      )
    },
    {
      title: 'Email',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      content: (
        <>
          <a href="mailto:sales@mictech.com" className="text-sm sm:text-base text-gray-300 hover:text-pink-400 transition-colors block">
            sales@mictech.com
          </a>
          <a href="mailto:info@mictech.com" className="text-sm sm:text-base text-gray-300 hover:text-pink-400 transition-colors block">
            info@mictech.com
          </a>
        </>
      )
    },
    {
      title: 'Location',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      content: (
        <a 
          href="https://www.google.com/maps/search/?api=1&query=Karachi+Pakistan" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm sm:text-base text-gray-300 hover:text-pink-400 transition-colors"
        >
       1 Montague Court, 19-21 Roxborough Road,<br/> London, United Kingdom
        </a>
      )
    }
  ]

  return (
    <section className=" text-white font-poppins py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-12 lg:px-20">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - Contact Info */}
          <div className="flex items-center justify-start">
            <div className="flex flex-col gap-8 w-full max-w-xl">
              {/* Header */}
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2  w-fit">
                  <span className="text-xs font-medium text-white tracking-wide uppercase">
                    Get In Touch
                  </span>
                </div>
                
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                  Connect with Our{' '} Team
               
                </h1>
                
                <p className="text-gray-300 text-base md:text-lg">
                  Transform your digital presence with our cutting-edge solutions. Reach out to us to learn more about our services.
                </p>
              </div>

              {/* Contact Details */}
              <div className="flex flex-col gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex gap-4 group">
                    <div className="w-12 h-12 flex-shrink-0 bg-[#FF006E] rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-all duration-300 shadow-lg">
                      {info.icon}
                    </div>
                    <div className="flex flex-col gap-1">
                      <h2 className="font-bold text-xl text-white">{info.title}:</h2>
                      <div>{info.content}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md">
           
              
              <div className="relative p-8 rounded-3xl border border-gray-700/50 shadow-2xl">
                {/* Form Header */}
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-white mb-2">
                    Send Us a{' '} Message
              
                  </h2>
                  <p className="text-gray-400 text-sm">We'll get back to you as soon as possible.</p>
                </div>

                <div className="space-y-5">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-pink-500/50 focus:ring-1 focus:ring-pink-500/50 transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-pink-500/50 focus:ring-1 focus:ring-pink-500/50 transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-pink-500/50 focus:ring-1 focus:ring-pink-500/50 transition-all duration-300"
                      placeholder="+92 300 1234567"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-pink-500/50 focus:ring-1 focus:ring-pink-500/50 transition-all duration-300 resize-none"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={handleSubmit}
                    className="w-full px-6 py-4 bg-[#FF006E] rounded-xl font-semibold text-white hover:shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
                  >
                    Send Message
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactHeroSection