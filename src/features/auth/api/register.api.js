/** @format */

import axios from '../../../shared/services/apiClient';

const userRegister = async (data) => {
  try {
    await axios.post('/auth/register', data);
    const response = await axios.get('/auth/me');

    return response.data.user;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.message ||
      'User registration failed';

    throw new Error(message);
  }
};

export default userRegister;
