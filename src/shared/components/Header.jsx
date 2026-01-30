/** @format */

import { Menu, X, Search } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthMobileMenu from './AuthMobileMenu';
import GuestMobileMenu from './GuestMobileMenu';
import { useAuth } from '../../features/auth/context/AuthContext';

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  const { user } = useAuth();

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
              <Link to='courses'>Courses</Link>
            </nav>
          </div>
          <nav className='hidden md:flex items-center'>
            {user ? (
              <div className='flex items-center group'>
                <Link to='/my-courses' className='ml-4 text-sm'>
                  My Enrollments
                </Link>
                <Link className='ml-4 relative'>
                  <img
                    src='https://randomuser.me/api/portraits/men/32.jpg'
                    className='w-8 h-8 rounded-full'
                  />
                </Link>

                <div className='absolute top-12 right-5 topmax-w-xs rounded-lg border border-gray-200 bg-white overflow-hidden shadow-sm p-3  opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50'>
                  <div className='flex flex-col'>
                    <div className='flex items-center gap-2'>
                      <img
                        src='https://randomuser.me/api/portraits/men/32.jpg'
                        className='w-12 h-12 rounded-full'
                      />
                      <div className='flex flex-col'>
                        <span className='text-blue-700'>
                          YOGESH SITARAM DHURI
                        </span>
                        <span className='text-sm opacity-70'>
                          ysdhuri312@gmail.com
                        </span>
                      </div>
                    </div>
                    <hr className='text-gray-200 my-2' />
                    <Link>Account sttings</Link>
                    <Link>Logout</Link>
                  </div>
                </div>
              </div>
            ) : (
              <div className='flex items-center'>
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
                <div className='ml-3'>
                  <Link
                    to='/login'
                    className='bg-white rounded-sm py-2 px-4 text-sm text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white hover:data-active:bg-blue-700 transition-all cursor-pointer'
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
              </div>
            )}
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
        <div>
          {user ? (
            <AuthMobileMenu setMobileMenu={setMobileMenu} />
          ) : (
            <GuestMobileMenu
              setMobileMenu={setMobileMenu}
              searchInput={searchInput}
              setSearchInput={setSearchInput}
            />
          )}
        </div>
      )}
    </header>
  );
};
export default Header;
