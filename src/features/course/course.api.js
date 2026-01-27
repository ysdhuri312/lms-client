/** @format */

import axios from '../../shared/services/apiClient.js';

const findCourseById = (id) => {
  return axios.get(`/courses/${id}`);
};

export default findCourseById;
