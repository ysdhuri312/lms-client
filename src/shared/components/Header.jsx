/** @format */

import { Menu, X, Search } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  return (
    <header className='fixed w-full z-50 border-b border-[rgba(0,0,0,0.1)] backdrop-blur-sm'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8'>
        <div className='flex justify-between items-center my-2'>
          <div className='flex items-center'>
            <Link to='/' className='text-xl font-bold cursor-pointer'>
              Learn<span className='text-blue-600 text-2xl'>&</span>Earn
            </Link>
            <nav className='hidden md:flex items-center ml-7 cursor-pointer text-sm'>
              <Link to='/' className='mr-3'>
                Home
              </Link>
              <Link to='courses' className=''>
                Courses
              </Link>
            </nav>
          </div>
          <nav className='hidden md:flex items-center'>
            <div className='flex items-center rounded-sm bg-white/5 pl-2 outline-1 -outline-offset-1 outline-[rgba(0,0,0,0.2)] has-[input:focus-within]:outline-1 has-[input:focus-within]:-outline-offset-1 has-[input:focus-within]:outline-gray-500'>
              <div className='shrink-0 text-gray-400 select-none sm:text-sm/6'>
                <Search size={17} />
              </div>
              <input
                name='search'
                type='text'
                value={searchInput}
                placeholder='Type to search'
                className='block min-w-0 grow py-2 pr-3 pl-1 placeholder:text-gray-500 text-xm focus:outline-none sm:text-sm/6'
                onChange={(e) => setSearchInput(e.target.value)}
              />
            </div>
            <div className='ml-1'>
              <Link
                to='/login'
                className='bg-blue-600 rounded-sm py-2 px-3 text-sm text-white hover:bg-blue-700 hover:data-active:bg-blue-700 cursor-pointer'
              >
                Log in
              </Link>
            </div>
            <div className='ml-1'>
              <Link
                to='/register'
                className='bg-blue-600 rounded-sm py-2 px-3 text-sm text-white hover:bg-blue-700 hover:data-active:bg-blue-700 cursor-pointer'
              >
                Register
              </Link>
            </div>
          </nav>
          <button
            className='md:hidden'
            onClick={() => setMobileMenu((prev) => !prev)}
          >
            {mobileMenu ? <X /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {mobileMenu && (
        <div className='md:hidden max-w-7xl mx-auto px-4 sm:px-6 md:px-8'>
          <div className='my-2'>
            <nav className='text-sm cursor-pointer'>
              <Link
                to='/'
                className='block bg-gray-200 mb-2 py-2 pl-1 rounded-sm'
                onClick={() => setMobileMenu(false)}
              >
                Home
              </Link>
              <Link
                to='courses'
                className='block mb-2 bg-gray-200 py-2 pl-1 rounded-sm'
                onClick={() => setMobileMenu(false)}
              >
                Courses
              </Link>
              <hr className='text-gray-200 py-1' />
              <div
                className='mb-2 text-sm'
                onClick={() => setMobileMenu(false)}
              >
                <Link
                  to='login'
                  className='block w-full bg-blue-600 rounded-sm py-2 px-3 text-sm text-white hover:bg-blue-700 hover:data-active:bg-blue-700 cursor-pointer'
                >
                  Log in
                </Link>
              </div>
              <div className='text-sm'>
                <Link
                  to='register'
                  className='block w-full bg-blue-600 rounded-sm py-2 px-3 text-sm text-white hover:bg-blue-700 hover:data-active:bg-blue-700 cursor-pointer'
                  onClick={() => setMobileMenu(false)}
                >
                  Register
                </Link>
              </div>
              <div className='my-2'>
                <div className='flex items-center rounded-sm bg-white/5 pl-2 outline-1 -outline-offset-1 outline-[rgba(0,0,0,0.2)] has-[input:focus-within]:outline-1 has-[input:focus-within]:-outline-offset-1 has-[input:focus-within]:outline-gray-500'>
                  <div className='shrink-0 text-gray-400 select-none sm:text-sm/6'>
                    <Search size={17} />
                  </div>
                  <input
                    name='search'
                    type='text'
                    value={searchInput}
                    placeholder='Type to search'
                    className='block min-w-0 grow py-2 pr-3 pl-1 placeholder:text-gray-500 text-xm focus:outline-none sm:text-sm/6'
                    onChange={(e) => setSearchInput(e.target.value)}
                  />
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};
export default Header;
