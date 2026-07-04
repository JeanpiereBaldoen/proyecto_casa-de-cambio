/**
 * Servicio de autenticación para Login
 * API: POST /api/auth/login
 */

import type { LoginFormInterface } from '../interfaces/LoginForm';

import type { LoginRequest, LoginResponse } from '@/interfaces/Auth';
import { authApi } from '@/api/axios';

export const authService = {
  /**
   * Autentica un usuario con email y contraseña
   * API: POST /api/auth/login
   */
  async login(credentials: LoginFormInterface): Promise<LoginResponse> {
    const payload: LoginRequest = {
      email: credentials.email,
      password: credentials.password,
      recuerdame: credentials.recuerdame,
    };

    const response = await authApi.login(payload);

    // Json Server usualmente retorna el objeto directamente.
    // Si tu backend devuelve { success, data }, se ajusta aquí.
    return response.data as LoginResponse;
  },
};

