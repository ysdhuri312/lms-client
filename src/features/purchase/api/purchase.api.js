/** @format */

import axios from '../../../shared/services/apiClient';

export const findCourseById = (slug) => {
  return axios.get(`/courses/${slug}`);
};

export const createOrder = async (orederDetails) => {
  try {
    const response = await axios.post('/orders', orederDetails);
    return response.data;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.message ||
      'Ordered failed, Please order again';

    throw new Error(message);
  }
};

export const verifyPayment = async (orderDetails) => {
  try {
    const response = await axios.post('/orders/verify-payment', orderDetails);
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.message ||
      'Ordered failed, Please order again';

    throw new Error(message);
  }
};
