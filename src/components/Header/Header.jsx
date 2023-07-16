import React from 'react'
import Logo from '../Logo'
import SearchInput from '../SearchInput'
import Icon from './Icon'

function Header() {
    return (
        <div className='flex items-center justify-between'>

            <div className='w-3/12 hidden lg:block'>
                <Logo />
            </div>
            <div className='lg:w-6/12  '>
                <SearchInput />

            </div>
            <div className=' lg:w-3/12 '>
                <Icon />

            </div>
        </div>
    )
}

export default Header