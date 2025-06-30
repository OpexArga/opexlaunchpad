
import { mdiEmailOutline, mdiLockOutline } from '@mdi/js';
import Icon from '@mdi/react';
import { useState } from "react";
import api from "../api/axios";
import { saveToken } from "../utils/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
        const res = await api.post("/auth/login", { email, password });
        saveToken(res.data.token);
        alert("Login successful. Welcome!");
        navigate("/");
        } catch (err: any) {
            alert("Login failed: " + err.response?.data);
        }
    };
    return (
        <div className="bg-white">
            <form onSubmit={handleLogin}>
                    
                <div className="flex border  border-gray-700 mb-2">
                    <div className="bg-gray-700   items-center flex w-10 h-8 justify-center">
                        <Icon className='text-white' path={mdiEmailOutline} size={0.7} /></div>
                    <div className="bg-yellow-400 w-full">
                        <input className="bg-white h-full w-full text-xs px-2 outline-none placeholder-gray-400" 
                        placeholder='Enter your email' value={email} onChange={e => setEmail(e.target.value)} required/>
                    </div>
                </div>
                <div className="flex border border-gray-700 mb-2">
                    <div className="bg-gray-700 items-center flex w-10 h-8 justify-center">
                        <Icon className='text-white' path={mdiLockOutline} size={0.7} /></div>
                    <div className="bg-yellow-400 w-full">
                        <input className="bg-white h-full w-full text-xs px-2 outline-none placeholder-gray-400" 
                        placeholder='Enter your password' type="password" value={password} onChange={e => setPassword(e.target.value)} required/>
                    </div>
                </div>
                <button type='submit' className='bg-blue-600 rounded-sm text-center text-white text-xs font-semibold py-2 w-full'>Login</button>
            </form>
        </div>
    )
}