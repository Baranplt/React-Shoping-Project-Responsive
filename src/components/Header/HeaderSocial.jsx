import React from 'react'
import { BiLogoFacebook, BiLogoTwitter, BiLogoLinkedinSquare, BiLogoInstagramAlt, BiLogoYoutube } from 'react-icons/bi';

function HeaderSocial() {
    return (
        <div >
            <ul className='flex'>
                <li>
                    <a href="#">
                        <BiLogoFacebook size={20} className='mr-3 hover:text-gray-800 cursor-pointer' />

                    </a>
                </li>
                <li>
                    <a href="#">
                        <BiLogoTwitter size={20} className='mr-3 hover:text-gray-800 cursor-pointer' />

                    </a>
                </li>
                <li>
                    <a href="#">
                        <BiLogoLinkedinSquare size={20} className='mr-3 hover:text-gray-800 cursor-pointer' />

                    </a>
                </li>
                <li>
                    <a href="#">
                        <BiLogoInstagramAlt size={20} className='mr-3 hover:text-gray-800 cursor-pointer' />

                    </a>
                </li>
                <li>
                    <a href="#">
                        <BiLogoYoutube size={20} className='mr-3 hover:text-gray-800 cursor-pointer' />

                    </a>
                </li>
            </ul>

        </div>
    )
}

export default HeaderSocial