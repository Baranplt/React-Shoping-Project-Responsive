import React from 'react'
import Categories from './Categories'
import { NavLink } from 'react-router-dom'
import Bar from './Bar'
import User from './User'
function Navbar() {
    return (
        <div className=' border-t flex  '>
            <div className=' w-3/12 bg-slate-500'>
                <Categories />
            </div>
            <div className='bg-red-50 w-full'>
                <Bar />
                <User />
            </div>
        </div>
    )
}

export default Navbar