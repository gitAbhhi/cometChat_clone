import React from 'react'

export const Navbar = () => {
  return (
    <>
    <div className='flex justify-between items-center  h-[68px] pr-[32px] pl-[32px] pt-[16px]  pb-[16px]'>
    <span className='text-2xl text-white'>Comet<b>Chat</b> </span>
        <ul className='flex text-white gap-[48px]'>
            <li class="lap-nav"><a href="">Platform</a></li>
            <li class="lap-nav"><a href="">Solution</a></li>
            <li class="lap-nav"><a href="">Developers</a></li>
            <li class="lap-nav"><a href="">Resources</a></li>
            <li class="lap-nav"><a href="">Pricing</a></li>
        </ul>

        <div className='flex items-center text-white gap-[16px]'>
            <a className='login'>Log in</a>
            <button className='bg-[#6852D6] pt-[8px] pb-[8px] pr-[12px] pl-[12px] h-[36px] w-[140px] rounded-[10px] text-[14px] font-[600]'>Schedule a demo</button>
        </div>
    </div>
    </>
  )
}
