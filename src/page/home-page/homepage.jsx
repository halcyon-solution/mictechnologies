import React from 'react'
import HeroSection from '../../components/Home/HeroSection'
import Navbar from '../../components/UI/Navbar'
import AboutSection from '../../components/Home/AboutSection'
import FeatureServices from '../../components/Home/FeatureServices'
import CaseStudy from '../../components/Home/CaseStudy'
import WhyChooseUs from '../../components/Home/WhyChooseUs'
import GetinTouch from '../../components/Home/GetinTouch'
import CTA from '../../components/Home/CTA'


export default function homepage() {
  return (
    <main className=''>
        <HeroSection/>
        <AboutSection/>
                <FeatureServices/>
        <WhyChooseUs/>
    <CaseStudy/>
    <GetinTouch/>
    <CTA/>
    </main>
  )
}
