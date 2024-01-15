import React from 'react'
import CareerForm from './CareerForm'

const CareerSection = () => {
    return (
        <div className=' px-96 max-md:px-8 max-lg:px-16 max-2xl:px-32 max-sm:px-4  max-xl:px-16 py-8'>
            <div className='flex flex-col gap-8 text-[#286189]'>
                <div>
                    <h1 className=' text-4xl max-md:text-2xl max-sm:text-xl'>
                        CAREERS
                    </h1>
                </div>
                <div className='text-xl max-sm:text-base flex flex-col gap-4'>
                    <p>
                        Interested in working with us? Please fill this form and we will get in touch:
                    </p>
                </div>
                <CareerForm />
            </div>
        </div>
    )
}

export default CareerSection