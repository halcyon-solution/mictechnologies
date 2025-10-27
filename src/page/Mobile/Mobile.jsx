import React from 'react'
import MobileTopSection from '../../components/Mobile/MobileTopSection'
import MobileHeroSection from '../../components/Mobile/MobileHeroSection'
import MobileDevelopmentSection from '../../components/Mobile/MobileDevelopmentSection'
import MobileDevelopmentServices from '../../components/Mobile/MobileDevelopmentServices'
import MobileDevelopmentPlatform from '../../components/Mobile/MobileDevelopmentPlatform'
import MobileQuestions from '../../components/Mobile/MobileQuestions'

const Mobile = () => {
  return (
    <section className='cursor-pointer'>
        <MobileTopSection/>
        <MobileHeroSection/>
        <MobileDevelopmentSection/>
        <MobileDevelopmentServices/>
        <MobileDevelopmentPlatform/>
        <MobileQuestions/>
    </section>
  )
}

export default Mobile
