import React from 'react'

export const EventsDesc = ({text}) => {
  return (
    <div className='bg-[#F6F6F6] rounded-xl max-w-[1018px] p-10 mt-20 min-h-[320px] flex justify-center items-center'>
        <p className='text-[20px] font-bold'>
            {text}
        </p>
    </div>
  )
}
