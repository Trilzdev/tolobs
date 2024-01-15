import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import shipping from '../../public/shipping-depot.jpg'
import CarouselForService from '../components/CarouselForService'
import ImageForServicess from '../components/ImageForServices'
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
            <Footer/>
        </div>
    </div>
  )
}

export default Services