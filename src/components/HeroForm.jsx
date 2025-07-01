import React from 'react'
import { Navbar } from './Navbar'
import './HeroForm.css'
import comets1 from '../assets/comets (1).png'
import comets2 from '../assets/comets (2).png'
import comets3 from '../assets/Ellipse 341.png'
import illustration from '../assets/Illustration.png'
import highlight from '../assets/highlight.png'
import Ellipse from '../assets/Ellipse 326.png'
import Planet from '../assets/Planet.png'
import Gradient from '../assets/Gradient.png'
import comets4 from '../assets/comet 4.png'
import blur_Planet from '../assets/Planet (1).png'
import Stars from '../assets/Stars.png'





export const HeroForm = () => {//bg-[#0A0914]
  return (
    <>
    <div className='hero-container overflow-hidden text-white  h-[646px] bg-[#0A0914]'>

    <img src={Stars} className='absolute w-full h-[646px]' alt="" />
    <Navbar/>
    <img src={illustration} className='absolute top-[-80px] right-[0px]' alt="" />
    <img src={Planet} className='absolute top-[50px] left-0' alt="" />
    <img src={blur_Planet} className='absolute top-[180px] right-[180px]' alt="" />

    <img src={highlight} className='absolute  h-[646px] w-full right-[0px]' alt="" />
    <img src={comets1} className='absolute top-[0px]' alt="" />
    <img src={Ellipse} className='absolute top-[478px] left-[694px]'  alt="" />
    <img src={comets3} className='absolute  left-[168px]  top-[467px]' alt="" />
    <img src={comets4} className='absolute right-[0px] top-[443px]' alt="" />
    <img src={Gradient} className='absolute w-full top-[413px]' alt="" />


   
    <div className="content  flex justify-between items-center gap-[20px]">
      {/* <!-- Left Text Section --> */}
      <div className="left absolute top-[188px] left-[176px] w-[480px] h-[200px] flex flex-col ">
        <h1 className='font-[600] text-[48px] text-5xl h-[102px] ' >Join the CometChat <br />partner universe</h1>
        <p className='text-[22px] font-[500] text-[#FAFAFF]'>Create value for your clients, leveraging our world-class technology. Partner with us and grow your business!</p>
      </div>

      {/* <!-- Right Form Section --> */}
      <div className="right absolute top-[132px] left-[736px] w-[528px] h-[434px] shadow-2xl rounded-[24px] border-[1px] border-[#ffffff14] backdrop-blur-xl ">
        <h2 className='text-[32px] font-[600] m-[32px] '>Become a partner</h2>
        <form className='flex gap-[16px] flex-col'>
          <div className='w-[464px] ml-[35px] h-[68px] flex flex-col gap-[6px]'>
          <label className='text-[16px] font-[640]' htmlFor="">Full name</label>
          <input className=' rounded-[14px] h-[44px] border-[#ffffff14] border-[1px] pt-[13px] pb-[13px] pr-[16px] pl-[16px]' type="text" placeholder="Full name" required />
          </div>
          <div className='w-[464px] ml-[35px] h-[68px] flex flex-col gap-[6px]'>
          <label className='text-[16px] font-[640]' htmlFor="">Email address</label>
          <input className=' rounded-[14px] h-[44px] border-[#ffffff14] border-[1px] pt-[13px] pb-[13px] pr-[16px] pl-[16px]' type="text" placeholder="Type your emailsomething..." required />
          </div>
          <div className='w-[464px] ml-[35px] h-[68px] flex flex-col gap-[6px]'>
          <label className='text-[16px] font-[640]' htmlFor="">Companies name</label>
          <input className=' rounded-[14px] h-[44px] border-[#ffffff14] border-[1px] pt-[13px] pb-[13px] pr-[16px] pl-[16px]' type="text" placeholder="Company name" required />
          </div>
          <button className='bg-[#6852D6]  pt-[12px] pb-[12px] pr-[16px] pl-[16px] h-[44px] w-[157px] rounded-[12px] text-[14px] font-[600] ml-[32px] ' type="submit">Submit application</button>
        </form>
      </div>
    </div>
  </div>
    </>
  )
}
