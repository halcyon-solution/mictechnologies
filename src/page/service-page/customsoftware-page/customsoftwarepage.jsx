import React from 'react'
import CustomHeroSection from '../../../components/Services/CustomSoftware/CustomHeroSection'
import PersonalizedSolution from '../../../components/Services/CustomSoftware/PersonalizedSolution'
import CustomSoftwareServices from '../../../components/Services/CustomSoftware/CustomSoftwareServices'
import ServiceWhyChoose from '../../../components/UI/ServiceWhyChoose'
import CustomTechnologies from '../../../components/Services/CustomSoftware/CustomTechnologies'
import CustomFaq from '../../../components/Services/CustomSoftware/CustomFaq'


export default function customsoftwarepage() {
  return (
    <div className=''>
           <CustomHeroSection/>
           <PersonalizedSolution/>
           <CustomSoftwareServices/>
           <ServiceWhyChoose/>
           <CustomTechnologies/>
           <CustomFaq/>
    </div>
  )
}
