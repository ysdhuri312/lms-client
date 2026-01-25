/** @format */

import { auth_image } from '../../../assets';
import { Outlet } from 'react-router-dom';

const Auth = () => {
  return (
    <div className='min-h-screen grid grid-cols-1 lg:grid-cols-2 pt-15'>
      <div className='hidden lg:flex items-center justify-center'>
        <img src={auth_image} alt='image' />
      </div>
      <Outlet />
    </div>
  );
};
export default Auth;
