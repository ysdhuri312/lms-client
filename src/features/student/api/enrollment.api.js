/** @format */

import axios from '../../../shared/services/apiClient';

export const getEnrollmentedCourses = async () => {
  try {
    const respnose = await axios.get('/student/enrollments');

    return respnose;
  } catch (error) {
    const message =
      error.response?.data?.message || error.message || 'Internal sever error';

    throw new Error(message);
  }
};
