import React from 'react'
import { Navbar } from './Navbar'
import './HeroForm.css'
import comets1 from '../assets/comets (1).png'
import comets2 from '../assets/comets (2).png'
import comets3 from '../assets/comets (3).png'
import illustration from '../assets/Illustration.png'
import highlight from '../assets/highlight.png'



export const HeroForm = () => {
  return (
    <>
    <div className='hero-container  h-[646px] bg-[#000000]'>

    <Navbar/>
    {/* <img src={illustration} className='absolute top-[0px]' alt="" /> */}
    <img src={illustration} className='absolute top-[-80px] right-[0px]' alt="" />
    <img src={comets1} className='absolute top-[0px]' alt="" />
    <img src={highlight} className='absolute w-full top-[0px]' alt="" />
    <img src={comets1} className='absolute top-[0px]' alt="" />
    <img src={comets2} className='absolute right-[0px] bottom-0' alt="" />
    <img src={comets3} className='absolute left-[100px] bottom-0' alt="" />

    <div className="space-container ">
    {/* <!-- Glowing Planets --> */}
    {/* <div className="planet planet1"></div>
    <div className="planet planet2"></div>
    <div className="planet planet3"></div>
    <div className="planet planet4"></div>
    <div className="planet planet5"></div> */}
    <div className="content  flex justify-between items-center gap-[20px]">
      {/* <!-- Left Text Section --> */}
      <div className="left w-[480px] h-[200px] flex flex-col ">
        <h1 className='font-[600] text-[48px] text-5xl h-[102px] ' >Join the CometChat <br />partner universe</h1>
        <p className='text-[22px] font-[500] text-[#FAFAFF]'>Create value for your clients, leveraging our world-class technology. Partner with us and grow your business!</p>
      </div>

      {/* <!-- Right Form Section --> */}
      <div className="right shadow-[0_0_40px_rgba(0,0,0,0.3)] w-[528px] h-[434px] p-[34px] rounded-[24px] border-[1px] backdrop-blur-xl ">
        <h2 className='text-[36px] '>Become a partner</h2>
        <form className='flex flex-col'>
          <label htmlFor="">Full name</label>
          <input className='w-[464px] h-[44px] rounded-[14px] border-[1px] pt-[13px] pb-[13px] pr-[16px] pl-[16px] gap-[8px]' type="text" placeholder="Full name" required />
          <label htmlFor="">Email address</label>
          <input className='w-[464px] h-[44px] rounded-[14px] border-[1px] pt-[13px] pb-[13px] pr-[16px] pl-[16px] gap-[8px]' type="email" placeholder="Email address" required />
          <label htmlFor="">Companies name</label>
          <input className='w-[464px] h-[44px] rounded-[14px] border-[1px] pt-[13px] pb-[13px] pr-[16px] pl-[16px] gap-[8px]' type="text" placeholder="Company name" required />
          <button className='mt-[10px]' type="submit">Submit application</button>
        </form>
      </div>
    </div>
  </div>
    </div>
    </>
  )
}
