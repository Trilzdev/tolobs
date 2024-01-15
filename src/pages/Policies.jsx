import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import CarouselForPolicy from '../components/CarousellForPolicy'
import IntroSectionForPolicy from '../components/IntroSectionForPolicy'
import FooterComponent from '../components/FooterComponent'
const Policies = () => {
    useEffect(()=>{
        document.title = 'Tolobs Marine | Careers'
      },[])
    return (
        <div>
            <div className='intro'>
                <Navbar active={"policies"} />
                <IntroSectionForPolicy/>
            </div>
            <div className='reverse-gradient'>
                <CarouselForPolicy/>
                <FooterComponent />
            </div>
        </div>
    )
}

export default Policies