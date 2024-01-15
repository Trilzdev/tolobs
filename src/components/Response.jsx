import React from 'react'
const safety_measures = {
    "Standing Team": "All plans and actions to steadily make available a standing team of well-equipped rescue men; evacuation vehicles, communication facilities, first aid services, firefighting facilities, alarm system, lightning conductor, etc.",
    "Training Programs": {
        "Topics": [
            "Person falling into the river from high deck",
            "Threatening overflow of river banks",
            "Fire outbreaks",
            "Dismembering (collapse) of a fitted structure such as a concrete pillar, beam, piling equipment, crane, etc.",
            "Attack by wild animals/pests or community violence"
        ]
    },
    "Safety Statistics Record": "At the end, a record is maintained of safety statistics including injuries, facilities, lost time frequency, etc."
}
const training_topics = [
    "Person falling into the river from high deck",
    "Threatening overflow of river banks",
    "Fire outbreaks",
    "Dismembering (collapse) of a fitted structure such as a concrete pillar, beam, piling equipment, crane, etc.",
    "Attack by wild animals/pests or community violence"
]


const Response = () => {
    return (
        <div className='flex flex-col gap-8 text-[#286189]'>
            <div>
                <h1 className=' text-4xl max-md:text-2xl max-sm:text-xl'>
                    CASHES CONTIGENCY/QUICK RESPONSE PROGRAMME
                </h1>
            </div>
            <div className='text-xl max-sm:text-base flex flex-col gap-4'>
                <p>
                    This deals with the procedure practice and supervision of modality for answering distress calls.
                    To this end in critical period, a 24 hour operation (shift duty) is introduced at the site
                    communication office to have a regular reach/contact with TOLOBS MARINE SERVICES LIMITED
                    head office in Port Harcourt.
                </p>
                <p>
                    In TOLOBS MARINE SERVICES LIMITED, every employee is termed a safety man since safety is a
                    line and staff responsibility. This assigns a degree of safety responsibility, depending on one’s
                    skill, to every employee especially in the event of distress or emergency. The least to do here is
                    to attract safety or other appropriate personnel to the scene of distress or emergency.
                </p>
                <p>
                    The contingency/quick response programme of TOLOBS MARINE SERVICES LIMITED covers all
                    the purposeful effort including an observation of the permit system and lockouts. Others are:
                </p>
                <div className=' text-xl max-sm:text-base px-4'>
                    <ol className=' list-[roman] flex flex-col gap-2'>
                        <li>
                        All plans and actions to steadily make available a standing team of well-equipped rescue men; evacuation vehicles, communication facilities, first aid services, firefighting facilities, alarm system, lightning conductor, etc.
                        </li>
                        <li>
                        Systematically and periodically employees are made to receive
                        <ul className='list-disc flex flex-col gap-1 pl-8'>
                            {
                                training_topics.map((item)=>{
                                    return(
                                        <li>{item}</li>
                                    )
                                })
                            }
                        </ul>
                        </li>
                        <li>At the end, record is maintained of safety statistics including injuries, facilities, lost 
time frequency etc.</li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default Response