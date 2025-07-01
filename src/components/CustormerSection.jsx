import React from 'react'
// import amazon from '../assets/amazon'

export const CustormerSection = () => {
  return (
<>
{/* absolute top-[646px] border-t border-b border-gray-800 */}
<div className='w-full h-[176px] pt-[64px]  pb-[80px] bg-[#0A0914]'>
<ul className='flex  gap-[32px]  text-gray-500 justify-between'>
    <li><img src="../src/assets/amazon.png" alt="aws" /></li>
    <li><img src="../src/assets/genomics.png" alt="10X GENOMICS" /></li>
    <li><img src="../src/assets/microsoft.png" alt="Microsoft" /></li>
    <li><img src="../src/assets/nasscom.png" alt="NASSCOM" /></li>
    <li><img src="../src/assets/techstars_.png" alt="techstars_" /></li>
    <li><img src="../src/assets/tekno.png" alt="tekno point" /></li>
    <li><img src="../src/assets/cisco.png" alt="cisco" /></li>
    <li><img src="../src/assets/hak.png" alt="trinax" /></li>
</ul>
</div>
</>
  )
}
