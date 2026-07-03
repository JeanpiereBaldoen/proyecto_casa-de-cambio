/**
 * Servicio de Tipos de Cambio
 * API: GET/POST /api/finanzas/tipos-cambio
 */

import type { TipoCambioFormData } from '@/shared/schemas/formSchemas';

export const tipoCambioService = {
  /**
   * Guarda un nuevo tipo de cambio
   * TODO: Implementar POST a /api/finanzas/tipos-cambio
   */
  async save(data: TipoCambioFormData): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.log('[tipoCambioService.save] Guardando tipo de cambio:', data);
  },

  /**
   * Obtiene todos los tipos de cambio activos
   * TODO: Implementar GET a /api/finanzas/tipos-cambio?activos=true
   */
  async getActivos(): Promise<any[]> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.log('[tipoCambioService.getActivos] Obteniendo tipos de cambio activos');
    return [];
  },
};