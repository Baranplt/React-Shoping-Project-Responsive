import React from 'react'
import { BsFillCartFill } from 'react-icons/bs'
function Details() {
    return (
        <div>
            <div className='flex flex-col lg:flex-row mt-28'>

                <div className='lg:w-5/12  lg:h-[850px] border lg:mr-12 lg:p-20 p-3'>
                    <img className='w-full h-full max-w-full max-h-full' src={`https://images.pexels.com/photos/2735970/pexels-photo-2735970.jpeg?auto=compress&cs=tinysrgb&w=1600`} alt="" />
                </div>
                <div className="text lg:w-7/12  mb-5 lg:mb-0">
                    <div className="title text-3xl font-semibold text-text-color my-5">
                        Jewellry
                    </div>
                    <div className="price font-semibold text-4xl my-10">
                        $  999

                    </div>
                    <div className="desc text-lg text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque modi ipsum nam repudiandae suscipit est facilis culpa? Incidunt, officiis quos!
                    </div>
                    <button className='bg-primary-color flex  items-center text-xl py-2 px-7 hover:text-primary-color hover:bg-regal-blue mt-10'>
                        <BsFillCartFill className=' mr-5' />    Add To Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Details