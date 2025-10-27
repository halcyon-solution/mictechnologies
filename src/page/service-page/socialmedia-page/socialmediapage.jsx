import React from 'react'
import SocialMediaHero from '../../../components/Services/SocialMedia/SocialMediaHero'
import SocialMediaType from '../../../components/Services/SocialMedia/SocialMediaType'
import SocialMediaServices from '../../../components/Services/SocialMedia/SocialMediaServices'
import ServiceWhyChoose from '../../../components/UI/ServiceWhyChoose'
import SocialMediaTools from '../../../components/Services/SocialMedia/SocialMediaTools'
import SocialMediaFaq from '../../../components/Services/SocialMedia/SocialMediaFaq'

export default function socialmediapage() {
  return (
    <main>
        <SocialMediaHero/>
        <SocialMediaType/>
        <SocialMediaServices/>
        <ServiceWhyChoose/>
        <SocialMediaTools/>
        <SocialMediaFaq/>
    </main>
  )
}
