/** @format */

import EnrollmentCourseCard from './EnrollmentCourseCard';

const Enrollments = () => {
  const enrollments = [
    {
      id: 1,
      title: 'Introduction to Cybersecurity',
      image: 'https://picsum.photos/800/600',
      duration: '1 hour, 1 minute',
      completed: '1 / 4 Lectures',
      progress: 25,
      status: 'On Going',
    },
    {
      id: 2,
      title: 'Introduction to JavaScript',
      image: 'https://picsum.photos/800/600',
      duration: '1 hour, 5 minutes',
      completed: '0 / 4 Lectures',
      progress: 5,
      status: 'On Going',
    },
    {
      id: 2,
      title: 'Introduction to JavaScript',
      image: 'https://picsum.photos/800/600',
      duration: '1 hour, 5 minutes',
      completed: '0 / 4 Lectures',
      progress: 5,
      status: 'On Going',
    },
  ];

  return (
    <section className='max-w-7xl mx-auto px-4 pt-15'>
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
export default Enrollments;
