import React, { useState } from 'react'
import { GrSubtractCircle,GrAddCircle } from "react-icons/gr";
import {motion,AnimatePresence} from 'framer-motion'
const personnelList = [
  {
    "title": "Chairman/CEO",
    "name": "Osaki J. Braide",
    "education": "BSc, Business Administration (Marketing); MBA, Business Administration (Marketing) - Rivers State University of Science and Technology",
    "experience":
      <div className=' flex flex-col gap-2'>
        <p>
          Osaki Braide is the Managing Director/Chief Executive Officer & Founder of Tolobs Marine in 2006. His extensive work history in the Oil & Gas/Shipping spans over three decades. He brings to Tolobs Marine with depth of experience in the industry across the globe and with unparalleled entrepreneurial skills in new business development and various areas of management. His responsibilities at Tolobs Marine includes new business generation and overall management of the group.
        </p>
        <p>
          Prior to Tolobs Marine, Mr. Braide spent over 16 years with Delaney Petroleum Limited (DPL) a subsidiary of Trafigura group as Regional Manager. During his time at DPL, as a regional manager he was in charge of operations in Warri, Calabar, Bonny, Eket, Port Harcourt Jetties and ports.
        </p>
        <p>
          His carrier in the oil & gas sector began with Panalpina World Transport Limited (PWTL). He spent two years with (PWTL) as an Airfreight clerk before moving on to Schenker International Limited (SIL) as a Shipping/Boarding Clerk. While in Schenker International Limited, his responsibility is vessel logistics (clearing of vessels with various ports authorities)
        </p>
      </div>
  },
  {
    "title": "MD/Executive Director (Finance & Administration)",
    "name": "Belema K. Osaki-Braide",
    "education": "BSc, MBA in Business Administration (Management) - Rivers State University of Science and Technology",
    "experience": "Worked in banking and financial sectors. Co-founder of Tolobs Marine Services Ltd. Initially CEO and later MD/ED, Finance & Administration."
  },
  {
    "title": "General Manager",
    "name": "Emmanuel Omonayabipi",
    "education": "Advanced Diploma in Maritime Studies (Centre for Business, Greenwich London); Graduate Diploma in Transport Studies (London College for Advanced Transport Studies and City University London)",
    "experience": "Over 20 years in the Shipping and Marine industry. General Manager at Tolobs Marine."
  },
  {
    "title": "Operations Manager",
    "name": "Silas Etere Jumbo",
    "education": "HND in Office Management Technology - Yaba College of Technology",
    "experience": "Over 8 years in marine operations. Joined Tolobs Marine in 2011."
  },
  {
    "title": "Operations Manager II",
    "name": "Alafa-a Sonny Romeo",
    "education": "BSc in Business Administration (Marketing) - Rivers State University of Science and Technology",
    "experience": "Over 8 years in marine operations. Joined Tolobs Marine in 2009 as an Operations Officer."
  },
  {
    "title": "Company Secretary",
    "name": "Barrister Sobere Biambo",
    "experience": "Over 26 years of legal, company, and allied matters experience."
  },
  {
    "title": "Accounts, Invoice/Billing & ICT",
    "name": "Oladeji Tosin",
    "education": "Graduate of The Polytechnic Ibadan",
    "experience": "20 years of experience in IT-based solutions and marine operations. Joined Tolobs Marine in 2015 as the Accounts Officer and Head of ICT solutions."
  },
  {
    "title": "Marketing Officer",
    "name": "Soala Igonikon",
    "education": "BSc, Business Administration (Marketing) - Rivers State University of Science and Technology",
    "experience": "Joined Tolobs Marine in 2007 as the Marketing Officer."
  }
]
const DropDown = ({ title, name, education, experience }) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false)
  return (
    <div className='text-xl border-t border-b border-neutral-800'>
      <div className=' flex items-center justify-between w-full bg-[#6a9eb2] p-4'>
        <p className=' font-semibold text-2xl max-sm:text-xl'>{title}</p>
        {
          isDropDownOpen ?
            (
              <GrSubtractCircle className='text-4xl cursor-pointer' onClick={() => { setIsDropDownOpen((prev) => (!prev)) }}/>
              ) :
              (
                <GrAddCircle className='text-4xl cursor-pointer' onClick={() => { setIsDropDownOpen((prev) => (!prev)) }}/>
            )
        }
      </div>
      <AnimatePresence>
      {
        isDropDownOpen && (
            <motion.div 
            initial={{height:0}}
            animate={{height:'auto'}}
            exit={{height:0}}
            className='flex gap-2 flex-col select-none p-4 max-sm:text-base '>
              <p><span className='font-semibold block'>Name</span>{name}</p>
              <p><span className='font-semibold block'>Education</span>{education}</p>
              <p><span className='font-semibold block'>Experience</span>{experience}</p>
            </motion.div>
        )
      }
      {
      !isDropDownOpen &&  (

        <div className='w-full h-[0.01px] invisible'>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit beatae corporis, aperiam exercitationem quidem, incidunt quibusdam in accusantium cumque cupiditate iusto accusamus architecto modi nostrum velit odio possimus porro sit.</p>
        </div>
      )
      }
      </AnimatePresence>

    </div>
  )
}
const MeetOurLeadership = () => {
  return (
    <div className='flex flex-col gap-8 text-[#286189]'>
      <div>
        <h1 className=' text-4xl max-md:text-2xl max-sm:text-xl'>
          MEET OUR LEADERSHIP
        </h1>
      </div>
      <div className='flex flex-col '>
        {
          personnelList.map((item) => {
            return (
              <DropDown title={item.title} name={item.name} education={item.education} experience={item.experience} />
            )
          })
        }
      </div>
    </div>
  )
}

export default MeetOurLeadership