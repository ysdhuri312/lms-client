/** @format */

import { createBrowserRouter } from 'react-router-dom';

import authRoutes from '../features/auth/router';
import courseRoutes from '../features/course/router';

import NotFound from '../shared/components/NotFound';
import studentRoutes from '../features/student/router';
import purchaseRoutes from '../features/purchase/router';

import MainLayout from '../shared/layouts/MainLayout';
import Home from '../pages/home/pages/Home';

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { element: <Home />, index: true },
      authRoutes,
      courseRoutes,
      purchaseRoutes,
      studentRoutes,
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
