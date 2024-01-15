import React from 'react'
const dataList =[
  "ORSKIN Engineering Nigeria Limited",
  "NAPOIL Limited",
  "TABS Oil & Gas Limited",
  "Nelson Nigeria Limited",
  "SAHARA Energy Limited",
  "METTLE Energy Limited",
  "ABBEY COURT Trading",
  "TRAFIGURA BEEHVEER",
  "ARCADIA ENERGY (SUISSE) SA",
  "MOCOH SA",
  "ELAN OIL Limited",
  "DELANEY Petroleum Corporation",
  "DUPORT Marine Limited",
  "GLENCORE International Plc",
  "OANDO Supply & Trading",
  "VALCORE Energy",
  "AITEO Energy Group",
  "VALESKA Shipping Ltd"
] 
  
const Clients = () => {
  return (
    <div className='flex flex-col gap-8 text-[#286189]'>
      <div>
        <h1 className=' text-4xl max-md:text-2xl max-sm:text-xl'>
          CLIENTS
        </h1>
      </div>
      <div className='text-xl flex flex-col gap-4 max-sm:text-base'>
        <p>
            Tolobs Marine Nigeria Limited is proud to have provided various services to the clients listed below and most of them are repeat clients:
        </p>
      </div>
      <ul className='text-xl grid grid-cols-2 max-sm:grid-cols-1 list-disc max-sm:text-base pl-4'>
        {
            dataList.map((item)=>{
                return(
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

export default Clients