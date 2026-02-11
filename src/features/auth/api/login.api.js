/** @format */

import axios from '../../../shared/services/apiClient';

const userLogin = (data) => {
  return axios.post('/auth/login', data, {
    withCredentials: true,
  });
};

export default userLogin;
