import axios from 'axios';

export const BASE_URL = axios.create({
  baseURL: 'http://192.168.100.12:4000/api/v1',
});
