import React from 'react'
import ServiceCard from './ServiceCard'
import solutions from '../../public/solutions.png'
import marine from '../../public/marine.png'
import shipping from '../../public/shipping.png'
import logistics from '../../public/logistics.png'

const IntroServices = () => {
  return (
    <div className='px-96 max-md:px-8 max-lg:px-16 max-2xl:px-32 max-sm:px-4  max-xl:px-16 py-16 flex flex-col gap-8'>
        <div className='grid grid-cols-2 max-md:grid-cols-1 gap-y-16 gap-x-56 max-lg:gap-x-8'>
            <ServiceCard title={'MARINE'} image={marine} text={'TOLOBS MARINE SUPPORTS VARIOUS PHASES OF OFFSHORE EXPLORATION, DEVELOPMENT AND PRODUCTION, INCLUDING ANCHOR HANDLING OF LAY BARGS AND MOBILE DRILLING RIGS; AS WELL AS ONSHORE OPERATIONS.'}/>
            <ServiceCard title={'LOGISTICS'} image={logistics} text={'AT TOLOBS MARINE, ONE OF OUR OBJECTIVES IN THE AREA OF SHIPPING IS TO BECOME A LEADING SHIPPING ORGANISATION OFFERING WORLD-CLASS PORT AND HUB AGENCY SERVICES.'}/>
            <ServiceCard title={'SHIPPING'} image={shipping} text={'TOLOBS MARINE SERVICES SPECIALISES IN A COMPREHENSIVE RANGE OF SUPPLY CHAIN AND LOGISTICS SOLUTIONS.'}/>
            <ServiceCard title={'MARINE'} image={marine} text={'TOLOBS MARINE SPECIALISES IN STRATEGIC TIE-UPS THAT MARRY ITS CAPABILITIES IN SHIPPING, LOGISTICS AND MARINE WITH THE SPECIALIST SERVICES OF ITS PARTNERS.'}/>
        </div>
        <a data-aos='fade-up' href="/services" className='border border-yellow-400  text-yellow-400 w-fit mx-auto px-6 py-2 text-xl'>OUR SERVICES</a>
    </div>
  )
}

export default IntroServices