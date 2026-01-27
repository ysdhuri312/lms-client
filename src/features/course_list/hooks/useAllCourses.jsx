/** @format */

import { useEffect, useState } from 'react';
import fetchAllCourses from '../courseList.api';

export const useAllCourses = () => {
  const [allCourses, setAllCourses] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchAllCourses()
      .then((res) => {
        const getAllCourses = res.data;
        setAllCourses(getAllCourses);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(true));
  }, []);

  return { allCourses, error, loading };
};
