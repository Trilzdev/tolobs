import React from 'react'

const Community = () => {
  return (
    <div className='flex flex-col gap-8 text-[#286189]'>
      <div>
        <h1 className=' text-4xl max-md:text-2xl max-sm:text-xl'>
          COMMUNITY AFFAIRS POLICY
        </h1>
      </div>
      <div className='text-xl max-sm:text-base flex flex-col gap-4'>
        <p>
          The company shall continue to source and enforce plans/actions that enhance
          cordial relationship with the host community. Such is executed through:
        </p>
      <div className=' text-xl max-sm:text-base px-4'>
        <ol className=' list-[roman] flex flex-col gap-2'>
          <li>
            Provision of employment or approved sub-contracts to the indigenes of
            the host community
          </li>
          <li>
            Concerted effort to acquaint employees of our (employee’s) community
            affairs policy/ procedure
          </li>
          <li>
            Give due recognition to the leadership and interest’s of the host
            community
          </li>
          <li>
            Submission to the Resident client Representative in the event of
            community disturbance.
          </li>
        </ol>
      </div>
      </div>
    </div>
  )
}

export default Community