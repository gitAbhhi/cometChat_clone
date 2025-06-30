import React from 'react'

export const TitleBlock = () => {
  return (
    <>
    
    <div className='hidden md:flex flex-col bg-gray-950'>
        <h1 className='text-orange-500'>Be a partner</h1>
        <p className='text-white'>CometChat partner</p>
        <p className='text-white'>advantages</p>
    </div>
    <div className='block md:hidden'>
    <h1 className='text-orange-500'>The benefits</h1>
    <p>Moderation to help</p>
    <p>your community thrive</p>
</div></>
  )
}
