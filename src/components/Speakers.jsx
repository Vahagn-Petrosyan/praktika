import React from 'react'

export const Speakers = () => {
  return (
    <div className='w-full mt-24 flex flex-col items-center'>
        <p className='uppercase text-lg font-medium text-center'>listen to the</p>
        <h1 className='text-yellow text-4xl font-extrabold text-center'>Event Speakers</h1>
        <img src="/Vector.svg" className='mt-7'/>
        <div className='flex flex-col gap-y-20 mt-20'>
            <div className='flex flex-row gap-x-6'>
                <div className='w-[255px] h-[255px] relative bg-[url("/speaker1.png")]'>
                    <div className='w-[230px] absolute bottom-0 bg-white'>
                        <h1 className='text-black text-2xl font-bold text-center'>James Killer</h1>
                        <p className='text-speaker text-base font-normal text-center'>Founder, Edilta</p>
                    </div>
                </div>
                <div className='w-[255px] h-[255px] relative bg-[url("/speaker2.png")]'>
                    <div className='w-[230px] absolute bottom-0 bg-white'>
                        <h1 className='text-black text-2xl font-bold text-center'>Melisa Rock</h1>
                        <p className='text-speaker text-base font-normal text-center'>Lead Designer, Payol</p>
                    </div>
                </div>
                <div className='w-[255px] h-[255px] relative bg-[url("/speaker3.png")]'>
                    <div className='w-[230px] absolute bottom-0 bg-white'>
                        <h1 className='text-black text-2xl font-bold text-center'>Agaton Ronald</h1>
                        <p className='text-speaker text-base font-normal text-center'>Developer Expert</p>
                    </div>
                </div>
                <div className='w-[255px] h-[255px] relative bg-[url("/speaker4.png")]'>
                    <div className='w-[230px] absolute bottom-0 bg-white'>
                        <h1 className='text-black text-2xl font-bold text-center'>Devid Arone</h1>
                        <p className='text-speaker text-base font-normal text-center'>Founder, Cards</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-row gap-x-6'>
                <div className='w-[255px] h-[255px] relative bg-[url("/speaker5.png")]'>
                    <div className='w-[230px] absolute bottom-0 bg-white'>
                        <h1 className='text-black text-2xl font-bold text-center'>Lucy Melisa</h1>
                        <p className='text-speaker text-base font-normal text-center'>Founder, Edilta</p>
                    </div>
                </div>
                <div className='w-[255px] h-[255px] relative bg-[url("/speaker6.png")]'>
                    <div className='w-[230px] absolute bottom-0 bg-white'>
                        <h1 className='text-black text-2xl font-bold text-center'>Fredric Martin</h1>
                        <p className='text-speaker text-base font-normal text-center'>Lead Designer, Payol</p>
                    </div>
                </div>
                <div className='w-[255px] h-[255px] relative bg-[url("/speaker7.png")]'>
                    <div className='w-[230px] absolute bottom-0 bg-white'>
                        <h1 className='text-black text-2xl font-bold text-center'>Laura Bryant</h1>
                        <p className='text-speaker text-base font-normal text-center'>Developer Expert</p>
                    </div>
                </div>
                <div className='w-[255px] h-[255px] relative bg-[url("/speaker8.png")]'>
                    <div className='w-[230px] absolute bottom-0 bg-white'>
                        <h1 className='text-black text-2xl font-bold text-center'>Henri Robert</h1>
                        <p className='text-speaker text-base font-normal text-center'>Founder, Cards</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
