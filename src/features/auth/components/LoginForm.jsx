/** @format */

import { google, apple, facebook } from '../../../assets';

const LoginForm = () => {
  return (
    <div className='flex flex-col justify-center w-full max-w-md mx-auto px-6'>
      <h1 className='text-3xl font-bold text-gray-900 text-center mb-8'>
        Log in to continue your <br /> learning journey
      </h1>

      <input
        type='email'
        placeholder='Email'
        className='w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600'
      />

      <button className='w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition'>
        Continue
      </button>

      <div className='flex items-center gap-4 my-8'>
        <div className='flex-1 h-px bg-gray-300' />
        <span className='text-sm text-gray-500'>Other log in options</span>
        <div className='flex-1 h-px bg-gray-300' />
      </div>

      <div className='flex justify-center gap-4 mb-8'>
        <button className='w-12 h-12 border rounded-lg flex items-center justify-center hover:bg-gray-50'>
          <img src={google} alt='Google' className='w-5' />
        </button>
        <button className='w-12 h-12 border rounded-lg flex items-center justify-center hover:bg-gray-50'>
          <img src={facebook} alt='Facebook' className='w-5' />
        </button>
        <button className='w-12 h-12 border rounded-lg flex items-center justify-center hover:bg-gray-50'>
          <img src={apple} alt='Apple' className='w-5' />
        </button>
      </div>

      <div className='bg-gray-50 rounded-lg py-4 text-center text-sm'>
        Don&apos;t have an account?{' '}
        <a href='#' className='text-blue-600 font-semibold'>
          Sign up
        </a>
      </div>
    </div>
  );
};

export default LoginForm;
