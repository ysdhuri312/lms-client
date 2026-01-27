/** @format */

import { useEffect, useState } from 'react';
import findCourseById from '../course.api';

const useCourseDetails = (id) => {
  const [course, setCourse] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoding] = useState(true);

  useEffect(() => {
    findCourseById(id)
      .then((res) => setCourse(res.data))
      .catch((error) => setError(error))
      .finally(() => setLoding(false));
  }, []);

  return { course, error, loading };
};
export default useCourseDetails;
