import React, { useContext } from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { BsCartFill } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import CartContext from '../../Context/CartContext'
function Icon() {
    const cart = useContext(CartContext);
    console.log()
    return (
        <div >
            <div className='flex justify-end'>
                <div className="favorite mr-5  flex justify-center items-center border text-sm font-bold border-regal-blue p-2 px-3">
                    <AiFillHeart className='text-primary-color  mr-1' size={18} /> 0
                </div>
                <NavLink to={'/cart'} className="cart  flex justify-center items-center border text-sm font-bold border-regal-blue p-2 px-3">
                    <BsCartFill className='text-primary-color  mr-1' size={18} /> {cart.cart.length}

                </NavLink >
            </div>

        </div>
    )
}

export default Icon