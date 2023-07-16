import React from 'react'

function HeaderLinks() {
    return (
        <div>
            <ul className=' hidden lg:flex'>
                <li>
                    <a href="#" className='text-text-color hover:border-b  pr-2   hover:underline'>FAQs
                    </a>
                </li>
                <span >
                    |
                </span>
                <li>
                    <a href="#" className='text-text-color hover:border-b  pr-2 pl-2   hover:underline'>Help
                    </a>
                </li>
                <span >
                    |
                </span>
                <li>
                    <a href="#" className='text-text-color hover:border-b  pr-2 pl-2   hover:underline'>Support
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default HeaderLinks