import React, { useState } from 'react'
import ServiceWriteUp from './ServiceWriteUp'
import Quality from './Quality'
import Clients from './Clients'
import Community from './Community'
import Safety from './Safety'
import Health from './Health'
import Environment from './Environment'
import Security from './Security'
import Evaluation from './Evaluation'
import Awareness from './Awareness'
import Response from './Response'

const CarouselForPolicy = () => {
    const [currentSlide,setCurrentSlide] = useState('community')
  return (
    <div className='px-96 max-md:px-8 max-lg:px-16 max-2xl:px-32 max-sm:px-4  max-xl:px-16 flex max-md:flex-col gap-8 py-8'>
        <div className=' flex flex-col gap-[1px]'>
            <button className={`py-[8px] bg-[#286189] text-white hover:bg-[#a3c2c2] w-64 max-md:w-full  ${currentSlide === 'community'?'bg-[#a3c2c2]':''}` }onClick={()=>{setCurrentSlide('community')}}>Community Affairs Policy</button>
            <button className={`py-[8px] bg-[#286189] text-white hover:bg-[#a3c2c2] w-64 max-md:w-full  ${currentSlide === 'safety'?'bg-[#a3c2c2]':''}` }onClick={()=>{setCurrentSlide('safety')}}>Safety Policy</button>
            <button className={`py-[8px] bg-[#286189] text-white hover:bg-[#a3c2c2] w-64 max-md:w-full  ${currentSlide === 'health'?'bg-[#a3c2c2]':''}` }onClick={()=>{setCurrentSlide('health')}}>Health Policy</button>
            <button className={`py-[8px] bg-[#286189] text-white hover:bg-[#a3c2c2] w-64 max-md:w-full  ${currentSlide === 'environment'?'bg-[#a3c2c2]':''}` }onClick={()=>{setCurrentSlide('environment')}}>Environment Policy</button>
            <button className={`py-[8px] bg-[#286189] text-white hover:bg-[#a3c2c2] w-64 max-md:w-full  ${currentSlide === 'security'?'bg-[#a3c2c2]':''}` }onClick={()=>{setCurrentSlide('security')}}>Security Policy</button>
            <button className={`py-[8px] bg-[#286189] text-white hover:bg-[#a3c2c2] w-64 max-md:w-full  ${currentSlide === 'evaluation'?'bg-[#a3c2c2]':''}` }onClick={()=>{setCurrentSlide('evaluation')}}>CASHES Project Evaluation Programme</button>
            <button className={`py-[8px] bg-[#286189] text-white hover:bg-[#a3c2c2] w-64 max-md:w-full  ${currentSlide === 'awareness'?'bg-[#a3c2c2]':''}` }onClick={()=>{setCurrentSlide('awareness')}}>CASHES Educational Awareness Programme</button>
            <button className={`py-[8px] bg-[#286189] text-white hover:bg-[#a3c2c2] w-64 max-md:w-full  ${currentSlide === 'response'?'bg-[#a3c2c2]':''}` }onClick={()=>{setCurrentSlide('response')}}>CASHES Contingency/Quick Response Programme</button>
        </div>
        <>
            {currentSlide === 'community'&&
            (
              <div className='appear'>
                <Community/>
              </div>
            )}

            {currentSlide === 'safety'&&
            (
              <div className='appear'>
                <Safety/>
              </div>
            )}

            {currentSlide === 'health'&&
            (
              <div className='appear'>
                <Health/>
              </div>
            )}
            {currentSlide === 'environment'&&
            (
              <div className='appear'>
                <Environment/>
              </div>
            )}
            {currentSlide === 'security'&&
            (
              <div className='appear'>
                <Security/>
              </div>
            )}
            {currentSlide === 'evaluation'&&
            (
              <div className='appear'>
                <Evaluation/>
              </div>
            )}
            {currentSlide === 'awareness'&&
            (
              <div className='appear'>
                <Awareness/>
              </div>
            )}
            {currentSlide === 'response'&&
            (
              <div className='appear'>
                <Response/>
              </div>
            )}
        
        </>
    </div>
  )
}
export default CarouselForPolicy