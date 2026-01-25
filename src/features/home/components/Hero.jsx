/** @format */

const Hero = () => {
  return (
    <div className='h-screen w-full flex flex-col items-center justify-center'>
      <h1 className='text-2xl font-bold sm:text-4xl sm:font-black text-center md:px-10 lg:px-60'>
        Empower your future with the courses designed{' '}
        <span className='text-blue-600'>to fit your choice.</span>
      </h1>
      <p className='text-center my-4 opacity-70 text-sm px-6 md:px-40 lg:px-60'>
        We bring together world-class instructors, interactive content, and a
        supportive community to help you achieve your personal and professional
        goals.
      </p>
      <div className='relative w-100 sm:w-120 mt-4'>
        <input
          type='text'
          placeholder='Search course'
          className='w-full border border-gray-300 px-3 py-3 pr-20 outline-0 outline-[rgba(0,0,0,0.1)] rounded-sm'
        />
        <button className='absolute right-1 top-1 bottom-1 bg-blue-600 text-white px-6 rounded-sm'>
          Search
        </button>
      </div>
    </div>
  );
};
export default Hero;
