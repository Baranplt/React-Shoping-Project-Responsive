import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
function SearchInput() {
    return (
        <div className='flex items-center  '>

            <input className='border p-1 w-[832px]' type="text" placeholder='Search for products ' />
            <button className='text-primary-color text-lg border border-l-0 h-[34px] px-2 font-bold '><AiOutlineSearch /></button>
        </div>
    )
}

export default SearchInput