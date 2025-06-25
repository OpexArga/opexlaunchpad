
import { mdiEmailOutline, mdiLockOutline } from '@mdi/js';
import Icon from '@mdi/react';

export default function Login() {
    return (
        <div className="bg-white">
            <form action="#">
                    
                <div className="flex border  border-gray-700 mb-2">
                    <div className="bg-gray-700   items-center flex w-10 h-8 justify-center">
                        <Icon className='text-white' path={mdiEmailOutline} size={0.7} /></div>
                    <div className="bg-yellow-400 w-full">
                        <input className="bg-white h-full w-full text-xs px-2 outline-none placeholder-gray-400" placeholder='Enter your email' type="email" name="" id="" />
                    </div>
                </div>
                <div className="flex border border-gray-700 mb-2">
                    <div className="bg-gray-700 items-center flex w-10 h-8 justify-center">
                        <Icon className='text-white' path={mdiLockOutline} size={0.7} /></div>
                    <div className="bg-yellow-400 w-full">
                        <input className="bg-white h-full w-full text-xs px-2 outline-none placeholder-gray-400" placeholder='Enter your password' type="password" name="" id="" />
                    </div>
                </div>
                <button type='submit' className='bg-teal-500 rounded-sm text-white text-xs font-semibold py-2 w-full'>Login</button>
            </form>
        </div>
    )
}