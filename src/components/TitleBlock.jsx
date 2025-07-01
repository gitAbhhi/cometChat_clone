import React from 'react'

export const TitleBlock = () => {
  return (
    <>
    
    <div className='hidden md:flex flex-col bg-[#0A0914] h-[301px]  pt-[100px]  pr-[64px] pb-[64px] pl-[64px]'>
        <h1 className='text-orange-500 text-[22px] font-[600]'>Be a partner</h1>
        <p className='text-white text-[48px] font-[600] leading-none'>CometChat partner <br />advantages </p>
        {/* <p className='text-white text-[48px] font-[600]'></p> */}
    </div>
    <div className='block md:hidden'>
    <h1 className='text-orange-500'>The benefits</h1>
    <p>Moderation to help</p>
    <p>your community thrive</p>
</div></>
  )
}
