/** @format */

import Stars from './Stars';

const TestimonialCard = () => {
  return (
    <div className='max-w-xs rounded-xl border border-gray-200 bg-white overflow-hidden shadow-sm'>
      {/* Header */}
      <div className='flex items-center gap-4 bg-gray-50 px-5 py-4'>
        <img
          src='https://randomuser.me/api/portraits/men/32.jpg'
          alt='profile'
          className='w-12 h-12 rounded-full object-cover'
        />
        <div>
          <h3 className='font-semibold text-gray-900'>Donald Jackman</h3>
          <p className='text-sm text-gray-500'>SWE 1 @ Amazon</p>
        </div>
      </div>

      {/* Body */}
      <div className='p-5'>
        {/* Stars */}
        <Stars />

        {/* Text */}
        <p className='text-gray-600 text-sm leading-relaxed'>
          I've been using Imagify for nearly two years, primarily for Instagram,
          and it has been incredibly user-friendly, making my work much easier.
        </p>

        {/* Read more */}
        <a
          href='#'
          className='inline-block mt-4 text-blue-600 text-sm font-medium hover:underline'
        >
          Read more
        </a>
      </div>
    </div>
  );
};

export default TestimonialCard;
