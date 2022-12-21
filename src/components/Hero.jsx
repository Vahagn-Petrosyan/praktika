import React from 'react'

export const Hero = () => {
  return (
    <div className='bg-hero-pattern w-full py-[288px] flex flex-col items-center justify-center'>
        <div className='gap-y-4 flex justify-center flex-col items-center'>
          <p className='hero-title text-yellow text-5xl'>The Leading Platform for</p>
          <h1 className='text-gray-black text-7xl font-black uppercase w-[760px] text-center'>events, meetups & conferences</h1>
          <p className='text-gray-black text-xl w-[608px] text-center'>World’s most influential media, entertainment & technology show inspirational speakers including game changing ideas.</p>
        </div>
        <div className='relative w-[1108px] h-[110px] flex justify-center'>
          <div className='absolute z-2 w-[1108px] h-[100px] bg-white rounded-xl'>

          </div>
          <div className='absolute z-1 w-[1068px] h-[100px] bg-white bg-opacity-25 rounded-xl top-[10px]'>

          </div>
        </div>

    </div>
  )
}
