import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import UserOnlineContext from '../../Context/UserOnlineContext'
import UserParamsContext from '../../Context/UserParamsContext';
import { AiOutlineUser } from 'react-icons/ai'
function User() {
    const { userOnline } = useContext(UserOnlineContext);
    const { userParams } = useContext(UserParamsContext);
    return (
        <div className=' lg:w-6/12 flex lg:justify-end justify-center  mt-5 '>
            {!userOnline ? <div>
                <NavLink className={'mx-3 hover:text-primary-color'} to={'/login'}>Login</NavLink>
                <NavLink className={'mx-3 hover:text-primary-color'} to={'/register'}>Register</NavLink>
            </div> :
                <NavLink className={'mx-3 hover:text-primary-color flex items-center border p-2 border-primary-color'} to={`/profile/${userParams}`}><AiOutlineUser size={20} className='mr-2' /> Profile</NavLink>
            }


        </div>
    )
}

export default User