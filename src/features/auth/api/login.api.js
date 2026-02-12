/** @format */

import axios from '../../../shared/services/apiClient';

const userLogin = async (data) => {
  try {
    await axios.post('/auth/login', data);

    return axios.get('/auth/me');
  } catch (error) {
    const message =
      error.response?.data?.message || error.message || 'Invalid credential';

    throw new Error(message);
  }
};

export default userLogin;
