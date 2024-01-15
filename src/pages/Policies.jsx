import React, { useEffect } from 'react'
import ImageForCompany from '../components/ImageForCompany'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import ship from '../../public/solutions.jpg'
import CareerSection from '../components/CareerSection'
import CarouselForPolicy from '../components/CarousellForPolicy'
import IntroSectionForPolicy from '../components/IntroSectionForPolicy'
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
                <Footer />
            </div>
        </div>
    )
}

export default Policies