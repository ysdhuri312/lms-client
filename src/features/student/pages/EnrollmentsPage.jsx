/** @format */

import EnrollmentCourseCard from '../components/EnrollmentCourseCard';
import { useEnrolledCourses } from '../hooks/useEnrolledCourses';

const EnrollmentsPage = () => {
  const { enrolledCourses, error, loading } = useEnrolledCourses();

  if (error) return <p>Something went wrong...</p>;
  if (loading) return <p>Courses loding...</p>;

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
            {enrolledCourses.map((course) => (
              <EnrollmentCourseCard key={course._id} course={course} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
export default EnrollmentsPage;
