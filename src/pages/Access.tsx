import { useState } from 'react';
import loginBg from '../assets/loginbg.jpg'; // One level up from pages/
import logo from '../assets/logo.png'; // One level up from pages/
import Login from '../components/Login';
import Register from '../components/Register';

const Access = () => {

  const [activeTab, setActiveTab] = useState('Login');

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
            <div className='text-l text-center w-1/2 self-center font-semibold'>
              {activeTab === 'Login' ? "Good to See You" : "Let's Get Started"}
            </div>
            <div className='text-xs w-4/5 text-center self-center text-gray-500'>
              {activeTab === 'Login' ? "Your journey continues here" : "Begin your transformation today"}
            </div>
            <div className='flex p-1 my-2 bg-gray-100 rounded-md'>
              <button
                onClick={()=>setActiveTab('Login')} 
                className={`w-1/2 rounded-md text-center text-xs py-2 ${
                  activeTab === 'Login' ? 'bg-white font-semibold text-gray-900' : ' text-gray-600'
                }`}>Partner
              </button>
              <button
                onClick={()=>setActiveTab('Register')} 
                className={`w-1/2 rounded-md text-center text-xs py-2 ${
                  activeTab === 'Register' ? 'bg-white font-semibold text-gray-900' : ' text-gray-600'
                }`}>Become a Partner
              </button>
            </div>
            {activeTab === 'Login' ? <Login/> : <Register/>}
          </div>
          
        </div>
        <div className='flex justify-center text-center text-xs text-gray-900 px-4 py-4'>Enhance and Leverage Existing Processes — Avoid Uninformed Transformation</div>
      </div>
    </div>
  );
};

export default Access;