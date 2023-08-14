import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL;

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const login = (email, password) => {
  return api.post('/token', { email, password });
};