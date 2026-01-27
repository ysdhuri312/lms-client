/** @format */

import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../shared/layouts/MainLayout';
import Home from '../features/home/pages/Home';
import Auth from '../features/auth/pages/Auth';
import LoginForm from '../features/auth/components/LoginForm';
import RegisterForm from '../features/auth/components/RegisterForm';
import CourseList from '../features/course_list/page/CourseList';
import Course from '../features/course/pages/Course';
import NotFound from '../shared/components/NotFound';

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { element: <Home />, index: true },
      { path: '/courses', element: <CourseList /> },
      { path: '/course', element: <Course /> },
      {
        element: <Auth />,
        children: [
          { path: 'login', element: <LoginForm /> },
          { path: 'register', element: <RegisterForm /> },
        ],
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
