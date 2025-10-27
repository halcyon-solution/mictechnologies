import React from 'react'
import AboutTopSection from '../../components/About/AboutTopSection'
import AboutHero from '../../components/About/AboutHero'
import Aboutmystery from '../../components/About/Aboutmystery'
import AboutCore from '../../components/About/AboutCore'
import AboutWho from '../../components/About/AboutWho'

const About = () => {
  return (
    <div>
      <AboutTopSection/>
      <AboutWho/>
      <AboutHero/>
      <Aboutmystery/>
      <AboutCore/>
    </div>
  )
}

export default About
