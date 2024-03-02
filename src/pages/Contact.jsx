import React, { useEffect } from 'react'
import ImageForCompany from '../components/ImageForCompany'
import Navbar from '../components/Navbar'
import ship from '../../public/contact_ship.png'
import CareersSection from '../components/ContactSection'
import FooterComponent from '../components/FooterComponent'
import ContactSection from '../components/ContactSection'

const Contact = () => {
    useEffect(()=>{
        document.title = 'Tolobs Marine | Contact'
      },[])
    return (
        <div className='intro'>
            <div className=''>
                <Navbar active={'contactus'}/>
                <ImageForCompany image={ship} />
            </div>
            <div className=''>
                <ContactSection/>
                <FooterComponent/>
            </div>
        </div>
    )
}

export default Contact