import React, { useState } from 'react'
import ServiceWriteUp from './ServiceWriteUp'
import Quality from './Quality'
import Clients from './Clients'
import Vessels from './Vessels'

const CarouselForService = () => {
    const [currentSlide,setCurrentSlide] = useState('services')
  return (
    <div className='px-96 max-md:px-8 max-lg:px-16 max-2xl:px-32 max-sm:px-4  max-xl:px-16 flex max-md:flex-col gap-8 py-8'>
        <div className=' flex flex-col gap-[1px]'>
            <button className={`py-[8px] bg-[#286189] text-white hover:bg-[#a3c2c2] w-64 max-md:w-full ${currentSlide === 'services'?'bg-[#a3c2c2]':''}` }onClick={()=>{setCurrentSlide('services')}}>Services</button>
            <button className={`py-[8px] bg-[#286189] text-white hover:bg-[#a3c2c2] w-64 max-md:w-full ${currentSlide === 'quality'?'bg-[#a3c2c2]':''}` }onClick={()=>{setCurrentSlide('quality')}}>Quality Assurance</button>
            <button className={`py-[8px] bg-[#286189] text-white hover:bg-[#a3c2c2] w-64 max-md:w-full ${currentSlide === 'clients'?'bg-[#a3c2c2]':''}` }onClick={()=>{setCurrentSlide('clients')}}>Clients</button>
            <button className={`py-[8px] bg-[#286189] text-white hover:bg-[#a3c2c2] w-64 max-md:w-full ${currentSlide === 'vessels'?'bg-[#a3c2c2]':''}` }onClick={()=>{setCurrentSlide('vessels')}}>Vessels Handled</button>
        </div>
        <>
            {currentSlide === 'services'&&
            (
              <div className='appear'>
                <ServiceWriteUp/>
              </div>
            )}

            {currentSlide === 'quality'&&
            (
              <div className='appear'>
                <Quality/>
              </div>
            )}

            {currentSlide === 'clients'&&
            (
              <div className='appear'>
                <Clients/>
              </div>
            )}
            {currentSlide === 'vessels'&&
            (
              <div className='appear'>
                <Vessels/>
              </div>
            )}
        
        </>
    </div>
  )
}
export default CarouselForService