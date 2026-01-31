/** @format */

import LectureHeader from '../components/LectureHeader';
import { Outlet, useParams } from 'react-router-dom';

const LectureLayout = () => {
  const course = {
    _id: 101,
    title: 'Introduction to Cybersecurity',
    image: 'https://picsum.photos/800/600',
    duration: '1hr 1min',
    completed: '1 / 4 Lectures',
    progress: 25,
    status: 'On Going',
    modules: [
      {
        moduleId: 'm1',
        title: 'Getting Started',
        moduleTime: '49hr 30min',
        lessonsCount: 3,
        lessons: [
          {
            lessonId: 'l1',
            title: 'Welcome To The Course!',
            lessonTime: '10min',
            preview: true,
          },
          {
            lessonId: 'l2',
            title: "ReactJS vs 'Vanilla JavaScript': Why Use React?",
            lessonTime: '15min',
            preview: false,
          },
          {
            lessonId: 'l3',
            title: 'Editing Our First React App',
            lessonTime: '7min',
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
            lessonTime: '3min',
            preview: true,
          },
          {
            lessonId: 'l2',
            title: 'JSX & React Components [Core Concept]',
            lessonTime: '12min',
            preview: false,
          },
          {
            lessonId: 'l3',
            title: 'Using & Outputting Dynamic Values [Core Concept]',
            lessonTime: '9min',
            preview: false,
          },
        ],
      },
    ],
  };

  return (
    <>
      <LectureHeader course={course} />
      <Outlet context={{ course }} />
    </>
  );
};
export default LectureLayout;
