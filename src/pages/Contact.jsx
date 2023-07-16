import React from 'react'
import { Formik } from 'formik'
import { FaLocationDot, FaMessage } from 'react-icons/fa6'
import { IoCallSharp } from 'react-icons/io5'
import * as Yup from 'yup';
function Contact() {
    return (
        <div>

            <div className='flex justify-center'>
                <div className="title flex items-center mx-3 mt-10 ">
                    <div className='border w-8 h-0 mx-3 border-black'>
                    </div>
                    <div className='font-bold text-4xl'>
                        Contact For Any Queries
                    </div>
                    <div className='border w-8 h-0 mx-3 border-black'>
                    </div>
                </div>
            </div>

            <div className='lg:flex my-10'>
                <div className='lg:w-7/12'>
                    <Formik
                        initialValues={{
                            name: '',
                            email: '',
                            message: '',
                        }}
                        validationSchema={
                            Yup.object({
                                name: Yup.string().required('Please Enter Your Name'),
                                email: Yup.string().email().required('Please Enter Your Email'),
                                message: Yup.string().required().required('Please Enter Your Message'),

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
                                <form className='form    ' onSubmit={handleSubmit}  >


                                    <div className="name flex flex-col ">

                                        <input type="text"
                                            value={values.name}
                                            onChange={handleChange}
                                            autoComplete="off"
                                            className='outline-none border py-3 w-full text-xl px-2 mt-5'
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
                                            className='outline-none   border  py-3 w-full text-xl px-2 mt-5'
                                            placeholder='Your Email'
                                            id='email'
                                            type="email" />
                                    </div>
                                    <div className="">


                                        {errors.email && touched.email && (
                                            <div className=' text-red-700 text-sm italic'>{errors.email}</div>
                                        )}
                                    </div>
                                    <textarea type="text"
                                        value={values.message}
                                        onChange={handleChange}
                                        autoComplete="off"
                                        className='outline-none border py-3 w-full text-xl px-2 mt-5'
                                        placeholder='Your Message'
                                        id='message'
                                    />
                                    {errors.message && touched.message && (
                                        <div className=' text-red-700 text-sm italic'>{errors.message}</div>
                                    )}



                                    <button className='bg-primary-color lg:w-3/12 rounded-lg py-4 px-5 text-lg hover:bg-[#c5837c] transition-all duration-500 hover:text-white mt-7'>
                                        Send Message
                                    </button>

                                </form>
                            )
                        }


                    </Formik>
                </div>
                <div className='lg:w-5/12 pl-5'>
                    <div className="title mt-5">
                        <div className='font-bold text-xl mb-5'>
                            Get in Touch
                        </div>
                        <span className='text-lg text-gray-400'>
                            Justo sed diam ut sed amet duo amet lorem amet stet sea ipsum, sed duo amet et. Est elitr dolor elitr erat sit sit. Dolor diam et erat clita ipsum justo sed.


                        </span>
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
            </div>
        </div>
    )
}

export default Contact