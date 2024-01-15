import React, { useEffect } from 'react'
import ImageForCompany from '../components/ImageForCompany'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import ship from '../../public/ship-careers.png'
import CareerSection from '../components/CareerSection'
const Careers = () => {
    useEffect(()=>{
        document.title = 'Tolobs Marine | Careers'
      },[])
    return (
        <div>
            <div className='intro'>
                <Navbar active={'careers'} />
                <ImageForCompany image={ship} />
            </div>
            <div className='reverse-gradient'>
                <CareerSection/>
                <Footer />
            </div>
        </div>
    )
}

export default Careers