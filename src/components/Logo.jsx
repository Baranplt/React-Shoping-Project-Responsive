import React from 'react'
import { NavLink } from 'react-router-dom'

function Logo() {
    return (
        <NavLink to={'/'} className='flex items-center'>

            <span className='font-bold text-primary-color border border-primary-color text-[40px]   px-5  flex justify-center items-center'>
                B
            </span>
            <span className='font-semibold  text-4xl ml-1'>
                Shopper
            </span>
        </NavLink>
    )
}

export default Logo