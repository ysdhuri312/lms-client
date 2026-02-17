/** @format */

import { useEffect, useState } from 'react';
import { findCourseById } from '../api/purchase.api';

const usePurchaseCourseDetails = (slug) => {
  const [purchaseCourse, setPurchaseCourse] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoding] = useState(true);

  useEffect(() => {
    findCourseById(slug)
      .then((res) => setPurchaseCourse(res.data.course))
      .catch((error) => setError(error))
      .finally(() => setLoding(false));
  }, []);

  return { purchaseCourse, error, loading };
};
export default usePurchaseCourseDetails;
