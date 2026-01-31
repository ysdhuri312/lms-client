/** @format */

import { Outlet } from 'react-router-dom';
import LecturePlayer from '../components/LecturePlayer';

const LecturePage = () => {
  return (
    <div className='min-h-screen'>
      <LecturePlayer />
    </div>
  );
};
export default LecturePage;
