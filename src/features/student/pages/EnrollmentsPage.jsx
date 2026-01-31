/** @format */

import EnrollmentCourseCard from '../components/EnrollmentCourseCard';

const EnrollmentsPage = () => {
  const enrollments = [
    {
      id: 101,
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
    },
    {
      id: 102,
      title: 'Introduction to JavaScript',
      image: 'https://picsum.photos/800/600',
      duration: '1 hour, 5 minutes',
      completed: '0 / 4 Lectures',
      progress: 5,
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
    },
    {
      id: 103,
      title: 'Introduction to JavaScript',
      image: 'https://picsum.photos/800/600',
      duration: '1 hour, 5 minutes',
      completed: '0 / 4 Lectures',
      progress: 5,
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
    },
  ];

  return (
    <section className='max-w-7xl mx-auto px-4 pt-30'>
      <h2 className='text-xl font-semibold mb-6'>My Enrollments</h2>

      <div className='overflow-x-auto bg-white rounded-sm border mb-10'>
        <table className='w-full text-sm'>
          <thead className='bg-gray-50 text-gray-600'>
            <tr>
              <th className='text-left px-6 py-3'>Course</th>
              <th className='text-left px-6 py-3'>Duration</th>
              <th className='text-left px-6 py-3'>Completed</th>
              <th className='text-left px-6 py-3'>Status</th>
            </tr>
          </thead>

          <tbody>
            {enrollments.map((course) => (
              <EnrollmentCourseCard key={course.id} course={course} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
export default EnrollmentsPage;
