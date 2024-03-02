import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import ImageForCompany from '../components/ImageForCompany'
import CarouselForCompany from '../components/CarouselForCompany'
import ship from '../../public/ship-our_company.png'
import FooterComponent from '../components/FooterComponent'

const OurCompany = () => {
  useEffect(()=>{
    document.title = 'Tolobs Marine | Our Company'
  },[])
  return (
    <div className='intro'>
        <div className=''>
            <Navbar active={'company'}/>
            <ImageForCompany image={ship}/>
        </div>
        <div className=''>
            <CarouselForCompany/>
            <FooterComponent/>
        </div>
    </div>
  )
}

export default OurCompany