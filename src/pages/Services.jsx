import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import shipping from '../../public/shipping-depot.jpg'
import CarouselForService from '../components/CarouselForService'
import ImageForServicess from '../components/ImageForServices'
import FooterComponent from '../components/FooterComponent'
const Services = () => {
  useEffect(()=>{
    document.title = 'Tolobs Marine | Services'
  },[])
  return (
    <div className='intro'>
        <div className=''>
            <Navbar active={'services'}/>
            <ImageForServicess />
        </div>
        <div className=''>
            <CarouselForService/>
            <FooterComponent/>
        </div>
    </div>
  )
}

export default Services