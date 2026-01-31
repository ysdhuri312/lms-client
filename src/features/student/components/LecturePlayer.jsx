/** @format */

import { useOutletContext } from 'react-router-dom';
import Accordion from '../../../shared/components/Accordion';
import { Play } from 'lucide-react';

const LecturePlayer = () => {
  const { course } = useOutletContext();

  const { modules } = course;

  return (
    <>
      <div className='h-screen grid grid-cols-1 lg:grid-cols-4 pt-14'>
        {/* VIDEO SECTION */}
        <div className='lg:col-span-3 bg-black flex items-center justify-center'>
          <video
            controls
            autoPlay
            className='w-full h-full max-h-screen'
            src='/sample-video.mp4'
          />
        </div>

        {/* SIDEBAR */}
        <div className='bg-white border-l overflow-y-auto '>
          <div>
            {modules.map((module) => {
              const { moduleId, title, moduleTime, lessonsCount, lessons } =
                module;

              return (
                <Accordion
                  key={moduleId}
                  title={title}
                  value={'11 / 11 | 42min'}
                >
                  {lessons.map((lesson) => {
                    const { lessonId, lessonTime, title } = lesson;

                    return (
                      <div
                        key={lessonId}
                        className='w-full flex items-center gap-2 px-5 py-1 hover:bg-gray-50'
                      >
                        <div>
                          <input
                            type='checkbox'
                            className='text-blue-600 checked:bg-blue-600'
                          />
                        </div>
                        <div className='w-full flex flex-col'>
                          <p className='text-xs cursor-pointer mb-1 line-h'>
                            {title}
                          </p>
                          <div className='text-xs text-gray-500'>
                            <div className='flex items-center gap-1'>
                              <span>
                                <Play size={10} />
                              </span>
                              <span>{lessonTime}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </Accordion>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default LecturePlayer;
