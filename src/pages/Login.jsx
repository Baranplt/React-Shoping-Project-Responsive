import React, { useContext, useEffect, useState } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup';
import UserContext from '../Context/UserContext';
import axios from 'axios';
function Login() {
    // const user = useContext(UserContext);

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [user, setUser] = useState([])


    const getUser = async () => {
        const response = await axios.get('https://fakestoreapi.com/users');
        setUser(response.data)
    }

    useEffect(() => {
        getUser()
    },)

    const control = () => {
        const controlUser = user.find(user => email == user.email && password == user.password)

        if (controlUser) {
            console.log('giriş başarılı')
        } else {
            console.log('giriş başarısız')

        }


    }

    return (
        <div>

            <div className='my-40 flex justify-center'>

                <div className='w-5/12 border py-20 px-10'>
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

                            setEmail(values.email)
                            setPassword(values.password)

                            await new Promise(resolve => {
                                setEmail(values.email)
                                setPassword(values.password)
                                resolve()
                            })
                            // setTimeout(() => {
                            //     setSubmitting(false)
                            //     resetForm()
                            // }, 2000);
                            control()

                        }}

                    >
                        {
                            ({ values, errors, handleSubmit, handleReset, touched, handleChange, dirty, isSubmitting }) => (
                                <form className='form    flex flex-col ' onSubmit={handleSubmit}  >

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