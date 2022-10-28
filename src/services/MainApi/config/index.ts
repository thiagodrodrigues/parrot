import axios from 'axios';


const api = axios.create({
  // Esperar para saber o localhost
  baseURL: 'http://localhost:3000',
  headers: {
    "Content-type": "application/json"
  }
});

export default api;
