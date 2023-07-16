import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { AiOutlineDown } from 'react-icons/ai'
function Categories() {
    const [categories, setCategories] = useState([])


    const getCategories = async () => {
        const response = await axios.get('https://fakestoreapi.com/products/categories');
        setCategories(response.data)
    }
    useEffect(() => {
        getCategories()
    }, [])

    return (
        <div className=' '>
            <div className='flex items-center pl-12 bg-primary-color w-full font-medium text-text-color px-4 py-5'>Categories

            </div>
            {
                categories.map((item, index) => {
                    return (
                        <div key={index} className='  px-4 border py-5 border-t-0 capitalize cursor-pointer hover:text-primary-color' >{item}</div>
                    )
                })
            }
        </div>
    )
}

export default Categories