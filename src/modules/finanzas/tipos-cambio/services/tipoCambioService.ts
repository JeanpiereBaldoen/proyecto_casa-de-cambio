/**
 * Servicio de Tipos de Cambio
 * API: GET/POST /api/finanzas/tipos-cambio
 */

import type { TipoCambioFormData } from '@/shared/schemas/formSchemas';

import { api } from '@/api/axios';
import { endpoints } from '@/api/endpoints';

import type { ApiResponse } from '@/interfaces/ApiResponse';
import type { TipoCambio } from '@/interfaces/TipoCambio';

export const tipoCambioService = {
  /**
   * Guarda un nuevo tipo de cambio
   * API: POST /api/finanzas/tipos-cambio
   */
  async save(data: TipoCambioFormData): Promise<TipoCambio> {
    const payload = {
      monedaOrigen: data.monedaOrigen,
      monedaDestino: data.monedaDestino,
      precioCompra: data.precioCompra,
      precioVenta: data.precioVenta,
      fechaVigencia: data.fechaVigencia,
    };

    const response = await api.post(endpoints.tiposCambio.base, payload);
    return (response.data as ApiResponse<TipoCambio>).data ?? (response.data as TipoCambio);
  },

  /**
   * Obtiene todos los tipos de cambio activos
   * API: GET /api/finanzas/tipos-cambio?activos=true
   */
  async getActivos(): Promise<TipoCambio[]> {
    const response = await api.get(endpoints.tiposCambio.activos);

    const payload = response.data as ApiResponse<TipoCambio[]>;
    return payload.data ?? (response.data as TipoCambio[]);
  },
};

