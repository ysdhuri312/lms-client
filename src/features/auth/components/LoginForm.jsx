/** @format */

import { Link, useNavigate } from 'react-router-dom';
import { google, apple, facebook } from '../../../assets';
import { useRef, useState } from 'react';
import userLogin from '../api/login.api';
import { useAuth } from '../context/AuthContext';

const LoginForm = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  const { user, setUser } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      const response = await userLogin({ email, password });

      if (response.data.success) {
        setUser(response.data.data);
        navigate('/', { replace: true });

        emailRef.current.value = '';
        passwordRef.current.value = '';
      }
    } catch (error) {
      alert(error.message);
      setError(error.message);
    }
  };

  return (
    <form
      className='flex flex-col justify-center w-full max-w-md mx-auto px-6'
      onSubmit={handleSubmit}
    >
      <h1 className='text-3xl font-bold text-gray-900 text-center mb-8'>
        Log in to continue your <br /> learning journey
      </h1>

      <input
        type='email'
        placeholder='Email'
        className='w-full mb-5 border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600'
        ref={emailRef}
        required
      />

      <input
        type='password'
        placeholder='Password'
        className='w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600'
        ref={passwordRef}
        required
      />

      <button
        type='submit'
        className='w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition'
      >
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
        <Link to='/register' className='text-blue-600 font-semibold'>
          Register
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
