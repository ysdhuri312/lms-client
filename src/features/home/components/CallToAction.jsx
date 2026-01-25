/** @format */

import { MoveRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <div className='flex flex-col justify-center items-center my-30'>
      <h1 className='text-center text-3xl font-semibold'>
        Learn anything, anytime, anywhere
      </h1>
      <p className='text-center mt-2 opacity-70 text-sm md:px-35 lg:px-50 mb-5'>
        Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id
        veniam aliqua proident excepteur commodo do ea.
      </p>
      <div>
        <button className='bg-blue-600 text-white px-10 py-2 rounded-sm'>
          Get started
        </button>
        <div className='inline-flex items-center'>
          <a className='text-sm font-medium ml-5'>Learn more </a>
          <span className='inline-block ml-1.5 w-0.5'>
            <MoveRight />
          </span>
        </div>
      </div>
    </div>
  );
};
export default CallToAction;
