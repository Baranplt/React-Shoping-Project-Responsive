import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react';
import ProductContext from '../Context/ProdcustContext'
import { BsFillCartFill } from 'react-icons/bs'
import CartContext from '../Context/CartContext';
import AddBasketContext from '../Context/AddBasketContext';
function ProductDetail() {
    const products = useContext(ProductContext);
    const addBasket = useContext(AddBasketContext);


    const { cart, setCart } = useContext(CartContext);
    const params = useParams()
    const found = products.find(item => item.id == params.id)



    return (
        <div className='flex lg:flex-row  flex-col mt-28'>

            <div className='lg:w-5/12 w-full  lg:h-[850px] border mr-12 p-20'>
                <img className='w-full h-full max-w-full max-h-full' src={`${found.image}`} alt="" />
            </div>
            <div className="text text-center lg:text-start mb-5  lg:w-7/12">
                <div className="title text-3xl font-semibold text-text-color my-5 ">
                    {found.title}
                </div>
                <div className="price font-semibold text-4xl my-10">
                    $  {found.price}

                </div>
                <div className="desc lineThree text-lg text-gray-400 ">
                    {found.description}
                </div>
                <div className="btn flex justify-center lg:justify-start">

                    <button onClick={() => { addBasket(found) }} className='bg-primary-color flex  items-center text-xl py-2 px-7 hover:text-primary-color hover:bg-regal-blue mt-10'>
                        <BsFillCartFill className=' mr-5' />    Add To Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail