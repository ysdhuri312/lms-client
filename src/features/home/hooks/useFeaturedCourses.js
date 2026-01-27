/** @format */

import { useEffect, useState } from 'react';
import fetchFeaturedCourses from '../home.api';

export const useFeaturedCourses = () => {
  const [featuredCourses, setFeaturedCourses] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchFeaturedCourses()
      .then((res) => {
        const filterFeaturedCourses = res.data
          .sort((a, b) => b.ratings - a.ratings)
          .slice(0, 4);
        setFeaturedCourses(filterFeaturedCourses);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { featuredCourses, error, loading };
};
