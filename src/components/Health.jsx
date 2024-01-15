import React from 'react'
const safety_and_medical_guidelines = [
  "Provide a well-kitted first aid facility and sick bay manned by a trained first aider/nurse. Clinics and hospitals are also retained to handle difficult medical cases.",
  "Extend medical services to the employee's family in accordance with the terms and conditions of service.",
  "Conduct medical checks for employees as necessary.",
  "Provide adequate toilets and drinkable water for staff employees.",
  "Display notices as well as other information charts to caution/guard employees away from known dangers."
]

const Health = () => {
  return (
    <div className='flex flex-col gap-8 text-[#286189]'>
      <div>
        <h1 className=' text-4xl max-md:text-2xl max-sm:text-xl'>
          HEALTH POLICY
        </h1>
      </div>
      <div className='text-xl max-sm:text-base flex flex-col gap-4'>
        <p>
          The goal of health is to early detection and prevention of health hazards
          including communicable disease in the work area. In order to preserve good
          health of the employee TOLOBS MARINE SERVICES LIMITED:
        </p>
        <div className=' text-xl max-sm:text-base px-4'>
          <ol className=' list-[roman] flex flex-col gap-2'>
            {
              safety_and_medical_guidelines.map((item) => {
                return (<li>{item}</li>)
              })
            }
          </ol>
        </div>
      </div>
    </div>
  )
}

export default Health