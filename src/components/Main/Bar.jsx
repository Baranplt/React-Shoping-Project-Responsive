import React from 'react'
import { NavLink } from 'react-router-dom'

function Bar() {
    return (
        <div className='lg:w-3/12'>
            <div className='mt-5 lg:ml-5 '>
                <NavLink className={'mx-3 hover:text-primary-color lg:border-none p-2 px-2 rounded-xl border border-primary-color'} to={'/'}>Home</NavLink>
                <NavLink className={'mx-3 hover:text-primary-color lg:border-none p-2 px-2 rounded-xl border border-primary-color'} to={'/details'}>Details</NavLink>
                <NavLink className={'mx-3 hover:text-primary-color lg:border-none p-2 px-2 rounded-xl border border-primary-color'} to={'/contact'}>Contact</NavLink>
            </div>
        </div>
    )
}

export default Bar