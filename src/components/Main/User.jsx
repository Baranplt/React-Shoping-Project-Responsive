import React from 'react'
import { NavLink } from 'react-router-dom'

function User() {
    return (
        <div className=' lg:w-6/12 flex lg:justify-end justify-center  mt-5 '>
            <NavLink className={'mx-3 hover:text-primary-color'} to={'/login'}>Login</NavLink>
            <NavLink className={'mx-3 hover:text-primary-color'} to={'/register'}>Register</NavLink>

        </div>
    )
}

export default User