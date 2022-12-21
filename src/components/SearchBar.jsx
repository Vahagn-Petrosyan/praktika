import React from 'react'
import { BiSearch } from 'react-icons/bi'

export const SearchBar = ({inpValue, setInpValue}) => {

  return (
    <label className='max-w-[1300px] flex gap-x-4 items-center border-b border-input mt-5 ml-20'>
        <BiSearch size = "25"/>
        <input type = "text" placeholder = "Search" className='outline-none p-4' onInput = {(e) => setInpValue(e.target.value)} value = {inpValue}/>
    </label>
  )
}
