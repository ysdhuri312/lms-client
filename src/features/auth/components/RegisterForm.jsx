/** @format */
import { Link, useNavigate } from 'react-router-dom';
import { google, apple, facebook } from '../../../assets';
import { useRef, useState } from 'react';
import userRegister from '../api/register.api';
import { useAuth } from '../context/AuthContext';

const RegisterForm = () => {
  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const newsletterRef = useRef(null);
  const navigate = useNavigate();

  const { user, setUser } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fullName = fullNameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    // const newsletter = newsletterRef.current.checked;

    try {
      const response = await userRegister({ fullName, email, password });

      if (user) {
        setUser(user);
        navigate('/', { replace: true });

        fullNameRef.current.value = '';
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
      onSubmit={handleSubmit}
      className='flex flex-col justify-center w-full max-w-md mx-auto px-6 mt-8'
    >
      <h1 className='text-3xl font-bold text-gray-900 text-center mb-8'>
        Register with email
      </h1>

      {/* Full Name */}
      <input
        type='text'
        placeholder='Full name'
        className='w-full mb-5 border border-gray-300 rounded-lg px-4 py-3 text-sm
                   focus:outline-none focus:ring-2 focus:ring-blue-600'
        ref={fullNameRef}
        required
      />

      <input
        type='email'
        placeholder='Email'
        className='w-full mb-5 border border-gray-300 rounded-lg px-4 py-3 text-sm
                   focus:outline-none focus:ring-2 focus:ring-blue-600'
        ref={emailRef}
        required
      />

      <input
        type='password'
        placeholder='Password'
        className='w-full mb-5 border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600'
        ref={passwordRef}
        required
      />

      <label className='flex items-start gap-3 text-sm text-gray-600 mb-6'>
        <input
          type='checkbox'
          defaultChecked
          className='mt-1 accent-blue-600'
          ref={newsletterRef}
        />
        <span>
          Send me special offers, personalized recommendations, and learning
          tips.
        </span>
      </label>

      <button
        type='submit'
        className='w-full bg-blue-600 hover:bg-blue-700 text-white
                         font-semibold py-3 rounded-lg transition mb-8 cursor-pointer'
      >
        Continue
      </button>

      <div className='flex items-center gap-4 mb-8'>
        <div className='flex-1 h-px bg-gray-300' />
        <span className='text-sm text-gray-500'>Other sign up options</span>
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

      <p className='text-center text-sm text-gray-500 mb-6'>
        By signing up, you agree to our{' '}
        <a href='#' className='text-blue-600 font-medium'>
          Terms of Use
        </a>{' '}
        and{' '}
        <a href='#' className='text-blue-600 font-medium'>
          Privacy Policy
        </a>
        .
      </p>

      <div className='bg-gray-50 rounded-lg py-4 text-center text-sm'>
        Already have an account?{' '}
        <Link to='/login' className='text-blue-600 font-semibold'>
          Log in
        </Link>
      </div>
    </form>
  );
};
export default RegisterForm;
