/** @format */

import { useEffect, useState } from 'react';
import fetchAllCourses from '../courseList.api.js';

export const useAllCourses = () => {
  const [allCourses, setAllCourses] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllCourses()
      .then((res) => {
        const getAllCourses = res.data;
        setAllCourses(getAllCourses);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { allCourses, error, loading };
};
