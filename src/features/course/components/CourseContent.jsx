/** @format */

import { Play } from 'lucide-react';
import Accordion from '../../../shared/components/Accordion';
import Stars from '../../../shared/components/Stars';

const CourseContent = () => {
  return (
    <>
      <h1 className='text-3xl font-bold text-gray-900 mb-2'>
        Cloud Computing Essentials
      </h1>

      <p className='text-lg text-gray-700 mb-4'>Master Cloud Fundamentals</p>

      <p className='text-gray-600 max-w-2xl mb-4'>
        Learn the foundations of cloud computing and explore popular cloud
        platforms like AWS, Azure, and Google Cloud. This course is ideal for IT
        professionals and developers.
      </p>

      <div className='flex items-center gap-2 text-sm mb-5 opacity-70'>
        <div className='flex gap-2'>
          <span>3.5</span>
          <div>
            <Stars />
          </div>
          <p>
            (<span>5</span> ratings)
          </p>
          <p>
            <span>11</span> students
          </p>
        </div>
      </div>

      <h2 className='text-xl font-semibold mb-4'>Course Structure</h2>

      <div className='space-y-4 mb-10'>
        <Accordion title='Cloud Fundamentals' value='2 lectures • 22 hours'>
          <div className='w-full flex justify-between items-center px-5 py-1 text-left hover:bg-gray-50'>
            <p className='flex items-center gap-4 text-sm'>
              <span>
                <Play size={15} />
              </span>
              Introduction to Cloud Computing
            </p>
            <div className='flex items-center gap-4 text-sm text-gray-500'>
              <span>11 minutes</span>
            </div>
          </div>
          <div className='w-full flex justify-between items-center px-5 py-1 text-left hover:bg-gray-50'>
            <p className='flex items-center gap-4 text-sm'>
              <span>
                <Play size={15} />
              </span>
              Cloud Service Models (IaaS, PaaS, SaaS)
            </p>
            <div className='text-sm text-gray-500'>11 minutes</div>
          </div>
        </Accordion>

        <Accordion
          title='Exploring Cloud Platforms'
          value='2 lectures • 27 hours, 30 minutes'
        >
          <div className='w-full flex justify-between items-center px-5 py-1 text-left hover:bg-gray-50'>
            <p className='flex items-center gap-4 text-sm'>
              <span>
                <Play size={15} />
              </span>
              Introduction to Cloud Computing
            </p>
            <div className='flex items-center gap-4 text-sm text-gray-500'>
              <span>11 minutes</span>
            </div>
          </div>
          <div className='w-full flex justify-between items-center px-5 py-1 text-left hover:bg-gray-50'>
            <p className='flex items-center gap-4 text-sm'>
              <span>
                <Play size={15} />
              </span>
              Cloud Service Models (IaaS, PaaS, SaaS)
            </p>
            <div className='text-sm text-gray-500'>11 minutes</div>
          </div>
        </Accordion>
      </div>

      <h2 className='text-xl font-semibold mb-4'>Course Description</h2>

      <p className='text-gray-600 mb-4'>
        By the end of this course, you will understand cloud services,
        deployment models, and best practices for using cloud resources
        efficiently.
      </p>

      <ul className='list-disc pl-5 text-gray-600 space-y-2'>
        <li>Understand cloud architecture</li>
        <li>Learn to work with AWS, Azure, and GCP</li>
        <li>Explore serverless computing and storage solutions</li>
      </ul>
    </>
  );
};

export default CourseContent;
