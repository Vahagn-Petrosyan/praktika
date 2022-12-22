import React from 'react'

export const Organizers = () => {
  return (
    <div className='w-full mt-28 flex flex-col items-center'>
        <p className='hero-title text-yellow text-[52px] text-center'>Organizers</p>
        <h1 className='text-5xl text-gray-black text-extrabold text-center'>Feautured Organizers</h1>
        <div className='flex flex-row gap-x-36 mt-20'>
            <div className='flex flex-col justify-between h-[145px]'>
                <img src="/sponsor1.png"/>
                <img src="/sponsor2.png"/>
            </div>
            <div className='flex flex-col justify-between h-[145px]'>
                <img src="/sponsor3.png"/>
                <img src="/sponsor4.png"/>
            </div>
            <div className='flex flex-col justify-between h-[145px]'>
                <img src="/sponsor5.png"/>
                <img src="/sponsor6.png"/>
            </div>
            <div className='flex flex-col justify-between h-[145px]'>
                <img src="/sponsor7.png"/>
                <img src="/sponsor8.png"/>
            </div>
        </div>
    </div>
  )
}
