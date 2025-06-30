import React from 'react'

export const FaqSection = () => {
  return (
    <div>
        <h1>FAQ's</h1>
        <p>We want to help you</p>
        <p>with all your doubts</p>
        <div className='gap-[16px] pr-[344px] pl-[344px] flex flex-col'>

        <div className='p-[24px] gap-[8px] rounded-[20px] bg-gray-300'>
            <div className='flex justify-between'><p>This is a frequently asked question?</p>
            <span>^</span>
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto eius accusantium mollitia expedita doloremque quaerat quia tempore, perferendis quam quod exercitationem, optio eveniet saepe recusandae!
            </p>
        </div>
        <div className='p-[24px] gap-[16px] rounded-[20px] bg-gray-300'>
            <div className='flex justify-between'><p>This is a very long frequently asked question about our services with more than one line?</p>
            <span>^</span>
            </div>
        </div>
        <div className='p-[24px] gap-[16px] rounded-[20px] bg-gray-300'>
            <div className='flex justify-between'><p>This is a frequently asked question?</p>
            <span>^</span>
            </div>
        </div>
        <div className='p-[24px] gap-[16px] rounded-[20px] bg-gray-300'>
            <div className='flex justify-between'><p>This is a question?</p>
            <span>^</span>
            </div>
        </div>
        <div className='p-[24px] gap-[16px] rounded-[20px] bg-gray-300'>
            <div className='flex justify-between'><p>This is a question?</p>
            <span>^</span>
            </div>
        </div>
    </div>
    </div>

  )
}
