export interface LoginRequest {
  email: string;
  password: string;
  recuerdame?: boolean;
}

export interface LoginResponse {
  token: string;
  usuario: string;
  rol: string;
}

export interface LogoutResponse {
  success: boolean;
}

