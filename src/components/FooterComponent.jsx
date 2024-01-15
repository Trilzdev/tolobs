import React from 'react'
import logo from '../../public/logo.png'
import { IoMailSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const FooterComponent = () => {
  return (
    <footer className=' px-96 max-md:px-8 max-lg:px-16 max-2xl:px-32 max-sm:px-4  max-xl:px-16 py-16 flex flex-col gap-4'>
      <div className='flex justify-between items-center max-md:flex-col max-md:justify-center max-md:gap-4'>
        <div className='flex items-center gap-2 border-t-4 border-b-4 border-white py-2 text-white flex-wrap text-lg max-md:text-base'>
          <div className='flex gap-2'>
            <IoMailSharp />
            <a href="" className='hover:underline'>info@tolobsmarine.com</a>
          </div>
          <div className='flex gap-2'>
            <FaPhone />
            <p>+234 (0) 908 088 7770</p>
          </div>
        </div>
        <div>
          <img src={logo} alt="" />
        </div>
        <div className='border-t-4 border-b-4 border-white py-2 text-white text-lg max-md:text-base'>
          <p>COPYRIGHT © 2024 : TOLOBS MARINE SERVICES LIMITED</p>
        </div>
      </div>
      <div className=' text-white text-sm'>
        <Link to="/policies" className='hover:underline'>
          OUR POLICIES AND PROGRAMMES
        </Link>
      </div>
    </footer>
  )
}

export default FooterComponent