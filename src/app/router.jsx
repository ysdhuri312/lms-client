/** @format */

import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../shared/layouts/MainLayout';
import Home from '../features/home/pages/Home';
import Auth from '../features/auth/pages/Auth';
import LoginForm from '../features/auth/components/LoginForm';
import RegisterForm from '../features/auth/components/RegisterForm';

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { element: <Home />, index: true },
      { path: '/courses', element: <Home /> },
      {
        element: <Auth />,
        children: [
          { path: 'login', element: <LoginForm /> },
          { path: 'register', element: <RegisterForm /> },
        ],
      },
    ],
  },
]);

export default router;
