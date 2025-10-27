import React from 'react'
import GraphicHeroSection from '../../../components/Services/GraphicDesign/GraphicHeroSection'
import GraphicApproach from '../../../components/Services/GraphicDesign/GraphicApproach'
import GraphicService from '../../../components/Services/GraphicDesign/GraphicService'
import ServiceWhyChoose from '../../../components/UI/ServiceWhyChoose'
import GraphicTools from '../../../components/Services/GraphicDesign/GraphicTools'
import GraphicFaq from '../../../components/Services/GraphicDesign/GraphicFaq'

export default function graphicpage() {
  return (
    <main>
       <GraphicHeroSection/> 
       <GraphicApproach/>
       <GraphicService/>
       < ServiceWhyChoose/>
       <GraphicTools/>
       <GraphicFaq/>
        </main>
  )
}
