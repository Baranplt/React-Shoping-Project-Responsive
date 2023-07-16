import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
function SearchInput() {
    return (
        <div className='flex items-center  '>

            <input className='border p-[6px] lg:w-[832px] w-[220px]' type="text" placeholder='Search for products ' />
            <button className='text-primary-color text-lg border border-l-0 h-[38px] px-2 font-bold '><AiOutlineSearch /></button>
        </div>
    )
}

export default SearchInput