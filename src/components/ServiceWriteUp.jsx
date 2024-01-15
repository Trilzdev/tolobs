import React from 'react'
const data = [
    {
      "title": "Ship Brokering",
      "writeup": "We undertake all kinds of ship brokering for vessel owners and vessel users."
    },
    {
      "title": "Ship’s Chandler/Crew Change Service",
      "writeup": "We undertake all forms of ship supply and needs, as well as crew changing."
    },
    {
      "title": "Hiring of Marine Hoses",
      "writeup": "We rent marine fenders, hoses, and tug boats for STS Operation."
    },
    {
      "title": "STS Operation",
      "writeup": "We render service for STS Operations both onshore and offshore."
    },
    {
      "title": "Bunkering Services",
      "writeup": "We offer all forms of support services and storage vessels to users and dealers. We also supply bunkers and water to vessels."
    },
    {
      "title": "Support Vessel Rentals",
      "writeup": "We provide light and semi-light vessels for oil companies’ operations, so that companies can use support vessels on term charter basis."
    }
  ]
  
const ServiceWriteUp = () => {
  return (
    <div className='flex flex-col gap-4 text-[#286189]'>
      <div>
        <h1 className=' text-4xl max-md:text-2xl max-sm:text-xl'>
        SERVICES
        </h1>
      </div>
      <div className='text-xl max-sm:text-base'>
        <p>
            TOLOBSMARINE Nigeria Limited is an indigenous company specializes in shipping & maritime services located in Port Harcourt, Rivers State with offices in Lagos, Warri, Calabar. Our range of services include the followings:
        </p>
      </div>
      <div className=' flex flex-col gap-2'>
        {
            data.map((item)=>{
                return(
                    <div className='text-xl max-sm:text-base'>
                        <p className=' font-semibold'>{item.title}</p>
                        <p>{item.writeup}</p>
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default ServiceWriteUp