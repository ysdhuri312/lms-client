/** @format */

import { Link } from 'react-router-dom';
import Stars from './Stars';
import { ShoppingBag } from 'lucide-react';

const CourseCard = ({ slug, thumbnail, ratings, title, price }) => {
  return (
    <div className='w-full max-w-sm md:max-w-64 bg-neutral-primary-soft border border-gray-300 rounded-md shadow-xs overflow-hidden'>
      <Link to={`/courses/${slug}`}>
        <img
          className='w-full rounded-t-lg mb-6 object-cover'
          src={thumbnail}
          alt='course image'
        />
      </Link>
      <div className='p-2'>
        <div className='flex items-center space-x-3 mb-4'>
          <Stars ratings={ratings} />
          <span className='bg-brand-softer border border-gray-300 text-gray-600 text-xs font-medium px-1.5 py-0.5 rounded-sm'>
            {ratings} out of 5
          </span>
        </div>
        <Link to={`/courses/${slug}`}>
          <h5 className='text-base font-bold min-h-14'>{title}</h5>
        </Link>
        <div className='flex items-center justify-between mt-7'>
          <span className='text-xl font-bold'>${price}</span>
          <Link
            to={`/checkout/${slug}`}
            type='button'
            className='inline-flex items-center cursor-pointer text-white bg-blue-600 hover:bg-blue-500 box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-sm text-xs px-2 py-1 focus:outline-none'
          >
            <ShoppingBag size={16} className='mr-2' />
            Enroll Now
          </Link>
        </div>
      </div>
    </div>
  );
};
export default CourseCard;
