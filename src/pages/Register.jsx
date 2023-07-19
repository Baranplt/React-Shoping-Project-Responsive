import React, { useContext, useState } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup';
import axios from "axios";
import UserContext from '../Context/UserContext';
import { TiTick } from 'react-icons/ti'
function Register() {
    const user = useContext(UserContext)
    const [sucsses, setSucsses] = useState(false)
    const addUser = async (values) => {
        const user = {
            email: 'John@gmail.com',
            username: 'johnd',
            password: 'm38rmF$',
            name: {
                firstname: 'John',
                lastname: 'Doe'
            },
            address: {
                city: 'kilcoole',
                street: '7835 new road',
                number: 3,
                zipcode: '12926-3874',
                geolocation: {
                    lat: '-37.3159',
                    long: '81.1496'
                }
            },
            phone: '1-570-236-7033'
        };

        const response = axios.post('https://fakestoreapi.com/users', user)
        if (response) {
            setSucsses(true)
            setTimeout(() => {
                setSucsses(false)

            }, 3000);
        }
    }
    return (
        <div className='flex justify-center py-10'>
            <div className='w-7/12'>
                <Formik
                    initialValues={{
                        name: '',
                        surname: '',
                        userName: '',
                        email: '',
                        password: '',
                    }}
                    validationSchema={
                        Yup.object({
                            name: Yup.string().required('Please Enter Your Name'),
                            surname: Yup.string().required('Please Enter Your surname'),
                            userName: Yup.string().required('Please Enter Your userName'),
                            email: Yup.string().email().required('Please Enter Your Email'),
                            password: Yup.string().required('Please Enter Your Password'),

                        })
                    }
                    onSubmit={async (values, { resetForm, setSubmitting }) => {
                        addUser(values)
                        setTimeout(() => {
                            setSubmitting(false)
                            resetForm()
                        }, 2000);


                    }}

                >
                    {
                        ({ values, errors, handleSubmit, handleReset, touched, handleChange, dirty, isSubmitting }) => (
                            <form className='form    flex flex-col items-center justify-center' onSubmit={handleSubmit}  >

                                <div className="title font-bold text-3xl">
                                    Sign in
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
                                    <input value={values.surname}
                                        onChange={handleChange}
                                        autoComplete="off"
                                        className='outline-none   border-b  py-3 w-full text-xl px-2 mt-5'
                                        placeholder='Your Surname'
                                        id='surname'
                                        type="text" />

                                    {errors.surname && touched.surname && (
                                        <div className=' text-red-700 text-sm italic'>{errors.surname}</div>
                                    )}
                                    <input value={values.userName}
                                        onChange={handleChange}
                                        autoComplete="off"
                                        className='outline-none   border-b  py-3 w-full text-xl px-2 mt-5'
                                        placeholder='Your User Name'
                                        id='userName'
                                        type="text" />

                                    {errors.userName && touched.userName && (
                                        <div className=' text-red-700 text-sm italic'>{errors.userName}</div>
                                    )}
                                    <input value={values.email}
                                        onChange={handleChange}
                                        autoComplete="off"
                                        className='outline-none   border-b  py-3 w-full text-xl px-2 mt-5'
                                        placeholder='Your Email'
                                        id='email'
                                        type="email" />

                                    {errors.email && touched.email && (
                                        <div className=' text-red-700 text-sm italic'>{errors.email}</div>
                                    )}
                                    <input value={values.password}
                                        onChange={handleChange}
                                        autoComplete="off"
                                        className='outline-none   border-b  py-3 w-full text-xl px-2 mt-5'
                                        placeholder='Your password'
                                        id='password'
                                        type="password" />

                                    {errors.password && touched.password && (
                                        <div className=' text-red-700 text-sm italic'>{errors.password}</div>
                                    )}


                                </div>

                                <button className='bg-primary-color w-9/12 py-4 text-lg hover:bg-[#c5837c] transition-all duration-500 hover:text-white mt-7'>
                                    Subscribe Now
                                </button>
                                {
                                    sucsses ? <div className=' text-green-700 text-lg mt-5  font-bold italic flex items-center'>
                                        Registration Successful  <TiTick className='ml-3 ' size={33} /> </div> : null
                                }

                            </form>
                        )
                    }


                </Formik>
            </div>
        </div>
    )
}

export default Register