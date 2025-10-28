import React from 'react'
import MobileTopSection from '../../components/Mobile/MobileTopSection'
import MobileDevelopmentSection from '../../components/Mobile/MobileDevelopmentSection'
import MobileDevelopmentServices from '../../components/Mobile/MobileDevelopmentServices'
import MobileDevelopmentPlatform from '../../components/Mobile/MobileDevelopmentPlatform'
import MobileQuestions from '../../components/Mobile/MobileQuestions'
import MobilePortfolio from '../../components/Mobile/MobilePortfolio'


const Mobile = () => {
  return (
    <section className='cursor-pointer'>
        <MobileTopSection/>
        <MobileDevelopmentSection/>
        <MobileDevelopmentServices/>
        <MobileDevelopmentPlatform/>
        <MobilePortfolio/>
        <MobileQuestions/>
    </section>
  )
}

export default Mobile
