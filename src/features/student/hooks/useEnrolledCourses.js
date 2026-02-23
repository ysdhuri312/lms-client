/** @format */

import { useEffect, useState } from 'react';
import { getEnrollmentedCourses } from '../api/enrollment.api';

export const useEnrolledCourses = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getEnrollmentedCourses()
      .then((res) => {
        const getAllCourses = res.data.courses;
        setEnrolledCourses(getAllCourses);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { enrolledCourses, error, loading };
};
