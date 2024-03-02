import React from 'react'
const safety_guidelines = [
  "Whether or not the client will carry out a pre-mobilization inspection, the CASHES section must conduct a pre-mobilization inspection before we mobilize to any site.",
  "Follow up inspection shall be conducted to ensure full execution.",
  "The head of section shall conduct for the subordinates a pre-job tailgate briefing before the task. This provides opportunity to highlight the hazards in either the past or the current job.",
  "CASHES officer shall at intervals conduct SAFETY AUDIT of unsafe acts/conditions. A documented report of the audit shall be circulated to the site management.",
  "Notice of all accidents and near nesses are compulsorily and immediately forwarded to the CASHES head of section, who within 24hours of the event, reports same to the managing director.",
  "Internal trainings are supplemented with the services of consultants in some areas of special CASHES head and it shall be the responsibility of the CASHES head to arrange for such training.",
  "Only trained/certified personnel shall be allowed to operate vehicles, or any mobile or stationary equipment including motor vehicles, boat and motor crane.",
  "All company drivers shall be made to receive the defensive driving course to continue in TOLOBS MARINE SERVICES LIMITED) EMPLOYMENT.",
  "Boat drivers and all whose work is related to water must have an acceptable swimming certificate.",
  "All vehicles should be fitted with the necessary accessories such as seat belt, spare types, jack triangular reflector, speed monitor instrument and an up to date roadworthiness.",
  "Night journey and overloading is prohibited for both our vehicles and our boats.",
  "Use of life jackets and life buoy in boat is mandatory for our entire passengers or employee plying water route.",
  "Wrong use of equipment (e.g. using a crane to lift loads above its capacity) is prohibited.",
  "Provide necessary PPE for the protection of employee from excessive sound, heat, dirty dust, fume, etc."
]

const Safety = () => {
  return (
    <div className='flex flex-col gap-8 text-neutral-100'>
    <div>
      <h1 className=' text-4xl max-md:text-2xl max-sm:text-xl'>
        SAFETY POLICY
      </h1>
    </div>
    <div className='text-xl max-sm:text-base flex flex-col gap-4'>
    <div className=' text-xl max-sm:text-base px-4'>
      <ol className=' list-[roman] flex flex-col gap-2'>
        {
          safety_guidelines.map((item)=>{
            return(<li>{item}</li>)
          })
        }
      </ol>
    </div>
    </div>
  </div>
  )
}

export default Safety