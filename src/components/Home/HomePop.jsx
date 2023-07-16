import React from 'react'
import { TiTick } from 'react-icons/ti'
import { FaShippingFast } from 'react-icons/fa'
import { BiTransfer, BiSolidPhoneCall } from 'react-icons/bi'
function HomePop() {
    return (
        <div className='grid lg:grid-cols-4 grid-cols-2 gap-5 mt-10'>
            <div className="pop flex items-center border border-regal-blue  py-5 px-7">
                <TiTick className='text-primary-color text-5xl' />
                <span className='font-bold text-xl ml-2'>

                    Quality Product
                </span>
            </div>
            <div className="pop flex items-center border border-regal-blue  py-5 px-7">
                <FaShippingFast className='text-primary-color text-5xl' />
                <span className='font-bold text-xl ml-2'>

                    Free Shipping
                </span>
            </div>
            <div className="pop flex items-center border border-regal-blue  py-5 px-7">
                <BiTransfer className='text-primary-color text-5xl' />
                <span className='font-bold text-xl ml-2'>

                    14-Day Return
                </span>
            </div>
            <div className="pop flex items-center border border-regal-blue  py-5 px-7">
                <BiSolidPhoneCall className='text-primary-color text-5xl' />
                <span className='font-bold text-xl ml-2'>


                    24/7 Support
                </span>
            </div>



        </div>
    )
}

export default HomePop