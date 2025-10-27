import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Homepage from './page/home-page/homepage'
import Navbar from './components/UI/Navbar'
import Footer from './components/Home/Footer'
import About from './page/About/About'
import Contact from './page/Contact/Contact'
import CustomSoftwarePage from './page/service-page/customsoftware-page/customsoftwarepage'
import Graphicpage from './page/service-page/graphic-page/graphicpage'
import SocialHeroSection from './components/Services/SocialMedia/SocialMediaHero'
import Socialmediapage from './page/service-page/socialmedia-page/socialmediapage'
import Webpage from './page/service-page/web-page/webpage'


// ScrollToTop component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App(){
  return (  
    <Router>
      <ScrollToTop />
      <Navbar/>
      <main className='pt-20'> {/* Navbar ki height ke barabar */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/custom-software" element={<CustomSoftwarePage/>}/>
          <Route path="/services/graphic-design" element={<Graphicpage/>}/>
          <Route path="/services/social-media" element={<Socialmediapage/>}/>
          <Route path="/services/web-development" element={<Webpage/>}/>
        </Routes>
      </main>
      <Footer/>
    </Router>
  )
}