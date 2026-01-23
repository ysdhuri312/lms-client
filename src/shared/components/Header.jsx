/** @format */

import { Menu, X, Search } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  return (
    <header className='fixed w-full z-50 border-b border-[rgba(0,0,0,0.1)] backdrop-blur-sm'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8'>
        <div className='flex justify-between items-center my-2'>
          <div className='flex items-center'>
            <div className='text-xl font-bold'>
              Learn<span className='text-blue-600 text-2xl'>&</span>Earn
            </div>
            <nav className='hidden md:flex items-center ml-7 cursor-pointer text-sm'>
              <a className='mr-3'>Home</a>
              <a className=''>Courses</a>
            </nav>
          </div>
          <nav className='hidden md:flex items-center'>
            <div className='flex items-center rounded-md bg-white/5 pl-2 outline-1 -outline-offset-1 outline-[rgba(0,0,0,0.2)] has-[input:focus-within]:outline-1 has-[input:focus-within]:-outline-offset-1 has-[input:focus-within]:outline-gray-500'>
              <div className='shrink-0 text-gray-400 select-none sm:text-sm/6'>
                <Search size={17} />
              </div>
              <input
                name='search'
                type='text'
                value={searchInput}
                placeholder='Type to search'
                className='block min-w-0 grow py-1 pr-3 pl-1 placeholder:text-gray-500 text-xm focus:outline-none sm:text-sm/6'
                onChange={(e) => setSearchInput(e.target.value)}
              />
            </div>
            <div className='ml-1'>
              <button className='bg-blue-600 rounded-md py-1 px-3 text-sm text-white data-hover:bg-sky-500 data-hover:data-active:bg-sky-700 cursor-pointer'>
                Log in
              </button>
            </div>
            <div className='ml-1'>
              <button className='bg-blue-600 rounded-md py-1 px-3 text-sm text-white data-hover:bg-sky-500 data-hover:data-active:bg-sky-700 cursor-pointer'>
                Sign up
              </button>
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
              <a
                className='block bg-gray-200 mb-2 py-1 pl-1 rounded-md'
                onClick={() => setMobileMenu(false)}
              >
                Home
              </a>
              <a
                className='block mb-2 bg-gray-200 py-1 pl-1 rounded-md'
                onClick={() => setMobileMenu(false)}
              >
                Courses
              </a>
              <hr className='text-gray-200 py-1' />
              <div
                className='mb-2 text-sm'
                onClick={() => setMobileMenu(false)}
              >
                <button className='block w-full bg-blue-600 rounded-md py-1 px-3 text-sm text-white data-hover:bg-sky-500 data-hover:data-active:bg-sky-700 cursor-pointer'>
                  Log in
                </button>
              </div>
              <div className='text-sm'>
                <button className='block w-full bg-blue-600 rounded-md py-1 px-3 text-sm text-white data-hover:bg-sky-500 data-hover:data-active:bg-sky-700 cursor-pointer'>
                  Sign up
                </button>
              </div>
              <div className='my-2'>
                <div className='flex items-center rounded-md bg-white/5 pl-2 outline-1 -outline-offset-1 outline-[rgba(0,0,0,0.2)] has-[input:focus-within]:outline-1 has-[input:focus-within]:-outline-offset-1 has-[input:focus-within]:outline-gray-500'>
                  <div className='shrink-0 text-gray-400 select-none sm:text-sm/6'>
                    <Search size={17} />
                  </div>
                  <input
                    name='search'
                    type='text'
                    value={searchInput}
                    placeholder='Type to search'
                    className='block min-w-0 grow py-1 pr-3 pl-1 placeholder:text-gray-500 text-xm focus:outline-none sm:text-sm/6'
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
