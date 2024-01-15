import React from 'react'
import shipping from '../../public/our_company_field_shipping.png'
import banking from '../../public/our_company_field_banking.png'
import law from '../../public/our_company_field_law.png'
import marketing from '../../public/our_company_field_marketing.png'
import operations from '../../public/our_company_field_operations.png'
import insurance from '../../public/our_company_field_insurance.png'

export const Services = ({image,title}) => {
  return (
    <div className=' flex items-center gap-4'>
      <img src={image} alt="" />
      <p className='text-xl max-sm:text-base'>{title}</p>
    </div>
  )
}

const Management = () => {
  const data = [
    {"title": "SHIPPING", "image": shipping},
    {"title": "INSURANCE AND RISK MANAGEMENT", "image": banking},
    {"title": "LAW OF CONTRACT AND CONTRACT MANAGEMENT", "image": law},
    {"title": "BANKING", "image": marketing},
    {"title": "MARKETING", "image": operations},
    {"title": "OPERATIONS MANAGEMENT AND ADMINISTRATION", "image": insurance}
]

  return (
    <div className='flex flex-col gap-8 text-[#286189]'>
      <div>
        <h1 className=' text-4xl max-md:text-2xl  max-sm:text-xl'>
          MANAGEMENT
        </h1>
      </div>
      <div className='text-xl max-sm:text-base flex flex-col gap-4'>
        <p>
        The realization that human resource management is the biggest challenge to any organization, the efficiency is a treasure that has influenced our organization chart cum management style.
        </p>
        <p>Our professional team of well-trained and internationally exposed individuals is within their various field of:</p>
      </div>
      <div className='grid grid-cols-2 max-md:grid-cols-1 gap-8'>
        {
          data.map((item)=>{
            return(
              <Services title={item.title} image={item.image}/>
            )
          })
        }
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default Management