import React, { useState } from 'react'
import logo from '../../public/logo.png'
import { MdMenu,MdClose } from 'react-icons/md'
const Navbar = ({ active }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className=' px-96 max-md:px-8 max-lg:px-16 max-2xl:px-32 max-sm:px-4  max-xl:px-16 py-6 flex justify-between text-white items-center relative'>
      <div className='h-18 max-md:h-12 relative' data-aos="fade-up" data-aos-duration='1000'>
        <a href="/">
          <img src={logo} alt="" className='h-full' />
        </a>
      </div>
      <div className='text-xl font-light flex gap-6 max-md:hidden'>
        <a href="/" className={`hover:text-yellow-400 ${active === 'home' ? 'text-yellow-400' : ''}`}>HOME</a>
        <a href="/our-company" className={`hover:text-yellow-400 ${active === 'company' ? 'text-yellow-400' : ''}`}>OUR COMPANY</a>
        <a href="/services" className={`hover:text-yellow-400 ${active === 'services' ? 'text-yellow-400' : ''}`}>SERVICES</a>
        <a href="/careers" className={`hover:text-yellow-400 ${active === 'careers' ? 'text-yellow-400' : ''}`}>CAREERS</a>
        <a href="/contact" className={`hover:text-yellow-400 ${active === 'contactus' ? 'text-yellow-400' : ''}`}>CONTACT</a>
      </div>
      <div className={`text-4xl p-4 md:hidden ${menuOpen === true? 'bg-yellow-400': ''}`} >
        {
          menuOpen?
          (
            <MdClose onClick={() => { setMenuOpen((prev) => !prev) }} />
          ):
          (
            <MdMenu onClick={() => { setMenuOpen((prev) => !prev) }} />
          )
        }
      </div>
      {
        menuOpen && (
          <div className=' py-4 pb-16 pt-8 px-4 md:hidden  bg-[#286189] absolute top-28 box right-5 z-50'>
            <div className='text-base font-light flex flex-col gap-2 '>
              <a href="/" className={`hover:text-yellow-400 py-2 pl-2 pr-24 ${active === 'home' ? 'text-yellow-400' : ''}`}>HOME</a>
              <a href="/our-company" className={`hover:text-yellow-400 py-2 pl-2 pr-24 ${active === 'company' ? 'text-yellow-400' : ''}`}>OUR COMPANY</a>
              <a href="/services" className={`hover:text-yellow-400 py-2 pl-2 pr-24 ${active === 'services' ? 'text-yellow-400' : ''}`}>SERVICES</a>
              <a href="/careers" className={`hover:text-yellow-400 py-2 pl-2 pr-24 ${active === 'careers' ? 'text-yellow-400' : ''}`}>CAREERS</a>
              <a href="/contact" className={`hover:text-yellow-400 py-2 pl-2 pr-24 ${active === 'contactus' ? 'text-yellow-400' : ''}`}>CONTACT</a>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Navbar