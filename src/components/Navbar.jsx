import React, { useState } from 'react'
import logo from '../../public/logo.png'
import { MdMenu,MdClose } from 'react-icons/md'
import { Link } from 'react-router-dom'
import {motion,AnimatePresence} from 'framer-motion'
const Navbar = ({ active }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <nav className='balpha px-80 max-md:px-8 max-lg:px-16 max-2xl:px-32 max-sm:px-4  max-xl:px-16 py-4 flex justify-between text-white items-center relative'>
      <div className='h-18 max-md:h-12 relative' data-aos="fade-up" data-aos-duration='1000'>
        <Link to="/">
          <img src={logo} alt="" className='h-full' loading='eager'/>
        </Link>
      </div>
      <div className='text-xl flex gap-6 max-md:hidden'>
        <Link to="/" className={`hover:text-yellow-400 ${active === 'home' ? 'text-yellow-400' : ''}`}>HOME</Link>
        <Link to="/our-company" className={`hover:text-yellow-400 ${active === 'company' ? 'text-yellow-400' : ''}`}>OUR COMPANY</Link>
        <Link to="/services" className={`hover:text-yellow-400 ${active === 'services' ? 'text-yellow-400' : ''}`}>SERVICES</Link>
        <Link to="/careers" className={`hover:text-yellow-400 ${active === 'careers' ? 'text-yellow-400' : ''}`}>CAREERS</Link>
        <Link to="/contact" className={`hover:text-yellow-400 ${active === 'contactus' ? 'text-yellow-400' : ''}`}>CONTACT</Link>
      </div>
      <div className={`text-4xl text-neutral-300 cursor-pointer p-2 md:hidden duration-200 ${menuOpen === true? 'bg-gray-800 text-white': ''}`} >
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
          <motion.div initial={{height:'0px',overflow:'hidden'}} animate={{height:'auto'}} transition={{duration:1,type:'tween'}} className=' py-4 pb-10 pt-8 px-4 md:hidden balpha  absolute top-28 shadow-2xl right-5 z-50'>
            <div className='text-base font-light flex flex-col gap-2 '>
              <Link to="/" className={`hover:text-yellow-400 font-medium py-2 pl-2 pr-10 ${active === 'home' ? 'text-yellow-400' : ''}`}>Home</Link>
              <Link to="/our-company" className={`hover:text-yellow-400 font-medium py-2 pl-2 pr-10 ${active === 'company' ? 'text-yellow-400' : ''}`}>Our Company</Link>
              <Link to="/services" className={`hover:text-yellow-400 font-medium py-2 pl-2 pr-10 ${active === 'services' ? 'text-yellow-400' : ''}`}>Services</Link>
              <Link to="/careers" className={`hover:text-yellow-400 font-medium py-2 pl-2 pr-10 ${active === 'careers' ? 'text-yellow-400' : ''}`}>Careers</Link>
              <Link to="/contact" className={`hover:text-yellow-400 font-medium py-2 pl-2 pr-10 ${active === 'contactus' ? 'text-yellow-400' : ''}`}>Contact</Link>
            </div>
          </motion.div>
        )
      }
    </nav>
  )
}

export default Navbar