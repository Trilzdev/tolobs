import React from 'react'
const environmental_management_guidelines = [
  "In addition to statutory requirements by the Federal Environmental Protection Agency (FEPA) to carry out a study of the work area, professional/consultant waste managers are used when necessary.",
  "Refuse bins and waste collection dumps are provided in acceptable places.",
  "Care is taken to ensure that avoided waste/pollutants are not generated in the operation.",
  "The CASHES head conducts a monthly environmental audit and submits a report to the managing director."
]

const Environment = () => {
  return (
    <div className='flex flex-col gap-8 text-neutral-100'>
      <div>
        <h1 className=' text-4xl max-md:text-2xl max-sm:text-xl'>
         ENVIRONMENT POLICY
        </h1>
      </div>
      <div className='text-xl max-sm:text-base flex flex-col gap-4'>
      <div className=' text-xl max-sm:text-base px-4'>
        <ol className=' list-[roman] flex flex-col gap-2'>
          {
            environmental_management_guidelines.map((item)=>{
              return(
                <li>{item}</li>
              )
            })
          }
        </ol>
      </div>
      </div>
    </div>
  )
}

export default Environment