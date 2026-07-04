/**
 * Servicio de Monedas
 * API: GET/POST /api/finanzas/monedas
 */

import type { MonedaFormData } from '@/shared/schemas/formSchemas';

import { api } from '@/api/axios';
import { endpoints } from '@/api/endpoints';

import type { ApiResponse } from '@/interfaces/ApiResponse';
import type { Moneda } from '@/interfaces/Moneda';

export const monedaService = {
  /**
   * Guarda una nueva moneda
   * API: POST /api/finanzas/monedas
   */
  async save(data: MonedaFormData): Promise<Moneda> {
    const payload = {
      nombre: data.nombre,
      codigo: data.codigo,
      simbolo: data.simbolo,
      activa: data.activa,
    };

    const response = await api.post(endpoints.monedas.base, payload);
    return (response.data as ApiResponse<Moneda>).data ?? (response.data as Moneda);
  },

  /**
   * Obtiene todas las monedas
   * API: GET /api/finanzas/monedas
   */
  async getAll(): Promise<Moneda[]> {
    const response = await api.get(endpoints.monedas.base);

    const payload = response.data as ApiResponse<Moneda[]>;
    return payload.data ?? (response.data as Moneda[]);
  },
};

