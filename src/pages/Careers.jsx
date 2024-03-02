import React, { useEffect } from 'react'
import ImageForCompany from '../components/ImageForCompany'
import Navbar from '../components/Navbar'
import ship from '../../public/ship-careers.png'
import CareerSection from '../components/CareerSection'
import FooterComponent from '../components/FooterComponent'
const Careers = () => {
    useEffect(()=>{
        document.title = 'Tolobs Marine | Careers'
      },[])
    return (
        <div className='intro'>
            <div className=''>
                <Navbar active={'careers'} />
                <ImageForCompany image={ship} />
            </div>
            <div className=''>
                <CareerSection/>
                <FooterComponent />
            </div>
        </div>
    )
}

export default Careers