import React from 'react'
import HeaderLinks from './HeaderLinks'
import HeaderSocial from './HeaderSocial'

function HeaderSup() {
    return (
        <div className='container mx-auto  w-full  flex justify-center lg:justify-between items-center' >
            <HeaderLinks />
            <HeaderSocial />
        </div>
    )
}

export default HeaderSup