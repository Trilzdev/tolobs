import React from 'react'
const ServiceCard = ({image,title,text}) => {
  return (
    <div data-aos='fade-up' data-aos-duration='900' className=' flex flex-col gap-4'>
        <div className=''>
            <img src={image} alt="" />
        </div>
        <div className='flex flex-col gap-[6px]'>
            <h2 className=' text-neutral-100 text-2xl max-sm:text-xl font-semibold'>{title}</h2>
            <p className=' text-neutral-400 text-xl w-[420px] max-sm:text-base max-lg:w-auto'>
            {text}
            </p>
        </div>
    </div>
  )
}

export default ServiceCard