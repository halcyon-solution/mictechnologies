// import React from 'react'
// import { Mail, Phone, MapPin } from 'lucide-react'

// export default function GetinTouch() {
//   return (
//     <section className='w-full flex justify-center items-center h-[70vh] py-16 bg-white'>

//         <div className='w-[65%]  h-full flex justify-center items-center gap-0 rounded-2xl overflow-hidden shadow-2xl'>

     
//         <div className='w-[50%] h-full flex flex-col p-4 justify-center gap-y-7  bg-gradient-to-br from-[#FF006E] via-[#C9004D] to-[#8B0034] text-white '>

//         <div className='w-full '>
//             <p className='text-sm font-semibold text-white/90 tracking-wide'>LET'S TALK</p>
//             <h3 className='text-4xl font-bold mt-2 leading-tight text-white'>Speak With Expert <br />Engineers.</h3>
//         </div>

//         <div className='flex items-center gap-4'>
//             <div className='w-12 h-12 bg-white flex justify-center items-center rounded-full flex-shrink-0 shadow-lg'>
//                 <Mail className='text-[#FF006E]' size={22} />
//             </div>
//              <div>
//                     <p className='text-sm text-white/70'>Email</p>
//                     <p className='text-base font-semibold text-white'>info@mictech.com</p>
//             </div>
//         </div>

//         <div className='flex items-center gap-4'>
//             <div className='w-12 h-12 bg-white flex justify-center items-center rounded-full flex-shrink-0 shadow-lg'>
//                 <Phone className='text-[#FF006E]' size={22} />
//             </div>
//              <div>
//                     <p className='text-sm text-white/70'>Phone</p>
//                     <p className='text-base font-semibold text-white'>+92 123 456 7890</p>
//             </div>
//         </div>

//         <div className='flex items-center gap-4'>
//             <div className='w-12 h-12 bg-white flex justify-center items-center rounded-full flex-shrink-0 shadow-lg'>
//                 <MapPin className='text-[#FF006E]' size={22} />
//             </div>
//              <div>
//                     <p className='text-sm text-white/70'>Address</p>
//                     <p className='text-base font-semibold text-white'>Karachi, Pakistan</p>
//             </div>
//         </div>

//         </div>



//         <div className='w-[90%] px-12 py-16 bg-gray-50'>
            
//             <div className='mb-8'>
//                 <p className='text-sm font-semibold text-[#FF006E] tracking-wide'>GET IN TOUCH</p>
//                 <h2 className='text-3xl font-bold text-black mt-2'>Fill The Form Below</h2>
//             </div>

//             <form className='flex flex-col gap-5'>
                
//                 <div className='flex gap-4'>
//                     <input 
//                         type="text" 
//                         placeholder="Name" 
//                         className='w-1/2 px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FF006E] focus:outline-none focus:ring-2 focus:ring-[#FF006E]/20 transition-all'
//                     />
//                     <input 
//                         type="email" 
//                         placeholder="E-Mail" 
//                         className='w-1/2 px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FF006E] focus:outline-none focus:ring-2 focus:ring-[#FF006E]/20 transition-all'
//                     />
//                 </div>

//                 <div className='flex gap-4'>
//                     <input 
//                         type="tel" 
//                         placeholder="Phone Number" 
//                         className='w-1/2 px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FF006E] focus:outline-none focus:ring-2 focus:ring-[#FF006E]/20 transition-all'
//                     />
//                     <input 
//                         type="text" 
//                         placeholder="Your Website" 
//                         className='w-1/2 px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FF006E] focus:outline-none focus:ring-2 focus:ring-[#FF006E]/20 transition-all'
//                     />
//                 </div>

//                 <textarea 
//                     placeholder="Your message Here" 
//                     rows="5"
//                     className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FF006E] focus:outline-none focus:ring-2 focus:ring-[#FF006E]/20 transition-all resize-none'
//                 ></textarea>

//                 <button 
//                     type="submit"
//                     className='w-fit px-8 py-3 bg-[#FF006E] text-white font-semibold rounded-lg hover:bg-[#FF006E]/90 hover:shadow-lg hover:shadow-[#FF006E]/30 transition-all duration-300'
//                 >
//                     Submit Now
//                 </button>

//             </form>

//         </div>

//         </div>

//     </section>
//   )
// }

import React, { useState } from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'
import { WEB3FORMS_CONFIG } from '../../config/web3forms'

