import React from 'react'

export const FaqSection = () => {
  return (
    <div className='bg-[#FAFAFF] h-[1016px] pt-[100px]'>
        <img src="../src/assets/blur.png" className='absolute left-0' alt="" />
        <img src="../src/assets/blur.png" className='absolute right-0 rotate-180' alt="" />

        <div className='h-[137px] w-[528px]  ml-[456px] flex flex-col items-center '>
        <h1 className='text-[#FF7129] text-[22px] font-[640] text-center'>FAQ's</h1>
        <p className='text-[#14131D] text-[48px] font-[640] leading-tight ' >We want to help you <br /> with all your doubts</p>
        </div>
        <div className='gap-[16px] w-[751px] h-[615px] mt-[64px]   ml-[344px] flex flex-col'>

        <div className='p-[24px] w-[751px] h-[157px] rounded-[20px] border-[1px] border-[#14131D0A] bg-[#14131D05]'>
            <div className='flex justify-between'><p className='text-[22px] font-[640] text-[#14131D]'>This is a frequently asked question?</p>
            <span>^</span>
            </div>
            <p className='text-[22px] font-[500] text-[#14131d75]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto eius accusantium mollitia expedita doloremque quaerat quia tempore, perferendis quam quod exercitationem, optio eveniet saepe recusandae!
            </p>
        </div>
        <div className='p-[24px] gap-[16px] h-[94px] rounded-[20px] border-[1px] border-[#14131D0A] bg-[#14131D05]'>
            <div className='flex justify-between'><p className='text-[22px] font-[640] text-[#14131D]'>This is a very long frequently asked question about our services with more than one line?</p>
            <span>^</span>
            </div>
        </div>
        <div className='p-[24px] gap-[16px] h-[94px] rounded-[20px] border-[1px] border-[#14131D0A] bg-[#14131D05]'>
            <div className='flex justify-between'><p className='text-[22px] font-[640] text-[#14131D]'>This is a frequently asked question?</p>
            <span>^</span>
            </div>
        </div>
        <div className='p-[24px] gap-[16px] h-[94px] rounded-[20px] border-[1px] border-[#14131D0A] bg-[#14131D05]'>
            <div className='flex justify-between'><p className='text-[22px] font-[640] text-[#14131D]'>This is a question?</p>
            <span>^</span>
            </div>
        </div>
        <div className='p-[24px] gap-[16px] h-[94px] rounded-[20px] border-[1px] border-[#14131D0A] bg-[#14131D05]'>
            <div className='flex justify-between'><p className='text-[22px] font-[640] text-[#14131D]'>This is a question?</p>
            <span>^</span>
            </div>
        </div>
    </div>
    </div>

  )
}
