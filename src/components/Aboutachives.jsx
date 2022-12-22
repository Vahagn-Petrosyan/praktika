import React from 'react'

export const Aboutachives = () => {
  return (
    <div className='w-full flex flex-col mt-36'>
        <h1 className='text-gray-black text-5xl font-bold text-center'>2021 at a Glance</h1>
        <div className='flex flex-row gap-x-52 items-center justify-center mt-28'>
            <div className='flex flex-col gap-y-5 items-center'>
                <img src="/earth.svg" className='w-16'/>
                <p className='text-[#767676] text-xl font-bold w-52 text-center'>5.4M events in nearly 180 countries</p>
            </div>
            <div className='flex flex-col gap-y-5 items-center'>
                <img src="/creators.svg" className='w-16'/>
                <p className='text-[#767676] text-xl font-bold w-60 text-center'>662K creators of free and paid events</p>
            </div>
            <div className='flex flex-col gap-y-5 items-center'>
                <img src="/ticket.svg" className='w-16'/>
                <p className='text-[#767676] text-xl font-bold'>291M total tickets</p>
            </div>
        </div>
    </div>
  )
}
