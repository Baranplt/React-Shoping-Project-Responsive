import React, { useContext, useEffect } from 'react'
import CartContext from '../Context/CartContext';
import { PiSmileySadBold } from 'react-icons/pi'
function Cart() {
    const { cart, setCart } = useContext(CartContext);
    const increment = (item) => {
        const updatedProducts = cart.map(product => {
            if (product.id === item.id) {
                return { ...product, amount: product.amount + 1 };
            }
            return product;
        });
        setCart(updatedProducts);
    }
    const decrement = (item) => {
        const updatedProducts = cart.map(product => {
            if (product.id === item.id) {
                return { ...product, amount: product.amount - 1 };
            }
            return product;
        });
        setCart(updatedProducts);
    }

    const totalPrice = cart.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue.price;
    }, 0);
    const clearCart = () => {
        setCart([])
    }

    return (
        cart.length > 0 ? <div className='mb-56'>
            <div className="title text-center font-bold text-3xl my-16">
                Your Cart
            </div>
            <div className="header flex lg:text-xl border-b ">
                <div className='w-5/12 lg:w-4/12 capitalize'>
                    item
                </div>
                <div className='w-2/12 capitalize'>
                    price
                </div>
                <div className='w-3/12  lg:w-2/12 '>
                    Quantity
                </div>
                <div className='w-2/12'>
                    Total
                </div>
            </div>
            {
                cart.map((item, index) => {
                    return (
                        <div key={index} className='flex items-center  border-b'>
                            <div className="prduct lg:border-none border-r  p-1 w-5/12 lg:w-4/12 flex items-center">
                                <div className="div w-38 h-28 lg:w-44 lg:h-44 p-5">
                                    <img className='w-full h-full max-w-full max-h-full' src={`${item.image}`} alt="" />
                                </div>
                                <div className="name  text-xs lg:text-base">
                                    {item.title}
                                </div>
                            </div>
                            <div className="price  w-2/12">
                                $   {item.price}

                            </div>
                            <div className="quant  lg:block flex border-l flex-col justify-center items-center w-2/12">
                                <button onClick={() => { increment(item) }} className=' border bg-green-600 text-xl text-white lg:mr-5 px-5'>+</button>
                                {item.amount}
                                <button onClick={() => { decrement(item) }} className=' border bg-red-600 text-xl text-white lg:ml-5 px-5'>-</button>

                            </div>
                            <div className="total flex pl-10  lg:pl-0 w-2/12">
                                ${item.amount * item.price}
                            </div>
                        </div>
                    )
                })
            }
            <div className=' w-9/12 flex justify-end mt-5'>
                <div className='flex flex-col'>
                    <div>
                        <span className='font-bold text-xl mr-2'>
                            SubTotal</span> : <span className='text-lg ml-3'>
                            ${totalPrice}
                        </span>

                    </div>
                    <button onClick={() => { clearCart() }} className='bg-red-700 text-white px-5 py-2 rounded-lg'>
                        Clear Cart
                    </button>
                </div>

            </div>
        </div> :
            <div className='lg:flex  justify-center items-center title text-center font-bold text-3xl my-16'>

                There is no product in your cart  <PiSmileySadBold className='ml-2 flex items-center' />
            </div>
    )
}

export default Cart