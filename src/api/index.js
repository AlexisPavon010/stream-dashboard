import axios from "axios";

const token = localStorage.getItem('token');

export const BASE_URL = 'https://stream-services-production.up.railway.app';

console.log(BASE_URL)

const instance = axios.create({
  baseURL: `${BASE_URL}/api`,
  withCredentials: true
})

instance.interceptors.request.use((config) => {
  // Establecer el encabezado 'Authorization' con el token Bearer
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

export default instance