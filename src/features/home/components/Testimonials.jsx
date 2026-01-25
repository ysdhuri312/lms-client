/** @format */

import TestimonialCard from '../../../shared/components/TestimonialCard';

const Testimonials = () => {
  return (
    <div>
      <h2 className='text-3xl text-center font-medium mb-3'>Testimonials</h2>
      <p className='text-center opacity-70 text-sm md:px-40 lg:px-60 mb-5'>
        Hear from our learners as they share their journeys of transformation,
        success, and how our platform has made a difference in their lives.
      </p>
      <div className='flex flex-col justify-center sm:flex-row flex-wrap md:flex-row items-center gap-3 mt-9'>
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </div>
  );
};
export default Testimonials;
