import React from 'react';
import loginBg from '../assets/loginbg.jpg'; // One level up from pages/

const Login = () => {
  return (
    <div className='flex h-screen'>
      <div className='flex-1 bg-emerald-100'></div>
      <div className='flex flex-col w-96'>
        <div className='bg-emerald-300 flex justify-center'>Top</div>
        <div className='bg-emerald-200 flex flex-1 justify-center items-center'>Center</div>
        <div className='bg-emerald-300 flex justify-center'>Bottom</div>
      </div>
    </div>
  );
};

export default Login;