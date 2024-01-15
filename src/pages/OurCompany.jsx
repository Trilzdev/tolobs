import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import ImageForCompany from '../components/ImageForCompany'
import CarouselForCompany from '../components/CarouselForCompany'
import Footer from '../components/footer'
import ship from '../../public/ship-our_company.png'

const OurCompany = () => {
  useEffect(()=>{
    document.title = 'Tolobs Marine | Our Company'
  },[])
  return (
    <div>
        <div className='intro'>
            <Navbar active={'company'}/>
            <ImageForCompany image={ship}/>
        </div>
        <div className='reverse-gradient'>
            <CarouselForCompany/>
            <Footer/>
        </div>
    </div>
  )
}

export default OurCompany