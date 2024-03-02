import React from 'react'
import ServiceCard from './ServiceCard'
import solutions from '../../public/solutions.png'
import marine from '../../public/marine.png'
import shipping from '../../public/shipping.png'
import logistics from '../../public/logistics.png'
import { Link } from 'react-router-dom'

const IntroServices = () => {
  return (
    <div className='px-96 max-md:px-8 max-lg:px-16 max-2xl:px-32 max-sm:px-4  max-xl:px-16 py-16 pb-48 flex flex-col gap-[70px] relative'>
        <div className='grid grid-cols-2 max-md:grid-cols-1 gap-y-16 gap-x-56 max-lg:gap-x-8'>
            <ServiceCard title={'MARINE'} image={marine} text={'TOLOBS MARINE SUPPORTS VARIOUS PHASES OF OFFSHORE EXPLORATION, DEVELOPMENT AND PRODUCTION, INCLUDING ANCHOR HANDLING OF LAY BARGS AND MOBILE DRILLING RIGS; AS WELL AS ONSHORE OPERATIONS.'}/>
            <ServiceCard title={'LOGISTICS'} image={logistics} text={'AT TOLOBS MARINE, ONE OF OUR OBJECTIVES IN THE AREA OF SHIPPING IS TO BECOME A LEADING SHIPPING ORGANISATION OFFERING WORLD-CLASS PORT AND HUB AGENCY SERVICES.'}/>
            <ServiceCard title={'SHIPPING'} image={shipping} text={'TOLOBS MARINE SERVICES SPECIALISES IN A COMPREHENSIVE RANGE OF SUPPLY CHAIN AND LOGISTICS SOLUTIONS.'}/>
            <ServiceCard title={'MARINE'} image={marine} text={'TOLOBS MARINE SPECIALISES IN STRATEGIC TIE-UPS THAT MARRY ITS CAPABILITIES IN SHIPPING, LOGISTICS AND MARINE WITH THE SPECIALIST SERVICES OF ITS PARTNERS.'}/>
        </div>
        <Link data-aos='fade-up' to="/services" className='hover:bg-yellow-500 active:bg-yellow-600  text-neutral-600 bg-yellow-400 w-fit mx-auto px-12 py-3 text-xl'>OUR SERVICES</Link>
        <div class="custom-shape-divider-bottom-1704712485">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
                    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
                    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
                </svg>
            </div>
    </div>
  )
}

export default IntroServices