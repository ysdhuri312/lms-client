/** @format */

import Auth from './pages/Auth';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

const authRoutes = {
  element: <Auth />,
  children: [
    { path: 'login', element: <LoginForm /> },
    { path: 'register', element: <RegisterForm /> },
  ],
};

export default authRoutes;
