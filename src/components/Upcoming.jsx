import React from 'react'

export const Upcoming = () => {
  return (
    <div className='w-full mt-16'>
        <p className='hero-title text-yellow text-[52px] text-center'>Upcoming</p>
        <h1 className='text-5xl text-gray-black text-extrabold text-center'>Popular Events</h1>
        <div className='w-full bg-upcoming-pattern h-[1022px] mt-16'>
            <div>
                <h1 className='text-extrabold text-6xl text-white'>It's Crazy, It's Awesome</h1>
                <p className='text-2xl font-medium text-white'>How you transform your business as technology, consumer, habits industry dynamis change? 
                    Find out from those leading the charge.</p>
                <p>5 to 7 June 2019, Waterfront Hotel, London</p>
            </div>
        </div>
    </div>
  )
}
