import React from 'react';
import loginBg from '../assets/loginbg.jpg'; // One level up from pages/
import logo from '../assets/logo.png'; // One level up from pages/
import Icon from '@mdi/react';
import { mdiEmailCheckOutline  } from '@mdi/js';

const Login = () => {
  return (
    <div className='flex h-screen'>
      <div className='flex-1'>
        <img
          src={loginBg}
          alt="Placeholder"
          className="w-full h-full object-cover"
        />
      </div>
      <div className='flex flex-col w-96'>
        <div className='flex justify-center text-xl px-4 py-4'>
          <img
            src={logo}
            alt="Placeholder"
            className="w-full h-full object-cover"
          />
        </div>
        <div className='flex flex-1 flex-col justify-center items-center'>
          <div className='w-2/3 flex flex-col'>
            <div className='text-l text-center w-1/2 self-center font-semibold'>Hi There!</div>
            <div className='text-xs w-4/5 text-center self-center text-gray-500'>Start your Transformation</div>
            <div className='flex p-1 my-2 bg-gray-100 rounded-md'>
              <button className='bg-white w-1/2 rounded-md text-center text-xs py-2 font-semibold'>Login
              </button>
              <button className='w-1/2 rounded-md text-center text-xs py-2 text-gray-600'>Register
              </button>
            </div>
          </div>
          
          {/* <div className='text-xl font-bold'>Welcome!</div>
          <div className='text-xs text-gray-400'>Please sign in to begin.</div>
          <div className='bg-gray-100 p-1 rounded-xl text-xs my-2'>
            <button className='bg-white py-2 px-10 font-medium rounded-lg'>Sign in</button>
            <button className='py-2 px-10 text-gray-400 rounded-lg'>Sign up</button>
          </div>
          <div className='flex border py-2'>
            <div className='flex py px-4 border-r-2'><Icon path={mdiEmailCheckOutline} size={1} /></div>
            <div className='flex flex-col w-92 mx-2'>
              <div className='text-[0.6rem] font-medium'>Email Address</div>
              <div className='text-[0.6rem]'><input type="text" className='outline-none w-max' placeholder='Insert email here' /></div>
            </div>
          </div>
          <div className='flex'>
            <div><Icon path={mdiEmailCheckOutline} size={1} /></div>
            <div><Icon path={mdiEmailCheckOutline} size={1} /></div>
            <div><Icon path={mdiEmailCheckOutline} size={1} /></div>
          </div> */}
        </div>
        <div className='flex justify-center text-center text-xs text-gray-900 px-4 py-4'>Enhance and Leverage Existing Processes — Avoid Uninformed Transformation</div>
      </div>
    </div>
  );
};

export default Login;