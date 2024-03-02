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
    <div className='flex flex-col gap-4 text-neutral-100 buttongradient p-4 pb-16'>
      <div>
        <h1 className=' text-4xl max-md:text-2xl max-sm:text-xl font-medium'>
          <span className='title'>
            CLIENTS
          </span>
        </h1>
      </div>
      <div className='text-xl flex flex-col gap-[16px] max-sm:text-base'>
        <p className='text-neutral-200'>
            Tolobs Marine Nigeria Limited is proud to have provided various services to the clients listed below and most of them are repeat clients:
        </p>
        <div className='text-xl text-neutral-300  grid grid-cols-2 max-sm:grid-cols-1 max-sm:text-base pl-4'>
          {
              dataList.map((item)=>{
                  return(
                          <p className='custom'>{item}</p>
                  )
              })
          }
        </div>
      </div>
    </div>
  )
}

export default Clients