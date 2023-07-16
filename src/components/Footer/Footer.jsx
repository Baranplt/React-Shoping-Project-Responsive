import React from 'react'
import Logo from '../Logo'
import { FaLocationDot, FaMessage } from 'react-icons/fa6'
import { IoCallSharp } from 'react-icons/io5'
import { BiSolidChevronRight } from 'react-icons/bi'
import { Formik } from 'formik'
import * as Yup from 'yup';
function Footer() {
    return (
        <div className='container pt-20'>
            <div className=' flex flex-col lg:flex-row justify-evenly'>
                <div className="info lg:w-4/12 ">
                    <Logo />
                    <div className="text text-lg mt-10 text-text-color text-center lg:text-start">
                        Dolore erat dolor sit lorem vero amet. Sed sit lorem magna, ipsum no sit erat lorem et magna ipsum dolore amet erat.
                    </div>
                    <div className="communication mt-8 flex lg:block flex-col justify-center items-center">
                        <div className="location flex items-center">
                            <FaLocationDot size={20} className='text-primary-color mr-2 my-3' />
                            <span></span>
                            123 Street, New York, USA
                        </div>
                        <div className="location flex items-center">
                            <FaMessage size={20} className='text-primary-color mr-2 my-3' />
                            <span></span>
                            info@example.com                    </div>
                        <div className="location flex items-center">
                            <IoCallSharp size={20} className='text-primary-color mr-2 my-3' />
                            <span></span>
                            +012 345 67890                    </div>
                    </div>

                </div>
                <div className="links flex lg:w-4/12 justify-between px-4 lg:px-0 lg:justify-evenly">
                    <div className="links   ">
                        <div className='font-bold text-2xl mb-4 ml-3'>
                            Quick Links
                        </div>
                        <ul>
                            <li>
                                <a href="#" className='flex items-center text-lg'>
                                    <BiSolidChevronRight size={20} className='font-bold my-3' /> Home
                                </a>
                            </li>
                            <li>
                                <a href="#" className='flex items-center text-lg'>
                                    <BiSolidChevronRight size={20} className='font-bold my-3' /> Our Shop
                                </a>
                            </li>
                            <li>
                                <a href="#" className='flex items-center text-lg'>
                                    <BiSolidChevronRight size={20} className='font-bold my-3' /> Shop Detail
                                </a>
                            </li>
                            <li>
                                <a href="#" className='flex items-center text-lg'>
                                    <BiSolidChevronRight size={20} className='font-bold my-3' /> Shopping Cart
                                </a>
                            </li>
                            <li>
                                <a href="#" className='flex items-center text-lg'>
                                    <BiSolidChevronRight size={20} className='font-bold my-3' /> Checkout
                                </a>
                            </li>
                            <li>
                                <a href="#" className='flex items-center text-lg'>
                                    <BiSolidChevronRight size={20} className='font-bold my-3' /> Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="links ">
                        <div className='font-bold text-2xl mb-4 ml-3'>
                            Quick Links
                        </div>
                        <ul>
                            <li>
                                <a href="#" className='flex items-center text-lg'>
                                    <BiSolidChevronRight size={20} className='font-bold my-3' /> Home
                                </a>
                            </li>
                            <li>
                                <a href="#" className='flex items-center text-lg'>
                                    <BiSolidChevronRight size={20} className='font-bold my-3' /> Our Shop
                                </a>
                            </li>
                            <li>
                                <a href="#" className='flex items-center text-lg'>
                                    <BiSolidChevronRight size={20} className='font-bold my-3' /> Shop Detail
                                </a>
                            </li>
                            <li>
                                <a href="#" className='flex items-center text-lg'>
                                    <BiSolidChevronRight size={20} className='font-bold my-3' /> Shopping Cart
                                </a>
                            </li>
                            <li>
                                <a href="#" className='flex items-center text-lg'>
                                    <BiSolidChevronRight size={20} className='font-bold my-3' /> Checkout
                                </a>
                            </li>
                            <li>
                                <a href="#" className='flex items-center text-lg'>
                                    <BiSolidChevronRight size={20} className='font-bold my-3' /> Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='lg:w-4/12  mt-10 lg:mt-0'>
                    <div className=" ">
                        <Formik
                            initialValues={{
                                name: '',
                                email: '',
                            }}
                            validationSchema={
                                Yup.object({
                                    name: Yup.string().required('Please Enter Your Name'),
                                    email: Yup.string().email().required('Please Enter Your Email'),

                                })
                            }
                            onSubmit={(values, { resetForm, setSubmitting }) => {
                                setTimeout(() => {
                                    setSubmitting(false)
                                    resetForm()
                                }, 2000);
                            }}

                        >
                            {
                                ({ values, errors, handleSubmit, handleReset, touched, handleChange, dirty, isSubmitting }) => (
                                    <form className='form    flex flex-col items-center justify-center lg:items-end' onSubmit={handleSubmit}  >

                                        <div className="title font-bold text-3xl">
                                            NewsLetter
                                        </div>
                                        <div className="name flex flex-col w-9/12">

                                            <input type="text"
                                                value={values.name}
                                                onChange={handleChange}
                                                autoComplete="off"
                                                className='outline-none border-b py-3 w-full text-xl px-2 mt-5'
                                                placeholder='Your Name'
                                                id='name'
                                            />
                                            {errors.name && touched.name && (
                                                <div className=' text-red-700 text-sm italic'>{errors.name}</div>
                                            )}
                                            <input
                                                value={values.email}
                                                onChange={handleChange}
                                                autoComplete="off"
                                                className='outline-none   border-b  py-3 w-full text-xl px-2 mt-5'
                                                placeholder='Your Email'
                                                id='email'
                                                type="email" />
                                        </div>
                                        <div className="">


                                            {errors.email && touched.email && (
                                                <div className=' text-red-700 text-sm italic'>{errors.email}</div>
                                            )}
                                        </div>


                                        {errors.message && touched.message && (
                                            <div className=' text-red-700 text-sm italic'>{errors.message}</div>
                                        )}
                                        <button className='bg-primary-color w-9/12 py-4 text-lg hover:bg-[#c5837c] transition-all duration-500 hover:text-white mt-7'>
                                            Subscribe Now
                                        </button>

                                    </form>
                                )
                            }


                        </Formik>
                    </div>
                </div>
            </div>
            <div className='border-2 border-white'>

            </div>
            <div className='text-lg  text-center lg:text-start lg:w-4/12 py-5'>
                <span className='font-bold'>Your Site Name.</span> All Rights Reserved. Designed by HTML Codex
                Distributed By <span className='text-primary-color'>
                    ThemeWagon
                </span>
            </div>
        </div>
    )
}

export default Footer