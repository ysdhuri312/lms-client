/** @format */

import axios from '../../../shared/services/apiClient';

const userRegister = async (data) => {
  try {
    const response = await axios.post('/auth/register', data);

    return response.data;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.message ||
      'User registration failed';

    throw new Error(message);
  }
};

export default userRegister;
