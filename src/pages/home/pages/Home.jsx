/** @format */

import CallToAction from '../components/CallToAction';
import FeaturedCourses from '../components/FeaturedCourses';
import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8'>
      <Hero />
      <FeaturedCourses />
      <Testimonials />
      <CallToAction />
    </div>
  );
};
export default Home;
