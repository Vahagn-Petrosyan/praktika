import React, { useState, useEffect } from 'react'

export const Upcoming = () => {

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);


  const deadline = "December, 25, 2023";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);







  return (
    <div className='w-full mt-16'>
      <p className='hero-title text-yellow text-[52px] text-center'>Upcoming</p>
      <h1 className='text-5xl text-gray-black text-extrabold text-center'>Popular Events</h1>
      <div className='w-full h-[1122px] mt-16 relative'>
        <div className='w-full bg-upcoming-pattern h-[1022px] pt-[560px] pl-9'>
          <div className='flex flex-col gap-y-5'>
            <h1 className='text-extrabold text-6xl text-white'>It's Crazy, It's Awesome</h1>
            <p className='text-2xl font-medium text-white w-[687px]'>How you transform your business as technology, consumer, habits industry dynamis change?
              Find out from those leading the charge.</p>
            <p className='text-xl font-light text-white italic'>25 to 27 December 2023, Waterfront Hotel, London</p>
          </div>
        </div>
        <div className='w-[800px] h-[200px] bg-gradient-to-r from-gradientfirst to-gradientsecond -mt-[100px] bottom-0 mx-auto px-[215px] gap-x-10 flex flex-row justify-center'>

          <div className='flex flex-col justify-center items-center'>
            <p className='text-white text-[80px] font-bold'>{days < 10 ? "0" + days : days}</p>
            <span className='text-white text-lg font-normal'>Days</span>
          </div>

          <span className='text-white text-[80px] font-bold'><sub>:</sub></span>
          <div className='flex flex-col justify-center items-center'>
            <p className='text-white text-[80px] font-bold'>{hours < 10 ? "0" + hours : hours}</p>
            <span className='text-white text-lg font-normal'>Hours</span>
          </div>
          <span className='text-white text-[80px] font-bold'><sub>:</sub></span>

          <div className='flex flex-col justify-center items-center'>
            <p className='text-white text-[80px] font-bold'>{minutes < 10 ? "0" + minutes : minutes}</p>
            <span className='text-white text-lg font-normal'>Minutes</span>
          </div>

        </div>
      </div>
    </div>
  )
}
