import axios from 'axios';

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://distinguished-dusty-mohamadarif346-d2688a41.koyeb.app/api/v1';

console.log('API Base URL:', API_BASE_URL);

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    // Ensure token is genuinely a string and not the string literals 'undefined' or 'null'
    if (token && token !== 'undefined' && token !== 'null') {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      // If the token is invalid literal, clean it up
      if (token === 'undefined' || token === 'null') {
        localStorage.removeItem('token');
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      const { status } = error.response;

      if (status === 401) {
        console.warn('Session expired. Redirecting to login...');

        localStorage.removeItem('token');

        if (window.location.pathname !== '/sign-in') {
          window.location.href = '/sign-in';
        }
      }
    }

    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const { status } = error.response;

      if (status === 401) {
        console.warn('Session expired or user deleted. Redirecting...');

        localStorage.removeItem('token');

        if (window.location.pathname !== '/sign-in') {
          window.location.href = '/sign-in';
        }
      }
    }
    return Promise.reject(error);
  }
);

export default apiClient;
