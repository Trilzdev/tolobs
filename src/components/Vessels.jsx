import React from 'react'
const ship_names = [
    "MT AKUADA",
    "MT ALGOMA HANSA",
    "MT ALPINE PENELOPE",
    "MT ANDROS",
    "MT ATLANTIC GEMINI",
    "MT BEAVER",
    "MT BEKKIE",
    "MT CAPE BEIRA",
    "MT CAPE BLANC",
    "MT CENITO",
    "MT CITRUS",
    "MT CONFIDENCE",
    "MT DUBAI STAR",
    "MT FRIENDSHIP T",
    "MT KRITIPHILOZINA",
    "MT LUROS",
    "MT MAERSK MUROTSU",
    "MT MELILI",
    "MT NEW RANGER",
    "MT NISSOS SANTORINI",
    "MT NS SPIRIT",
    "MT OCEAN MARINER",
    "MT OVERSEAS ANTIGMAR",
    "MT PHILOMINALEMBO",
    "MT PRETTY TIME",
    "MT PRETTY WORLD",
    "MT RAVNANGER",
    "MT RIGA",
    "MT GANDARI",
    "MT GOTLAND MARIEANNE",
    "MT HELI",
    "MT ICE VICTORY",
    "MT JOE MARLE",
    "MT KRISTINA",
    "MT BRAVE",
    "MT SEA PHANTOM",
    "MT ALTHEA",
    "MT CAPE BRADLEY",
    "MT SETO EXPRESS",
    "MT SIR ATHOS",
    "MT VALLE BIANCA",
    "MT VALLE DI CASTIGLIA",
    "MT PYXIS DELTA",
    "MT CARTAGENA",
    "MT ATLANTIC LILY",
    "MT HIGH MERCURY",
    "MT LIWA",
    "YM EARTH"
]

const Vessels = () => {
    return (
        <div className='flex flex-col gap-8 text-[#286189]'>
            <div>
                <h1 className=' text-4xl max-md:text-2xl max-sm:text-xl'>
                    VESSELS HANDLED
                </h1>
            </div>
            <div className='text-xl flex flex-col gap-4 max-sm:text-base'>
                <p>
                    As one of the leading shipping agencies in Nigeria, we have handled various vessels both Motor tanker
                    and Ocean going vessels some of which include the following:
                </p>
            </div>
            <ul className='text-xl max-sm:text-base grid grid-cols-2 max-sm:grid-cols-1 list-disc pl-4'>
                {
                    ship_names.map((item) => {
                        return (
                            <div>
                                <li>{item}</li>
                            </div>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Vessels