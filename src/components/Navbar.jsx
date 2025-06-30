import React from 'react'

export const Navbar = () => {
  return (
    <>
    {/* nav {
    width: 100%;
    padding-inline: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    background-color: #6A8EAE;
    position: fixed;
    top: 0px;
    z-index: 20;
} */}
    <div className='flex justify-between items-center  h-[68px] pr-[32px] pl-[32px] pt-[16px]  pb-[16px]'>
    <span className='text-2xl text-white'>Comet<b>Chat</b> </span>
        <ul className='flex text-white gap-[48px]'>
            <li class="lap-nav"><a href="">Platform</a></li>
            <li class="lap-nav"><a href="">Solution</a></li>
            <li class="lap-nav"><a href="">Developers</a></li>
            <li class="lap-nav"><a href="">Resources</a></li>
            <li class="lap-nav"><a href="">Pricing</a></li>
        </ul>

        <div className='flex text-white gap-[16px]'>
            <button className='login'>Log in</button>
            <button>Schedule a demo</button>
        </div>
    </div>
    </>
  )
}
