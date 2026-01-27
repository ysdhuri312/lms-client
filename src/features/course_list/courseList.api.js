/** @format */

import axios from '../../shared/services/apiClient.js';

const fetchFeaturedCourses = () => {
  return axios.get('/courses');
};

export default fetchFeaturedCourses;
