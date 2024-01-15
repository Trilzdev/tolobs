import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import IntroSection from '../components/IntroSection'
import IntroServices from '../components/IntroServices'
import Footer from '../components/footer'
const Home = () => {
  useEffect(()=>{
    document.title = 'Tolobs Marine | Home'

  },[])
  return (
    <div className=' '>
        <div className='intro'>
            <Navbar active={'home'}/>
            <IntroSection/>
        </div>
        <div className='reverse-gradient'>
            <IntroServices/>
            <Footer/>
        </div>
    </div>
  )
}

export default Home