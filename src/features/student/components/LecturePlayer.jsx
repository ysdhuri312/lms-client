/** @format */

const LecturePlayer = () => {
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
        <div className='bg-white border-l overflow-y-auto'>
          <div className='p-4 border-b'>
            <h2 className='font-semibold text-lg'>
              Cloud Computing Essentials
            </h2>
            <p className='text-sm text-gray-500'>
              Lecture 2: Cloud Service Models
            </p>
          </div>

          <ul className='divide-y'>
            <li className='p-4 hover:bg-gray-50 cursor-pointer'>
              ✅ Introduction
            </li>
            <li className='p-4 bg-blue-50 cursor-pointer'>
              ▶ Cloud Service Models
            </li>
            <li className='p-4 hover:bg-gray-50 cursor-pointer'>
              ⏱ Deployment Models
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default LecturePlayer;
