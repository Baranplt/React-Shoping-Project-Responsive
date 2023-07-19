import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import UserContext from '../Context/UserContext';
import UserParamsContext from '../Context/UserParamsContext';

function Profile() {
    const params = useParams()
    const user = useContext(UserContext);
    const { userParams, setUserParams } = useContext(UserParamsContext);
    setUserParams(params.email)
    const userFinded = user.find(user => user.email == params.email)

    return (
        <div className='flex justify-center'>
            <div className='border my-20 w-full  lg:w-5/12'>

                <div className='useName text-lg border-t lg:p-2 p-5'>
                    <span className='font-bold text-xl'>
                        User Name </span>: {userFinded.username}
                </div>
                <div className='name text-lg border-t lg:p-2 p-5'>
                    <span className='font-bold text-xl'>
                        Name </span>: {userFinded.name.firstname}
                </div>
                <div className='Surname text-lg border-t lg:p-2 p-5'>
                    <span className='font-bold text-xl'>
                        Surname </span>: {userFinded.name.lastname}
                </div>
                <div className='Email text-lg border-t lg:p-2 p-5'>
                    <span className='font-bold text-xl'>
                        Email </span>: {userFinded.email}
                </div>
                <div className='number text-lg border-t lg:p-2 p-5'>
                    <span className='font-bold text-xl'>
                        Phone </span>: {userFinded.phone}
                </div>
            </div>
        </div>
    )
}

export default Profile