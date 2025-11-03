import React from 'react';
import SeoTopSection from '../../components/Seo/SeoTopSection';
import SeoBanner from '../../components/Seo/SeoBanner';
import SeoMarketing from '../../components/Seo/SeoMarketing';
import SeoDevelopment from '../../components/Seo/SeoDevelopment';


const Seo = () => {

return(
    <div >


         <SeoDevelopment/>
        <SeoTopSection />
        
        {/* <SeoBanner/> */}
        <SeoMarketing/>
    </div>
)

}


export default Seo;