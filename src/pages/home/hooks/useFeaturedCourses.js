/** @format */

import { useEffect, useState } from 'react';
import fetchAllCourses from '../home.api';

export const useFeaturedCourses = () => {
  const [featuredCourses, setFeaturedCourses] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchAllCourses()
      .then((res) => {
        const filterFeaturedCourses = res.data.courses
          .sort((a, b) => b.stats.ratings - a.stats.ratings)
          .slice(0, 4);
        setFeaturedCourses(filterFeaturedCourses);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { featuredCourses, error, loading };
};
