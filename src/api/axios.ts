import axios, { AxiosError, type AxiosInstance } from 'axios';

import { endpoints } from './endpoints';
import { ApiError, apiErrorFromAxios } from '../interfaces/errors';


// Nota: mantenemos baseURL coherente con src/core/api/axiosConfig.ts
const baseURL = 'http://localhost:8080/api';

const timeoutMs = 15_000;

function getToken(): string | null {
  // Evita acoplar a stores para no romper arquitectura.
  // Si el proyecto usa otro storage, se puede adaptar aquí.
  try {
    return localStorage.getItem('token');
  } catch {
    return null;
  }
}

export const api: AxiosInstance = axios.create({
  baseURL,
  timeout: timeoutMs,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers = config.headers ?? {};
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    // Manejamos error globalmente y lo devolvemos tipado
    const normalized: ApiError = apiErrorFromAxios(error);

    // Log mínimo para debug
    // eslint-disable-next-line no-console
    console.error('[api] HTTP Error:', {
      status: normalized.status,
      code: normalized.code,
      message: normalized.message,
    });

    return Promise.reject(normalized);
  }
);

export const authApi = {
  login: async (payload: unknown) => {
    return api.post(endpoints.auth.login, payload);
  },
};

