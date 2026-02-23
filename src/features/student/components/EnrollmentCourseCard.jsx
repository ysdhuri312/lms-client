/** @format */

import { Link } from 'react-router-dom';

const EnrollmentCourseCard = ({ course }) => {
  const { courseId, progress, status } = course;
  return (
    <tr className='border-t hover:bg-gray-100 transition-all'>
      <td className='px-6 py-4 cursor-pointer'>
        <div className='flex items-center gap-4 min-w-65'>
          <img
            src={courseId.thumbnail}
            alt={courseId.title}
            className='w-24 h-14 object-cover rounded-xs'
          />
          <div className='flex-1'>
            <Link
              to={`/course/${courseId._id}/lectures`}
              className='font-medium text-gray-900 mb-2'
            >
              {courseId.title}
            </Link>

            <div className='w-full bg-gray-200 rounded-full h-1.5 mt-2'>
              <div
                className='bg-blue-600 h-1.5 rounded-full'
                style={{
                  width: `${(progress.completedLessonCount / courseId.stats.totalLessons) * 100}%`,
                }}
              />
            </div>
          </div>
        </div>
      </td>

      <td className='px-6 py-4 text-gray-600 whitespace-nowrap'>
        {courseId.stats.courseTime}
      </td>

      <td className='px-6 py-4 text-gray-600 whitespace-nowrap'>
        {progress.completedLessonCount} / {courseId.stats.totalLessons} Lectures
      </td>

      <td className='px-6 py-4'>
        <span className='inline-block bg-blue-600 text-white text-xs px-3 py-2 rounded'>
          {status}
        </span>
      </td>
    </tr>
  );
};
export default EnrollmentCourseCard;
