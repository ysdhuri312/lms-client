/** @format */

import { createBrowserRouter } from 'react-router-dom';

import authRoutes from '../features/auth/router';
import courseRoutes from '../features/course/router';

import NotFound from '../shared/components/NotFound';
import StudentPage from '../features/student/pages/StudentPage';
import LecturePlayer from '../features/student/components/LecturePlayer';
import LectureLayout from '../features/student/layout/LectureLayout';
import EnrollmentsPage from '../features/student/pages/EnrollmentsPage';
import ProtectedRoute from '../routes/ProtectedRoute';
import MainLayout from '../shared/layouts/MainLayout';
import Home from '../pages/home/pages/Home';

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [{ element: <Home />, index: true }, authRoutes, courseRoutes],
  },

  //       element: (
  //         <ProtectedRoute role='student'>
  //           <StudentPage />
  //         </ProtectedRoute>
  //       ),
  //       children: [{ path: '/my-courses', element: <EnrollmentsPage /> }],
  //     },
  //     {
  //       path: '*',
  //       element: <NotFound />,
  //     },
  //   ],
  // },
  // {
  //   element: <LectureLayout />,
  //   children: [
  //     {
  //       element: (
  //         <ProtectedRoute role='student'>
  //           <StudentPage />
  //         </ProtectedRoute>
  //       ),
  //       children: [
  //         {
  //           path: 'course/:courseId/lectures',
  //           element: <LecturePlayer />,
  //         },
  //       ],
  //     },
  //   ],
  // },
]);

export default router;
