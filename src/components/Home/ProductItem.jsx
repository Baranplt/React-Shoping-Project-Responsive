import React, { useContext, useState } from 'react'
import { LiaEyeSolid } from 'react-icons/lia'
import { BsFillCartFill } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import AddBasketContext from '../../Context/AddBasketContext'
function ProductItem({ item }) {

    const addBasket = useContext(AddBasketContext);
    const [add, setAdd] = useState(false)
    const deneme = (item) => {
        setAdd(true)
        setTimeout(() => {
            setAdd(false)
        }, 400);
    }
    return (
        <div className="hover:shadow-2xl transition-all duration-300">
            <div className="product border cursor-pointer">
                <NavLink to={`/productDetail/${item.id}`}>
                    <div className=' flex justify-center items-center'>
                        <div className="img w-[350px] h-[450px] flex justify-center items-center  p-10">
                            <img className=' w-full h-full max-w-full max-h-full   hover:scale-110 transition-all duration-500' src={`${item.image}`} alt="" />
                        </div>
                    </div>
                    <div className='text border-t-2 flex flex-col justify-center items-center'>
                        <div className="title font-semibold my-3 line" >
                            {item.title}
                        </div>
                        <div className="price flex">
                            <div className=" font-semibold my-3 mr-2">
                                ${item.price}
                            </div>
                            <div className=" font-semibold my-3 text-sm text-gray-400 line-through">
                                ${item.price}
                            </div>
                        </div>
                    </div>
                </NavLink>
                <div className="buy flex justify-between px-5 border-t p-2">
                    <div className="detail flex items-center">
                        <LiaEyeSolid size={20} className='text-primary-color mr-2' />
                        <span className='text-sm font-medium hover:text-primary-color'>View Detail</span>
                    </div>
                    <span className={`bg-green-400 px-2 text-sm text-white rounded-xl ${add ? 'block' : 'hidden'}`}>
                        Added to cart

                    </span>
                    <div className="add flex items-center">

                        <BsFillCartFill size={20} className='text-primary-color mr-2' />
                        <button onClick={() => { addBasket(item) }} className='text-sm font-medium hover:text-primary-color'>
                            <span onClick={() => { deneme(item) }}>
                                Add To Cart
                            </span>
                        </button>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProductItem