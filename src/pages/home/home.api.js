/** @format */

import axios from '../../shared/services/apiClient.js';

const fetchAllCourses = () => {
  return axios.get('/courses');
};

export default fetchAllCourses;
