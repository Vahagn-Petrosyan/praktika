import React from 'react'

export const Footer = () => {
  return (
    <div className='w-full bg-gray-black mt-20 pt-24 pl-48 pb-36'>
      <div className='flex flex-row gap-x-20'>
        <div className='flex flex-col gap-y-10'>
          <div className='flex flex-row items-center gap-x-5'>
            <h1 className='text-yellow text-lg font-black'>EvenTracking</h1>
            <div className='flex flex-col'>
              <h1 className='text-white text-2xl font-extrabold'>Newsletter</h1>
              <p className='text-white text-xs font-normal'>Get latest news & update</p>
            </div>
          </div>
          <p className='text-white text-sm font-medium leading-7 w-80'>A business conference organize by Event Tracking World’s most influential
            media, entertainment & technology show inspirational speakers.</p>
          <div className='flex flex-row gap-x-6'>
            <img src="/instagram.png" />
            <img src="/Facebook.png" />
            <img src="/Pinterest.png" />
            <img src="/Twitter.png" />
          </div>
        </div>
        <div className='flex flex-col gap-y-10'>
          <form className='flex flex-row'>
            <input type="email" name="email" id="email" placeholder='Your Email' className='pl-3 rounded placeholder:text-xs h-12 w-72 outline-none' />
            <input type="submit" value="Subscribe" className='bg-yellow w-28 h-12 text-white rounded -ml-2 cursor-pointer' />
          </form>
          <div className='flex flex-row gap-x-20'>
            <div>
              <h1 className='text-yellow uppercase text-xl font-bold'>To know more</h1>
              <li className='text-white text-base font-normal list-none'>About Event Tracking</li>
              <li className='text-white text-base font-normal list-none'>FAQ</li>
              <li className='text-white text-base font-normal list-none'>Contact</li>
              <h1 className='text-yellow uppercase text-xl font-bold mt-5'>It may interest you</h1>
              <li className='text-white text-base font-normal list-none'>Get Direction</li>
              <li className='text-white text-base font-normal list-none'>Become a Sponsors</li>
            </div>
            <div>
              <h1 className='text-yellow uppercase text-xl font-bold'>Quick links</h1>
              <li className='text-white text-base font-normal list-none'>Causes</li>
              <li className='text-white text-base font-normal list-none'>Sitemap</li>
              <li className='text-white text-base font-normal list-none'>Srories</li>
              <li className='text-white text-base font-normal list-none'>Event boost</li>
              <li className='text-white text-base font-normal list-none'>Pricing</li>
              <li className='text-white text-base font-normal list-none'>Grow your bussines</li>
              <li className='text-white text-base font-normal list-none'>Event planning</li>
            </div>
            <div>
            <h1 className='text-yellow uppercase text-xl font-bold'>Find events</h1>
            <li className='text-white text-base font-normal list-none'>Virtual Events</li>
            <li className='text-white text-base font-normal list-none'>Online classes</li>
            <li className='text-white text-base font-normal list-none'>Virtual conferences</li>
            <li className='text-white text-base font-normal list-none'>Online Seminars</li>
            <li className='text-white text-base font-normal list-none'>Virtual Runs</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
