import React from 'react'
import Categories from './Categories'
import Bar from './Bar'
import User from './User'
import Slider from "react-slick";

import 'react-multi-carousel/lib/styles.css';
import Logo from '../Logo';
function Home() {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };
    return (
        <div className='lg:flex  mt-3'>
            <div className='mb-2 lg:hidden'>
                <Logo />
            </div>
            <div className='border-t  pt-3  lg:w-4/12'>
                <Categories />
            </div>

            <div className='lg:w-9/12'>
                <div className='flex flex-col-reverse lg:flex-row items-center  lg:justify-between  w-full border-t'>
                    <Bar />
                    <User />
                </div>
                <Slider className='w-full px-3 mt-4' {...settings}>
                    <div className='bg-hero-pattern h-[260px] bg-cover bg-center relative'>
                        <span className='absolute text-white top-1/4 left-1/4'>
                            10% OFF YOUR FIRST ORDER
                        </span>
                        <span className='absolute lg:text-5xl text-3xl font-bold text-white top-2/4 left-10 lg:left-1/4'>
                            Fashionable Dress
                        </span>
                    </div>
                    <div className='bg-footer-texture h-[260px] bg-cover relative bg-center'>
                        <span className='absolute text-white top-1/4 left-1/4'>
                            10% OFF YOUR FIRST ORDER
                        </span>
                        <span className='absolute lg:text-5xl text-3xl font-bold text-white top-2/4 left-10 lg:left-1/4'>
                            Reasonable Price
                        </span>
                    </div>


                </Slider>
            </div>





        </div>
    )
}

export default Home