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
        <div className='intro'>
            <div className=''>
                <Navbar active={"policies"} />
                <IntroSectionForPolicy/>
            </div>
            <div className=''>
                <CarouselForPolicy/>
                <FooterComponent />
            </div>
        </div>
    )
}

export default Policies