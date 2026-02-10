/** @format */

import axios from 'axios';
import { env } from '../../config/env.js';

const apiClient = axios.create({
  baseURL: env.API_URL,
});
export default apiClient;
