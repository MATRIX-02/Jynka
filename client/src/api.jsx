import axios from 'axios';


const api = axios.create({
  baseURL: process.env.ZYNKA_API,
});

export default api;