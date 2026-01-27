/** @format */

import { Link } from 'react-router-dom';
import { accenture, adobe, microsoft, paypal, walmart } from '../../../assets';
import CourseCard from '../../../shared/components/CourseCard';
import { useFeatureCourses } from '../hooks/useFeatureCourses';

const Courses = () => {
  const { featuredCourses, error, loading } = useFeatureCourses();

  if (loading) return <p>Loading featured courses...</p>;
  if (error) return <p>Something went wrong</p>;

  return (
    <div>
      <div className='mb-5'>
        <p className='text-center mb-5 opacity-70 text-md px-6 md:px-40 lg:px-60'>
          Trusted by learners from
        </p>
        <div className='flex justify-center gap-4.5 sm:gap-7'>
          <img src={walmart} alt='walmart' className='h-4.5 w-auto sm:h-7' />
          <img
            src={microsoft}
            alt='microsoft'
            className='h-4.5 w-auto sm:h-7'
          />
          <img src={paypal} alt='paypal' className='h-4.5 w-auto sm:h-7' />
          <img
            src={accenture}
            alt='accenture'
            className='h-4.5 w-auto sm:h-7'
          />
          <img src={adobe} alt='adobe' className='h-4.5 w-auto sm:h-7' />
        </div>
      </div>
      <div className='my-25 text-3xl'>
        <h2 className='text-center font-medium mb-3'>Featured Courses</h2>
        <p className='text-center opacity-70 text-sm md:px-40 lg:px-60 mb-5'>
          Discover our top-rated courses across various categories. From coding
          and design to business and wellness, our courses are crafted to
          deliver results.
        </p>
        <div className='flex flex-col justify-center sm:flex-row flex-wrap md:flex-row items-center gap-3 mt-9'>
          {featuredCourses.map((course) => {
            const { id, thumbnail, ratings, title, price } = course;

            return (
              <CourseCard
                key={id}
                thumbnail={thumbnail}
                ratings={ratings}
                title={title}
                price={price}
              />
            );
          })}
        </div>
        <div className='flex justify-center mt-10'>
          <Link
            to='/courses'
            className='text-sm text-gray-500 border border-gray-300 px-8 py-3 outline-0 outline-[rgba(0,0,0,0.1)] rounded-sm cursor-pointer'
          >
            Show all courses
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Courses;
