import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // Adjust this URL if necessary
});

export default api;
