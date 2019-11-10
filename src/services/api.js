import axios from 'axios';

const api = axios.create({
  // baseURL: 'https://backend-quest.herokuapp.com/api',
  baseURL: 'http://localhost:8000/api',
});

export default api;