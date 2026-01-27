/** @format */

import useCourseDetails from '../hooks/useCourseDetails';

const CourseSidebar = ({ id }) => {
  const { course, error, loading } = useCourseDetails(id);

  if (error) return <p>Somthing went wrong....</p>;
  if (loading) return <p>Course details loading...</p>;

  const { price, courseTime, moduleCount, thumbnail } = course;

  return (
    <div className='sticky top-6'>
      <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
        <img
          src={thumbnail}
          alt='Course'
          className='w-full h-44 object-cover'
        />

        <div className='p-6'>
          <p className='text-red-500 text-sm font-medium mb-2'>
            ⏰ 5 days left at this price!
          </p>

          <div className='flex items-center gap-3 mb-4'>
            <span className='text-3xl font-bold'>${price}</span>
            <span className='line-through text-gray-400'>$69.99</span>
            <span className='text-green-600 font-medium'>20% off</span>
          </div>

          <div className='flex justify-between text-sm text-gray-600 mb-6'>
            <span>⏱ {courseTime}</span>
            <span>📘 {moduleCount} lessons</span>
          </div>

          <button className='w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold mb-6'>
            Enroll Now
          </button>

          <h3 className='font-semibold mb-3'>What&apos;s in the course?</h3>
          <ul className='text-sm text-gray-600 space-y-2'>
            <li>✔ Lifetime access with updates</li>
            <li>✔ Hands-on project guidance</li>
            <li>✔ Downloadable resources</li>
            <li>✔ Quizzes & certificate</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CourseSidebar;
