/** @format */

import { useParams } from 'react-router-dom';
import CourseContent from '../components/details/CourseContent';
import CourseSidebar from '../components/details/CourseSidebar';

const Course = () => {
  const { slug } = useParams();
  return (
    <div className='bg-linear-to-b from-cyan-50 to-white min-h-screen pt-20'>
      <div className='max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10'>
        <div className='lg:col-span-2'>
          <CourseContent slug={slug} />
        </div>

        <div className='lg:col-span-1'>
          <CourseSidebar slug={slug} />
        </div>
      </div>
    </div>
  );
};
export default Course;