export default function GetinTouch() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
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
      formDataToSend.append('website', formData.website)
      formDataToSend.append('message', formData.message)
      
      // Additional fields for better email formatting
      formDataToSend.append('subject', 'New Contact Form Submission from MIC Technologies Home Page')
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
          phone: '',
          website: '',
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
  return (
    <section className='w-full flex justify-center items-center min-h-screen 2xl:min-h-[50vh] py-12 md:py-16 px-4 bg-white'>

      <div className='w-full max-w-6xl flex flex-col lg:flex-row justify-center items-stretch gap-0 rounded-2xl overflow-hidden shadow-2xl'>

        {/* Left Side - Contact Info */}
        <div className='w-full lg:w-[50%] flex flex-col p-6 md:p-8 lg:p-12 justify-center gap-y-6 md:gap-y-7 bg-gradient-to-br from-[#FF006E] via-[#C9004D] to-[#8B0034] text-white'>

  <div className='w-full'>
    <p className='text-xs md:text-sm font-semibold text-white/90 tracking-wide'>LET'S TALK</p>
    <h3 className='text-3xl md:text-4xl font-bold mt-2 leading-tight text-white'>
      Speak With Expert Engineers.
    </h3>
  </div>

  <a href='mailto:info@mictech.com' className='flex items-center gap-4 hover:opacity-80 transition-opacity'>
    <div className='w-12 h-12 bg-white flex justify-center items-center rounded-full flex-shrink-0 shadow-lg'>
      <Mail className='text-[#FF006E]' size={22} />
    </div>
    <div>
      <p className='text-sm text-white/70'>Email</p>
      <p className='text-base font-semibold text-white'>info@mictechnologies.co.uk</p>
    </div>
  </a>

  <a href='https://wa.me/447566777617' target='_blank' rel='noopener noreferrer' className='flex items-center gap-4 hover:opacity-80 transition-opacity'>
    <div className='w-12 h-12 bg-white flex justify-center items-center rounded-full flex-shrink-0 shadow-lg'>
      <svg className='w-[22px] h-[22px] fill-[#FF006E]' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
        <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z'/>
      </svg>
    </div>
    <div>
      <p className='text-sm text-white/70'>WhatsApp</p>
      <p className='text-base font-semibold text-white'>+44 7566 777617</p>
    </div>
  </a>

  <a href='https://www.google.com/maps/search/?api=1&query=1+Montague+Court,+19-21+Roxborough+Rd,+London,+United+Kingdom' target='_blank' rel='noopener noreferrer' className='flex items-center gap-4 hover:opacity-80 transition-opacity'>
    <div className='w-12 h-12 bg-white flex justify-center items-center rounded-full flex-shrink-0 shadow-lg'>
      <MapPin className='text-[#FF006E]' size={22} />
    </div>
    <div>
      <p className='text-sm text-white/70'>Address</p>
      <p className='text-base font-semibold text-white'>1 Montague Court, 19-21 Roxborough Rd , London, United Kingdom</p>
    </div>
  </a>

</div>

        {/* Right Side - Contact Form */}
        <div className='w-full lg:w-[50%] px-6 md:px-8 lg:px-12 py-8 md:py-12 lg:py-16 bg-gray-50'>
          
          <div className='mb-6 md:mb-8'>
            <p className='text-xs md:text-sm font-semibold text-[#FF006E] tracking-wide'>GET IN TOUCH</p>
            <h2 className='text-2xl md:text-3xl font-bold text-black mt-2'>Fill The Form Below</h2>
          </div>

          <form onSubmit={handleSubmit} className='flex flex-col gap-4 md:gap-5'>
            
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-green-700 text-sm font-medium">
                    Message sent successfully! We'll get back to you soon.
                  </p>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <p className="text-red-700 text-sm font-medium">
                    Failed to send message. Please try again or contact us directly.
                  </p>
                </div>
              </div>
            )}

            <div className='flex flex-col sm:flex-row gap-4'>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name *" 
                required
                className='w-full sm:w-1/2 px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FF006E] focus:outline-none focus:ring-2 focus:ring-[#FF006E]/20 transition-all'
              />
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="E-Mail *" 
                required
                className='w-full sm:w-1/2 px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FF006E] focus:outline-none focus:ring-2 focus:ring-[#FF006E]/20 transition-all'
              />
            </div>

            <div className='flex flex-col sm:flex-row gap-4'>
              <input 
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number" 
                className='w-full sm:w-1/2 px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FF006E] focus:outline-none focus:ring-2 focus:ring-[#FF006E]/20 transition-all'
              />
              <input 
                type="text" 
                name="website"
                value={formData.website}
                onChange={handleChange}
                placeholder="Your Website" 
                className='w-full sm:w-1/2 px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FF006E] focus:outline-none focus:ring-2 focus:ring-[#FF006E]/20 transition-all'
              />
            </div>

            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message Here *" 
              rows="5"
              required
              className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#FF006E] focus:outline-none focus:ring-2 focus:ring-[#FF006E]/20 transition-all resize-none'
            ></textarea>

            <button 
              type="submit"
              disabled={isSubmitting}
              className={`w-full sm:w-fit px-8 py-3 font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                isSubmitting 
                  ? 'bg-gray-400 cursor-not-allowed text-white' 
                  : 'bg-[#FF006E] text-white hover:bg-[#FF006E]/90 hover:shadow-lg hover:shadow-[#FF006E]/30'
              }`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </>
              ) : (
                'Submit Now'
              )}
            </button>

          </form>

        </div>

      </div>

    </section>
  )
}