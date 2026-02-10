/** @format */

import Course from './pages/Course';
import CourseList from './pages/CourseList';

const courseRoutes = {
  path: 'courses',
  children: [
    { index: true, element: <CourseList /> },
    { path: ':slug', element: <Course /> },
  ],
};

export default courseRoutes;
