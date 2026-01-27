/** @format */

import { useParams } from 'react-router-dom';
import CourseContent from '../components/CourseContent';
import CourseSidebar from '../components/CourseSidebar';

const Course = () => {
  const { id } = useParams();
  return (
    <div className='bg-linear-to-b from-cyan-50 to-white min-h-screen pt-20'>
      <div className='max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10'>
        <div className='lg:col-span-2'>
          <CourseContent id={id} />
        </div>

        <div className='lg:col-span-1'>
          <CourseSidebar id={id} />
        </div>
      </div>
    </div>
  );
};
export default Course;
