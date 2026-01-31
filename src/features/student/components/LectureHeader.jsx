/** @format */

import { ArrowLeft } from 'lucide-react';
import { Link, useOutletContext } from 'react-router-dom';

const LectureHeader = ({ course }) => {
  return (
    <header className='bg-gray-900 fixed w-full z-50 border-b border-[rgba(255,255,255,0.8)] backdrop-blur-lg'>
      <div className='max-w-7xl mx-auto px-4 py-4 sm:px-6 md:px-8'>
        <div className='flex gap-2 cursor-pointer'>
          <Link to='my-courses'>
            <span>
              <ArrowLeft color='white' />
            </span>
          </Link>
          <div className='text-white'>{course.title}</div>
        </div>
      </div>
    </header>
  );
};
export default LectureHeader;
