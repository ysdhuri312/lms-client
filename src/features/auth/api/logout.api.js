/** @format */

import axios from '../../../shared/services/apiClient';

const userLogout = async () => {
  try {
    await axios.get('/auth/logout', {});
  } catch (error) {
    const message =
      error.response?.data?.message || error.message || 'Invalid credential';

    throw new Error(message);
  }
};

export default userLogout;
