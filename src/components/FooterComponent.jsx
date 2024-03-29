import React from 'react'
import logo from '../../public/logo.png'
import { IoMailSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const FooterComponent = () => {
  return (
    <footer className='text-neutral-100 px-80 max-md:px-8 max-lg:px-16 max-2xl:px-32 bg-[#0a1a24] max-sm:px-4  max-xl:px-16  flex flex-col '>
      <div className=''>
        <div className='py-24 flex justify-between tracking-wider max-lg:flex-col max-lg:gap-12 max-md:px-4'>
          <div className='text-3xl max-md:text-2xl text-yellow-400 leading-[1.4]'>
            <p>A BUSINESS<br />ABOUT <span className='bg-yellow-400 text-neutral-800 title-home'>PEOPLE.</span></p>
          </div>
          <div className=' flex gap-x-32 max-md:gap-x-0 max-md:flex-col max-md:gap-y-10'>
            <div className='flex flex-col gap-4 text-lg max-md:text-base font-medium'>
              <p className='text-yellow-400 text-2xl'>Contact Info</p>
              <div className='flex flex-col gap-2 font-normal'>
                <a className='flex items-center gap-[6px] hover:text-yellow-500 duration-200 active:text-neutral-300'><IoMailSharp/>info@tolobsmarinegrp.com</a>
                <p className='flex items-center gap-[6px]'><FaPhone/>+234 (0)80 3461 9286</p>
              </div>
            </div>
            <div className='flex flex-col gap-4 text-lg max-md:text-base font-semibold'>
              <p className='text-yellow-400 text-2xl max-md:text-lg'>Links</p>

              <div className='flex flex-col gap-2 font-normal'>
                <Link to="/" className='hover:text-yellow-500 duration-200 active:text-neutral-300' >Home</Link>
                <Link to="/services" className='hover:text-yellow-500 duration-200 active:text-neutral-300' >Services</Link>
                <Link to="/careers" className='hover:text-yellow-500 duration-200 active:text-neutral-300' >Career</Link>
                <Link to='/contact'className='hover:text-yellow-500 duration-200 active:text-neutral-300' >Contact</Link>
              </div>
            </div>
            <div className='flex flex-col gap-4 text-lg font-semibold'>
              <p className='text-yellow-400 text-2xl'>Legal</p>
              <div className='flex flex-col gap-2 font-normal'>
                <Link  to='/our-company' className='hover:text-yellow-500 duration-200 active:text-neutral-300' >Our Company</Link>
                <Link to='/policies' className='hover:text-yellow-500 duration-200 active:text-neutral-300' >Policy</Link>
              </div>
            </div>
          </div>
          <div className='h-14'>
            <img src={logo} alt="" className='h-full' />
          </div>
        </div>
        <div className=' py-3 text-center text-lg font-medium max-sm:text-base'>
          <p>COPYRIGHT © 2024 : TOLOBS MARINE SERVICES LIMITED</p>
        </div>
      </div>
    </footer>
  )
}

export default FooterComponent