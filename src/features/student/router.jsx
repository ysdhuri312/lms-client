/** @format */

import Home from '../../pages/home/pages/Home';
import ProtectedRoute from '../../routes/ProtectedRoute';
import LectureLayout from './layout/LectureLayout';
import EnrollmentsPage from './pages/EnrollmentsPage';
import LecturePage from './pages/LecturePage';
import StudentPage from './pages/StudentPage';

const studentRoutes = {
  path: 'student',
  element: (
    <ProtectedRoute>
      <StudentPage role='student' />
    </ProtectedRoute>
  ),
  children: [
    { index: true, element: <Home /> },
    { path: 'enrollments', element: <EnrollmentsPage /> },
    {
      element: <LectureLayout />,
      children: [
        {
          path: 'course/:courseId/lectures',
          element: <LecturePage />,
        },
      ],
    },
  ],
};

export default studentRoutes;
