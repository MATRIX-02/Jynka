import axios from 'axios';


const api = axios.create({
  baseURL: "https://zynka.onrender.com/",
});

export default api;