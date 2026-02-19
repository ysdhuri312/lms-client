/** @format */

import axios from '../../../shared/services/apiClient';

const userLogin = async (data) => {
  try {
    await axios.post('/auth/login', data);
    const response = await axios.get('/auth/me');

    return response.data.user;
  } catch (error) {
    const message =
      error.response?.data?.message || error.message || 'Invalid credential';

    throw new Error(message);
  }
};

export default userLogin;
