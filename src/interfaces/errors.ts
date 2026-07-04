import type { AxiosError } from 'axios';

export const HttpStatus = {
  BadRequest: 400,
  Unauthorized: 401,
  Forbidden: 403,
  NotFound: 404,
  InternalServerError: 500,
  Timeout: 408,
  NetworkError: 0,
} as const;

export type ApiErrorCode =
  | 'BAD_REQUEST'
  | 'UNAUTHORIZED'
  | 'FORBIDDEN'
  | 'NOT_FOUND'
  | 'INTERNAL_SERVER_ERROR'
  | 'TIMEOUT'
  | 'NETWORK_ERROR'
  | 'UNKNOWN';


export interface ApiError {
  status: number;
  code: ApiErrorCode;
  message: string;
  details?: unknown;
}

function mapCode(status?: number): ApiErrorCode {
  switch (status) {
    case 400:
      return 'BAD_REQUEST';
    case 401:
      return 'UNAUTHORIZED';
    case 403:
      return 'FORBIDDEN';
    case 404:
      return 'NOT_FOUND';
    case 500:
      return 'INTERNAL_SERVER_ERROR';
    case 408:
      return 'TIMEOUT';
    default:
      return 'UNKNOWN';
  }
}

export function apiErrorFromAxios(error: AxiosError): ApiError {
  const status = error.response?.status;

  if (!status) {
    // Timeout / network
    const message =
      error.code === 'ECONNABORTED'
        ? 'Tiempo de espera agotado.'
        : 'Error de red. No se pudo completar la solicitud.';

    return {
      status: error.code === 'ECONNABORTED' ? HttpStatus.Timeout : HttpStatus.NetworkError,
      code: error.code === 'ECONNABORTED' ? 'TIMEOUT' : 'NETWORK_ERROR',
      message,
      details: error.toJSON(),
    };
  }

  const messageFromServer =
    typeof error.response?.data === 'string'
      ? error.response?.data
      : (error.response?.data as { message?: string } | undefined)?.message;

  const message = messageFromServer || error.message || 'Error HTTP';

  return {
    status,
    code: mapCode(status),
    message,
    details: error.response?.data,
  };
}

