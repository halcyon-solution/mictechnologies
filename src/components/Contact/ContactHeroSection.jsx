import React, { useState } from 'react'
import { WEB3FORMS_CONFIG } from '../../config/web3forms'

const ContactHeroSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', null

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const formDataToSend = new FormData()
      
      // Web3Forms access key from config
      formDataToSend.append('access_key', WEB3FORMS_CONFIG.ACCESS_KEY)
      
      // Recipient email (where form submissions will be sent)
      formDataToSend.append('email', WEB3FORMS_CONFIG.RECIPIENT_EMAIL)
      
      // Form fields
      formDataToSend.append('name', formData.name)
      formDataToSend.append('from_email', formData.email) // Sender's email
      formDataToSend.append('phone', formData.phone)
      formDataToSend.append('message', formData.message)
      
      // Additional fields for better email formatting
      formDataToSend.append('subject', WEB3FORMS_CONFIG.SETTINGS.subject)
      formDataToSend.append('from_name', formData.name)
      
      const response = await fetch(WEB3FORMS_CONFIG.API_URL, {
        method: 'POST',
        body: formDataToSend
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus('success')
        // Reset form
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          projectType: '',
          message: ''
        })
      } else {
        setSubmitStatus('error')
        console.error('Form submission error:', result)
      }
    } catch (error) {
      setSubmitStatus('error')
      console.error('Network error:', error)
    } finally {
      setIsSubmitting(false)
    }
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
      title: 'Whatsapp',
      icon: (
         <svg className="w-6 h-6 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
      ),
      content: (
          <a 
    href="https://wa.me/447566777617"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-2 text-sm text-gray-400 hover:text-[#FF006E] transition-colors duration-300"
  >
  
    <span>+44 7566 777617</span>
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
            info@mictechnologies.co.uk
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
                  <span className="text-xs font-medium text-[#FF006E] tracking-wide uppercase">
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
                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-xl">
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <p className="text-green-400 text-sm font-medium">
                          Message sent successfully! We'll get back to you soon.
                        </p>
                      </div>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-xl">
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <p className="text-red-400 text-sm font-medium">
                          Failed to send message. Please try again or contact us directly.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-pink-500/50 focus:ring-1 focus:ring-pink-500/50 transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
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
                      placeholder="+44 7566 777617"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-pink-500/50 focus:ring-1 focus:ring-pink-500/50 transition-all duration-300 resize-none"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className={`w-full px-6 py-4 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 ${
                      isSubmitting 
                        ? 'bg-gray-600 cursor-not-allowed' 
                        : 'bg-[#FF006E] hover:shadow-2xl hover:shadow-pink-500/50 hover:scale-[1.02]'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
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