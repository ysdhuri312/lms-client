/** @format */

import { Link } from 'react-router-dom';

const AuthMobileMenu = ({ setMobileMenu, user, logout }) => {
  return (
    <div className='md:hidden max-w-7xl mx-auto px-4 sm:px-6 md:px-8'>
      <div className='my-2'>
        <nav className='text-sm cursor-pointer'>
          <Link
            to='/'
            className='block bg-gray-200 mb-2 py-2 pl-2 rounded-sm'
            onClick={() => setMobileMenu(false)}
          >
            Home
          </Link>
          <Link
            to='courses'
            className='block mb-2 bg-gray-200 py-2 pl-2 rounded-sm'
            onClick={() => setMobileMenu(false)}
          >
            Courses
          </Link>
          <hr className='text-gray-200 py-1' />
        </nav>
      </div>
      <div className='flex flex-col'>
        <Link className='mb-2 bg-gray-200 py-2 pl-2 rounded-sm flex items-center gap-3'>
          <img
            src='https://randomuser.me/api/portraits/men/32.jpg'
            className='w-8 h-8 rounded-full'
          />
          <p className='text-lg'>
            Hi, <span className='text-blue-700'>{user?.fullName}</span>,{' '}
            <span className='text-sm opacity-70'>Welcome back</span>
          </p>
        </Link>
        <Link
          to='/my-courses'
          className='text-sm mb-2 bg-gray-200 py-2 pl-2 rounded-sm'
        >
          My Enrollments
        </Link>
        <Link className='text-sm mb-2 bg-gray-200 py-2 pl-2 rounded-sm'>
          Account Settings
        </Link>
        <Link
          to='logout'
          onClick={logout}
          className='text-sm mb-2 bg-gray-200 py-2 pl-2 rounded-sm'
        >
          Logout
        </Link>
      </div>
    </div>
  );
};
export default AuthMobileMenu;
