import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductItem from './ProductItem';
import Slider from "react-slick";
import { useContext } from 'react';
import ProductContext from '../../Context/ProdcustContext'
function TrandyProduct() {
    const products = useContext(ProductContext);
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div>
            <div className="title flex items-center justify-center my-10 ">
                <div className="pop  border border-black mx-2 w-12 h-0"></div>
                <div className='font-bold text-3xl'>
                    Trandy Products
                </div>
                <div className="pop  border border-black mx-2 w-12 h-0"></div>

            </div>

            <div className='grid  lg:grid-cols-4 gap-5'>

                {
                    products.map((item, index) => {
                        return (
                            <div key={index}>
                                <ProductItem item={item} />
                            </div>
                        )
                    })
                }
            </div>

            <Slider className='w-full  my-10 border pl-10' {...settings}>
                <div className=''>
                    <img src="https://themewagon.github.io/eshopper/img/vendor-8.jpg" alt="" />
                </div>
                <div className=''>
                    <img src="https://themewagon.github.io/eshopper/img/vendor-2.jpg" alt="" />
                </div>
                <div className=''>
                    <img src="https://themewagon.github.io/eshopper/img/vendor-3.jpg" alt="" />
                </div>
                <div className=''>
                    <img src="https://themewagon.github.io/eshopper/img/vendor-4.jpg" alt="" />
                </div>
                <div className=''>
                    <img src="https://themewagon.github.io/eshopper/img/vendor-5.jpg" alt="" />
                </div>
                <div className=''>
                    <img src="https://themewagon.github.io/eshopper/img/vendor-6.jpg" alt="" />
                </div>
                <div className=''>
                    <img src="https://themewagon.github.io/eshopper/img/vendor-8.jpg" alt="" />
                </div>
                <div className=''>
                    <img src="https://themewagon.github.io/eshopper/img/vendor-7.jpg" alt="" />
                </div>
                <div className=''>
                    <img src="https://themewagon.github.io/eshopper/img/vendor-2.jpg" alt="" />
                </div>
                <div className=''>
                    <img src="https://themewagon.github.io/eshopper/img/vendor-4.jpg" alt="" />
                </div>
                <div className=''>
                    <img src="https://themewagon.github.io/eshopper/img/vendor-1.jpg" alt="" />
                </div>

            </Slider>


        </div>
    )
}

export default TrandyProduct