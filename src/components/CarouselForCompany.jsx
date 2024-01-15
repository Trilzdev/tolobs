import React, { useState } from 'react'
import OurCompanyWriteUp from './OurCompanyWriteUp'
import Management from './Management'
import Operations from './Operations'
import MeetOurLeadership from './MeetOurLeadership'

const CarouselForCompany = () => {
    const [currentSlide,setCurrentSlide] = useState('company')
  return (
    <div className='px-96 max-md:px-8 max-lg:px-16 max-2xl:px-32 max-sm:px-4  max-xl:px-16 flex max-md:flex-col gap-8 ' >
        <div className=' flex flex-col gap-[1px]'>
            <button className={`py-[8px] bg-[#286189] text-white hover:bg-[#a3c2c2] w-64 max-md:w-full ${currentSlide === 'company'?'bg-[#a3c2c2]':''}`} onClick={()=>{setCurrentSlide('company')}}>Our Company</button>
            <button className={`py-[8px] bg-[#286189] text-white hover:bg-[#a3c2c2] w-64 max-md:w-full ${currentSlide === 'management'?'bg-[#a3c2c2]':''}`} onClick={()=>{setCurrentSlide('management')}}>Management</button>
            <button className={`py-[8px] bg-[#286189] text-white hover:bg-[#a3c2c2] w-64 max-md:w-full ${currentSlide === 'operations'?'bg-[#a3c2c2]':''}`} onClick={()=>{setCurrentSlide('operations')}}>Operations & Personnel</button>
            <button className={`py-[8px] bg-[#286189] text-white hover:bg-[#a3c2c2] w-64 max-md:w-full ${currentSlide === 'leadership'?'bg-[#a3c2c2]':''}`} onClick={()=>{setCurrentSlide('leadership')}}>Meet Our Leadership</button>
        </div>
        <>
        {
          currentSlide == 'company'&&
          (
            <div className=' appear min-h-[700px]'>
              <OurCompanyWriteUp/>
            </div>
          )
        }

           { currentSlide == 'management'&&
            (
              <div className=' appear min-h-[700px]'>
                <Management/>
              </div>
            )}

            {currentSlide == 'operations'&&
            (
              <div className=' appear min-h-[700px]'>
                <Operations/>
              </div>
            )}

            {currentSlide == 'leadership'&&
            (
              <div className=' appear min-h-[700px]'>
                <MeetOurLeadership/>
              </div>
            )}
        
        </>
    </div>
  )
}

export default CarouselForCompany