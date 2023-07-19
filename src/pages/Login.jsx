import React, { useContext, useEffect, useState } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup';
import UserContext from '../Context/UserContext';
import UserOnlineContext from '../Context/UserOnlineContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Login() {
    const user = useContext(UserContext);
    const { userOnline, setUserOnline } = useContext(UserOnlineContext);
    const navigate = useNavigate();

    const [error, setError] = useState(false)



    const control = (email, password) => {
        const controlUser = user.find(user => email == user.email && password == user.password)

        if (controlUser) {
            setUserOnline(true)
            navigate(`/profile/${email}`)
        } else {
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 3000);

        }


    }

    return (
        <div>

            <div className='my-40 flex justify-center'>

                <div className='lg:w-5/12 border  py-20 lg:px-10'>
                    <Formik
                        initialValues={{
                            password: '',
                            email: '',
                        }}
                        validationSchema={
                            Yup.object({
                                password: Yup.string().required('Please Enter Your password'),
                                email: Yup.string().email().required('Please Enter Your Email'),

                            })
                        }
                        onSubmit={async (values, { resetForm, setSubmitting }) => {
                            control(values.email, values.password)
                            setTimeout(() => {
                                setSubmitting(false)
                                resetForm()
                            }, 2000);

                        }}

                    >
                        {
                            ({ values, errors, handleSubmit, handleReset, touched, handleChange, dirty, isSubmitting }) => (
                                <form className='form flex flex-col items-center lg:items-start ' onSubmit={handleSubmit}  >
                                    {
                                        error ? <div className=' text-red-700 text-lg italic  w-7/12 my-5 font-bold'>
                                            <div className='text-center capitalize'>
                                                the username or password is incorrect please try again
                                            </div>
                                        </div> : null
                                    }
                                    <div className="title font-bold text-3xl">
                                        Sign in
                                    </div>
                                    <div className="name flex flex-col w-9/12">



                                        <div className="">
                                            <input
                                                value={values.email}
                                                onChange={handleChange}
                                                autoComplete="off"
                                                className='outline-none   border-b  py-3 w-full text-xl px-2 mt-5'
                                                placeholder='Your Email'
                                                id='email'
                                                type="email" />
                                        </div>

                                        {errors.email && touched.email && (
                                            <div className=' text-red-700 text-sm italic'>{errors.email}</div>
                                        )}
                                        <input type="password"
                                            value={values.password}
                                            onChange={handleChange}
                                            autoComplete="off"
                                            className='outline-none border-b py-3 w-full text-xl px-2 mt-5'
                                            placeholder='Your password'
                                            id='password'
                                        />
                                        {errors.password && touched.password && (
                                            <div className=' text-red-700 text-sm italic'>{errors.password}</div>
                                        )}
                                    </div>



                                    <button type={'submit'} className='bg-primary-color w-9/12 py-4 text-lg hover:bg-[#c5837c] transition-all duration-500 hover:text-white mt-7'>
                                        Sign in
                                    </button>

                                </form>
                            )
                        }


                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default Login