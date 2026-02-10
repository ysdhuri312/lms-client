/** @format */

import { useEffect, useState } from 'react';
import findCourseById from '../api/course.api';

const useCourseDetails = (slug) => {
  const [course, setCourse] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoding] = useState(true);

  useEffect(() => {
    findCourseById(slug)
      .then((res) => setCourse(res.data.course))
      .catch((error) => setError(error))
      .finally(() => setLoding(false));
  }, []);

  return { course, error, loading };
};
export default useCourseDetails;
