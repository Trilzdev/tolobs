import React from 'react'
import waterlarge from '../../public/waterdrop-large.png'
import watersmall from '../../public/waterdrop-small.png'
import watermedium from '../../public/waterdrop-medium.png'
import {motion} from 'framer-motion'
const IntroSection = () => {
    return (
        <div className='  px-96 max-md:px-8 max-lg:px-16 max-2xl:px-32 max-sm:px-4  max-xl:px-16 flex max-md:flex-col justify-between max-md:items-center max-md:gap-16 py-16 relative'>
            <div className='intro_writeup  flex flex-col gap-12'>
                <motion.h1 initial={{x:'100px'}} animate={{x:'0px'}} transition={{duration:1}} className=' text-yellow-400 text-4xl max-sm:text-2xl'>A BUSINESS <br />
                    ABOUT PEOPLE.
                <p className=' text-white text-2xl max-sm:text-xl pt-4'>
                    IN SEVERAL LOCATIONS AROUND <br />
                    THE GLOBE, WE PROVIDE <br />
                    HIGH-QUALITY SHIPPING, LOGISTICS <br />
                    AND MARINE SERVICES. <br />
                </p>
                </motion.h1>
                <motion.p initial={{x:'100px'}} animate={{x:'0px'}} transition={{delay:0.5,duration:1}} className='text-white text-2xl max-sm:text-xl'>
                    WE'RE THERE WHEREVER YOU GO <br />
                    AND WITH MORE THAN A SCORE <br />
                    EMPLOYEES AND HALF A DECADE <br />
                    OF EXPERIENCE, WE MAKE SURE <br />
                    THINGS ALWAYS GO RIGHT. <br />
                </motion.p>
                <motion.a initial={{x:'100px'}} animate={{x:'0px'}} transition={{delay:1,duration:1}} href="/our-company" className='border-2 border-yellow-400  text-yellow-400 w-fit px-6 py-2 text-2xl max-sm:text-xl'>ABOUT US</motion.a>
            </div>
            <div className='intro_images w-max px-16  relative'>
                    <motion.div initial={{y:'-100px',opacity:0.2}} animate={{y:'0px',opacity:1}} transition={{duration:1}} className='w-[400px] max-md:w-[300px] max-sm:w-[260px] drop'>
                        <img src={waterlarge} alt="" />
                    </motion.div>
                    <motion.div initial={{y:'-150px',opacity:0.2}} animate={{y:'0px',opacity:1}} transition={{duration:1.5,delay:0.1}} className='absolute left-0 top-6 max-md:w-[150px] max-sm:w-[130px] drop'>
                        <img src={watersmall} alt="" />
                    </motion.div>
                    <motion.div initial={{y:'-100px',opacity:0.2}} animate={{y:'0px',opacity:1}} transition={{duration:0.7,delay:0.1}} className='absolute right-0 top-24 max-md:w-[200px] max-sm:w-[180px] drop'>
                        <img src={watermedium} alt="" />
                    </motion.div>
            </div>
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

export default IntroSection