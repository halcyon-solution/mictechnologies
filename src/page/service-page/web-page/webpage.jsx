import React from 'react'
import WebHero from '../../../components/Services/WebDevlopment/WebHero'
import WebTailorSol from '../../../components/Services/WebDevlopment/WebTailorSol'
import WebServices from '../../../components/Services/WebDevlopment/WebServices'
import ServiceWhyChoose from '../../../components/UI/ServiceWhyChoose'
import WebFaq from '../../../components/Services/WebDevlopment/WebFaq'

export default function webpage() {
  return (
   <main>
    <WebHero/>
    <WebTailorSol/>
    <WebServices/>
    <ServiceWhyChoose/>
    <WebFaq/>
   </main>
  )
}
