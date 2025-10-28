import React from 'react'
import WebHero from '../../../components/Services/WebDevlopment/WebHero'
import WebTailorSol from '../../../components/Services/WebDevlopment/WebTailorSol'
import WebServices from '../../../components/Services/WebDevlopment/WebServices'
import ServiceWhyChoose from '../../../components/UI/ServiceWhyChoose'
import WebFaq from '../../../components/Services/WebDevlopment/WebFaq'
import WebTools from '../../../components/Services/WebDevlopment/WebTools'
import WebPortfolio from '../../../components/Services/WebDevlopment/WebPortfolio'


export default function webpage() {
  return (
   <main className='overflow-x-hidden'>
    <WebHero/>
    <WebTailorSol/>
    <WebServices/>

     <ServiceWhyChoose/>
    <WebTools/>
        <WebPortfolio/>
    <WebFaq/>
   </main>
  )
}
