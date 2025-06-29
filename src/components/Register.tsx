

import { mdiEmailOutline, mdiLockOutline, mdiLockCheckOutline  } from '@mdi/js';
import Icon from '@mdi/react';
import { useState } from "react";
import api from "../api/axios";
export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
        await api.post("/auth/register", { email, password });
        alert("Registration successful. You can now log in.");
        
    } catch (err: any) {
        alert("Registration failed: " + err.response?.data);
    }
    };
    return (
        <div className="bg-white">
            <form onSubmit={handleRegister}>
                    
                <div className="flex border  border-gray-700 mb-2">
                    <div className="bg-gray-700   items-center flex w-10 h-8 justify-center">
                        <Icon className='text-white' path={mdiEmailOutline} size={0.7} /></div>
                    <div className="bg-yellow-400 w-full">
                        <input className="bg-white h-full w-full text-xs px-2 outline-none placeholder-gray-400" 
                        placeholder='you@example.com'  value={email} onChange={e => setEmail(e.target.value)} required />
                    </div>
                </div>
                <div className="flex border border-gray-700 mb-2">
                    <div className="bg-gray-700 items-center flex w-10 h-8 justify-center">
                        <Icon className='text-white' path={mdiLockOutline} size={0.7} /></div>
                    <div className="bg-yellow-400 w-full">
                        <input className="bg-white h-full w-full text-xs px-2 outline-none placeholder-gray-400" 
                        placeholder='Create a password' type="password" value={password} onChange={e => setPassword(e.target.value)} required />
                    </div>
                </div>
                <div className="flex border border-gray-700 mb-2">
                    <div className="bg-gray-700 items-center flex w-10 h-8 justify-center">
                        <Icon className='text-white' path={mdiLockCheckOutline} size={0.7} /></div>
                    <div className="bg-yellow-400 w-full">
                        <input className="bg-white h-full w-full text-xs px-2 outline-none placeholder-gray-400" placeholder='Re-enter your password' type="password" name="" id="" />
                    </div>
                </div>
                <button type='submit' className='bg-blue-600 rounded-sm text-center text-white text-xs font-semibold py-2 w-full'>Register</button>
            </form>
        </div>
    )
}