import React from 'react'

export const Hero = () => {
  return (
    <div className='bg-hero-pattern w-full py-[288px] flex flex-col items-center justify-center'>
        <div className='gap-y-4 flex justify-center flex-col items-center'>
          <p className='hero-title text-yellow text-5xl'>The Leading Platform for</p>
          <h1 className='text-gray-black text-7xl font-black uppercase w-[760px] text-center'>events, meetups & conferences</h1>
          <p className='text-gray-black text-xl w-[608px] text-center'>World’s most influential media, entertainment & technology show inspirational speakers including game changing ideas.</p>
        </div>
        <div className='relative w-[1108px] h-[110px] flex justify-center mt-[74px]'>
          <div className='absolute z-2 w-[1108px] h-[100px] bg-white rounded-xl flex items-center '>
              <input type= 'search' className='pl-2 mx-16 bg-hero-button placeholder:text-search rounded-sm' placeholder="Search for event title" ></input>
              <div className='w-[304px] flex justify-center items-center h-[60px] border-x border-search border-opacity-40'>
                <button className='bg-hero-button text-black text-base font-medium h-[21px] leading-5 w-48 capitalize rounded-sm'>Event Location</button>
              </div>
              <button className='bg-hero-button mx-16 text-black text-base font-medium h-[21px] leading-5 w-48 capitalize rounded-sm'>Event category</button>
              <div className='w-[60px] h-[60px] rounded-full bg-yellow flex justify-center items-center'><img src="/Union.svg" alt="" /></div>
          </div>
          <div className='absolute z-1 w-[1068px] h-[100px] bg-white bg-opacity-30 rounded-xl top-[10px]'></div>
        </div>

    </div>
  )
}
