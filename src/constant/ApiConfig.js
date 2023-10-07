import axios from 'axios';
import { API_BASE_URL } from './Constant';

export default axios.create({
  baseURL: API_BASE_URL,
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});
