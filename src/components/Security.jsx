import React from 'react'
const security_guidelines = [
    "Installation of necessary security gadgets such as searchlight, security alarm, walkie-talkie, phone, etc.",
    "Deployment of security personnel includes day and night security personnel.",
    "Provision of a patrol vehicle.",
    "Arrangement with and location of the nearby local police post or military formation for use in case of need.",
    "Installation of safety and security devices for the prevention of looting and rioting in the event of possible community-related action."
]

const Security = () => {
    return (
        <div className='flex flex-col gap-8 text-neutral-100'>
            <div>
                <h1 className=' text-4xl max-md:text-2xl max-sm:text-xl'>
                    SECURITY POLICY
                </h1>
            </div>
            <div className='text-xl max-sm:text-base flex flex-col gap-4'>
                <p>
                    Prior to the commencement of any new job, management usually put in place
                    adequate security arrangement that will take chance of the security of such.
                </p>
                <div className=' text-xl max-sm:text-base px-4'>
                    <ol className=' list-[roman] flex flex-col gap-2'>
                        {
                            security_guidelines.map((item)=>{
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

export default Security