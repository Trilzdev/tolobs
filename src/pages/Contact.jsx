import React, { useEffect } from 'react'
import ImageForCompany from '../components/ImageForCompany'
import Navbar from '../components/Navbar'
import ship from '../../public/contact_ship.png'
import CareersSection from '../components/ContactSection'
import FooterComponent from '../components/FooterComponent'

const Contact = () => {
    useEffect(()=>{
        document.title = 'Tolobs Marine | Contact'
      },[])
    return (
        <div>
            <div className='intro'>
                <Navbar active={'contactus'}/>
                <ImageForCompany image={ship} />
            </div>
            <div className='reverse-gradient'>
                <CareersSection/>
                <FooterComponent/>
            </div>
        </div>
    )
}

export default Contact