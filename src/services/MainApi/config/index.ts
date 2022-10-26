import axios from 'axios';


const api = axios.create({
  // Esperar para saber o localhost e mudar o .env
  baseURL: process.env.REACT_APP_URL_BASE,
  headers: {
    "Content-type": "application/json"
  }
});

export default api;
