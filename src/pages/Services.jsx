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
    <div>
        <div className='intro'>
            <Navbar active={'services'}/>
            <ImageForServicess image={shipping}/>
        </div>
        <div className='reverse-gradient'>
            <CarouselForService/>
            <FooterComponent/>
        </div>
    </div>
  )
}

export default Services