/** @format */

import axios from '../../../shared/services/apiClient';

const findCourseById = (slug) => {
  return axios.get(`/courses/${slug}`);
};

export default findCourseById;
