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
import Enrollments from '../features/student/components/Enrollments';
import StudentPage from '../features/student/pages/StudentPage';
import ProtectedRoute from '../features/auth/components/ProtectedRoute';

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { element: <Home />, index: true },
      { path: '/courses', element: <CourseList /> },
      { path: '/course/:id', element: <Course /> },
      {
        element: <Auth />,
        children: [
          { path: '/login', element: <LoginForm /> },
          { path: '/register', element: <RegisterForm /> },
        ],
      },
      {
        element: (
          <ProtectedRoute role='student'>
            <StudentPage />
          </ProtectedRoute>
        ),
        children: [{ path: '/my-courses', element: <Enrollments /> }],
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
