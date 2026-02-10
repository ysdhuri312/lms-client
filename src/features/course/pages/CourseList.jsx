/** @format */

import { Search } from 'lucide-react';
import CourseCard from '../../../shared/components/CourseCard';
import { useAllCourses } from '../hooks/useAllCourses';

const CourseList = () => {
  const { allCourses, error, loading } = useAllCourses();

  if (loading) return <p>Courses loding...</p>;

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-30 mb-5'>
      <div className='sm:flex w-full flex-row justify-between items-center'>
        <div>
          <h1 className='text-3xl font-semibold'>Course List</h1>
          <p className='opacity-70 text-md'>
            <span className='text-blue-600'>Home</span> /{' '}
            <span>Course List</span>
          </p>
        </div>
        <div className='relative w-100 sm:w-100 mt-4 md:mt-2'>
          <div className='absolute top-3 left-3 shrink-0 text-gray-400 select-none sm:text-sm/6'>
            <Search size={17} />
          </div>
          <input
            type='text'
            placeholder='Search course'
            className='w-full border border-gray-300 px-3 py-2 pr-20 pl-10 outline-0 outline-[rgba(0,0,0,0.1)] rounded-sm'
          />
          <button className='absolute right-1 top-1 bottom-1 bg-blue-600 text-white px-6 rounded-sm hover:bg-blue-700 cursor-pointer'>
            Search
          </button>
        </div>
      </div>
      <div className='mt-10 flex flex-wrap justify-center sm:justify-items-start gap-5'>
        {error ? (
          <p className='texl-xl text-red-500'>Something went wrong...</p>
        ) : (
          allCourses.map((course) => {
            const { slug, thumbnail, stats, title, price } = course;

            return (
              <CourseCard
                key={slug}
                slug={slug}
                thumbnail={thumbnail}
                ratings={stats.ratings}
                title={title}
                price={price}
              />
            );
          })
        )}
      </div>
    </div>
  );
};
export default CourseList;
