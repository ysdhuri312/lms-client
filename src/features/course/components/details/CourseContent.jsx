/** @format */

import { Play } from 'lucide-react';
import Accordion from '../../../../shared/components/Accordion';
import Stars from '../../../../shared/components/Stars';
import useCourseDetails from '../../hooks/useCourseDetails';

const CourseContent = ({ id }) => {
  const { course, error, loading } = useCourseDetails(id);

  if (error) return <p>Somthing went worng...</p>;
  if (loading) return <p>Courses loading...</p>;

  const { title, category, description, enrolledStudents, ratings, modules } =
    course;

  return (
    <>
      <h1 className='text-3xl font-bold text-gray-900 mb-2'>{title}</h1>

      <p className='text-lg text-gray-700 mb-4'>{category}</p>

      <p className='text-gray-600 max-w-2xl mb-4'>{description}</p>

      <div className='flex items-center gap-2 text-sm mb-5 opacity-70'>
        <div className='flex gap-2'>
          <span>{ratings}</span>
          <div>
            <Stars ratings={ratings} />
          </div>
          <p>
            (<span>5</span> ratings)
          </p>
          <p>
            <span>{enrolledStudents}</span> students
          </p>
        </div>
      </div>

      <h2 className='text-xl font-semibold mb-4'>Course Structure</h2>

      <div className='space-y-4 mb-10'>
        {modules.map((module) => {
          const { moduleId, title, moduleTime, lessonsCount, lessons } = module;

          return (
            <Accordion
              key={moduleId}
              title={title}
              value={`${lessonsCount} lectures • ${moduleTime}`}
            >
              {lessons.map((lesson) => {
                const { lessonId, lessonTime, preview, title } = lesson;

                return (
                  <div
                    key={lessonId}
                    className='w-full flex justify-between items-center px-5 py-1 text-left hover:bg-gray-50'
                  >
                    <p className='flex items-center gap-4 text-sm cursor-pointer'>
                      <span>
                        <Play size={15} />
                      </span>
                      {title}
                    </p>
                    {preview && (
                      <span className='underline cursor-pointer'>Preview</span>
                    )}
                    <div className='flex items-center gap-4 text-sm text-gray-500'>
                      <span>{lessonTime}</span>
                    </div>
                  </div>
                );
              })}
            </Accordion>
          );
        })}
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
