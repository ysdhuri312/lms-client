/** @format */

import axios from '../../../shared/services/apiClient';

const userLogin = async (data) => {
  try {
    const response = await axios.post('/auth/login', data);

    return response.data;
  } catch (error) {
    const message =
      error.response?.data?.message || error.message || 'Invalid credential';

    throw new Error(message);
  }
};

export default userLogin;
