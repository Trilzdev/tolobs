import React from 'react'
const safety_planning_steps = [
    "Analysis of job/potential hazards.",
    "Identification of vital safety demands and other CASHES needs and requirements.",
    "Outline of project safety action plan."
]


const Evaluation = () => {
    return (
        <div className='flex flex-col gap-8 text-neutral-100'>
            <div>
                <h1 className=' text-4xl max-md:text-2xl max-sm:text-xl'>
                CASHES PROJECT EVALUATION PROGRAMME                </h1>
            </div>
            <div className='text-xl max-sm:text-base flex flex-col gap-4'>
                <p>
                    Execution commences and regularly as project demands, a joint mobilization study meeting of
                    heads of relevant departments, specialists/consultants, and CASHES section is held to detail the
                    following:
                </p>
                <div className=' text-xl max-sm:text-base px-4'>
                    <ol className=' list-[roman] flex flex-col gap-2'>
                        {
                            safety_planning_steps.map((item) => {
                                return (
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

export default Evaluation