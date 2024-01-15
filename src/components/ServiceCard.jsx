import React from 'react'
const ServiceCard = ({image,title,text}) => {
  return (
    <div data-aos='fade-up' className=' flex flex-col gap-4'>
        <div className=''>
            <img src={image} alt="" />
        </div>
        <div>
            <h2 className=' text-[#26414c] text-2xl max-sm:text-xl font-semibold'>{title}</h2>
            <p className=' text-[#668fac] text-xl w-[420px] max-sm:text-base max-lg:w-auto'>
            {text}
            </p>
        </div>
    </div>
  )
}

export default ServiceCard