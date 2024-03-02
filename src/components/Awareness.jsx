import React from 'react'
const community_engagement_goals = [
    "To acquaint the community properly with the coming project and the project plan.",
    "To assure the host community of our CASHES ambition and plan.",
    "To express interest in the community's economic and social affairs and solicit for the community's support.",
    "To know the community leaders and establish a lifeline of community relations.",
    "For joint project site inspection and to obtain vital information for the benefit of the project.",
    "To organize periodic briefings on the project progress to the host community."
]
const Awareness = () => {
    return (
        <div className='flex flex-col gap-8 text-neutral-100'>
            <div>
                <h1 className=' text-4xl max-md:text-2xl max-sm:text-xl'>
                    CASHES EDUCATIONAL AWARENESS PROGRAMM
                </h1>
            </div>
            <div className='text-xl max-sm:text-base flex flex-col gap-4'>
                <p>
                    Here we create awareness and educate the employee and the host community via the means of
                    informative and advisory meetings, discussions, talks, teachings, posters, signs etc.
                </p>
                <p>
                    This provides an opportunity:
                </p>
                <div className=' text-xl max-sm:text-base px-4'>
                    <ol className=' list-[roman] flex flex-col gap-2'>
                        {
                            community_engagement_goals.map((item) => {
                                return (
                                    <li>{item}</li>
                                )
                            })
                        }
                    </ol>
                </div>
                <p>
                    For the employees, awareness is created about the job hazards and workers are educated on
                    the appropriate work rules and operational procedures, cultivating the CASHES consciousness
                    and inculcating the good habit or personal care, industrial hygiene and environmental safety.
                    CASHES manual is provided and explained to the employee.
                </p>
            </div>
        </div>
    )
}

export default Awareness