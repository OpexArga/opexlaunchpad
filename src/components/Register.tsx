

import { mdiEmailOutline, mdiLockOutline, mdiLockCheckOutline  } from '@mdi/js';
import Icon from '@mdi/react';
import { NavLink } from 'react-router-dom';
export default function Register() {
    return (
        <div className="bg-white">
            <form action="#">
                    
                <div className="flex border  border-gray-700 mb-2">
                    <div className="bg-gray-700   items-center flex w-10 h-8 justify-center">
                        <Icon className='text-white' path={mdiEmailOutline} size={0.7} /></div>
                    <div className="bg-yellow-400 w-full">
                        <input className="bg-white h-full w-full text-xs px-2 outline-none placeholder-gray-400" placeholder='you@example.com' type="email" name="" id="" />
                    </div>
                </div>
                <div className="flex border border-gray-700 mb-2">
                    <div className="bg-gray-700 items-center flex w-10 h-8 justify-center">
                        <Icon className='text-white' path={mdiLockOutline} size={0.7} /></div>
                    <div className="bg-yellow-400 w-full">
                        <input className="bg-white h-full w-full text-xs px-2 outline-none placeholder-gray-400" placeholder='Create a password' type="password" name="" id="" />
                    </div>
                </div>
                <div className="flex border border-gray-700 mb-2">
                    <div className="bg-gray-700 items-center flex w-10 h-8 justify-center">
                        <Icon className='text-white' path={mdiLockCheckOutline} size={0.7} /></div>
                    <div className="bg-yellow-400 w-full">
                        <input className="bg-white h-full w-full text-xs px-2 outline-none placeholder-gray-400" placeholder='Re-enter your password' type="password" name="" id="" />
                    </div>
                </div>
                <NavLink to="/" type='submit' className='bg-blue-600 rounded-sm text-center text-white text-xs font-semibold py-2 w-full'>Register</NavLink>
            </form>
        </div>
    )
}