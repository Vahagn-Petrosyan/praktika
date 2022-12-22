import React from 'react'

export const JoinUs = () => {
  return (
    <div className='w-full mt-24 flex flex-col items-center'>
        <p className='uppercase text-lg font-medium text-center'>why join us</p>
        <h1 className='text-yellow text-4xl font-extrabold text-center'>Event Outcomes</h1>
        <img src="/Vector.svg" className='mt-7'/>
        <div className='flex flex-row gap-x-9 mt-20'>
            <div className='joinus-event-outcomes w-[250px] h-[250px] gap-y-4 rounded-full flex flex-col justify-center items-center bg-gradient-to-tr from-buildingl to-building2'>
                <img src="/building.svg" className='w-28 h-28'/>
                <p className='text-white text-3xl font-bold text-center capitalize'>building</p>
            </div>
            <div className='joinus-event-outcomes w-[250px] h-[250px] gap-y-4 rounded-full flex flex-col justify-center items-center bg-gradient-to-tr from-marketing1 to-marketing2'>
                <img src="/marketing.svg" className='w-28 h-28'/>
                <p className='text-white text-3xl font-bold text-center capitalize'>marketing</p>
            </div>
            <div className='joinus-event-outcomes w-[250px] h-[250px] gap-y-4 rounded-full flex flex-col justify-center items-center bg-gradient-to-tr from-planning1 to-planning2'>
                <img src="/planning.svg" className='w-28 h-28'/>
                <p className='text-white text-3xl font-bold text-center capitalize'>planning</p>
            </div>
            <div className='joinus-event-outcomes w-[250px] h-[250px] gap-y-4 rounded-full flex flex-col justify-center items-center bg-gradient-to-tr from-monetizing1 to-monetizing2'>
                <img src="/monetizing.svg" className='w-28 h-28'/>
                <p className='text-white text-3xl font-bold text-center capitalize'>monetizing</p>
            </div>
        </div>
    </div>
  )
}
