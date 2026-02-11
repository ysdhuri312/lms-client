/** @format */

import axios from 'axios';
import { env } from '../../config/env.js';

const apiClient = axios.create({
  baseURL: env.API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});
export default apiClient;
