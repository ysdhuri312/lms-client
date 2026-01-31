/** @format */

import LectureHeader from '../components/LectureHeader';
import Footer from '../../../shared/components/Footer';
import { Outlet, useParams } from 'react-router-dom';

const LectureLayout = () => {
  const { courseId } = useParams();
  const course = {
    _id: 101,
    title: 'Introduction to Cybersecurity',
    image: 'https://picsum.photos/800/600',
    duration: '1 hour, 1 minute',
    completed: '1 / 4 Lectures',
    progress: 25,
    status: 'On Going',
    modules: [
      {
        moduleId: 'm1',
        title: 'Getting Started',
        moduleTime: '49 hours, 30 minutes',
        lessonsCount: 3,
        lessons: [
          {
            lessonId: 'l1',
            title: 'Welcome To The Course!',
            lessonTime: '10 minutes',
            preview: true,
          },
          {
            lessonId: 'l2',
            title: "ReactJS vs 'Vanilla JavaScript': Why Use React?",
            lessonTime: '15 minutes',
            preview: false,
          },
          {
            lessonId: 'l3',
            title: 'Editing Our First React App',
            lessonTime: '7 minutes',
            preview: false,
          },
        ],
      },
      {
        moduleId: 'm2',
        title: 'React Essentials - Components, JSX, Props, State & More',
        lessons: [
          {
            lessonId: 'l1',
            title: 'Module Introduction',
            lessonTime: '3 minutes',
            preview: true,
          },
          {
            lessonId: 'l2',
            title: 'JSX & React Components [Core Concept]',
            lessonTime: '12 minutes',
            preview: false,
          },
          {
            lessonId: 'l3',
            title: 'Using & Outputting Dynamic Values [Core Concept]',
            lessonTime: '9 minutes',
            preview: false,
          },
        ],
      },
    ],
  };

  return (
    <>
      <LectureHeader course={course} />
      <Outlet />
    </>
  );
};
export default LectureLayout;
