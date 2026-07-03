/**
 * Servicio de Monedas
 * API: GET/POST /api/finanzas/monedas
 */

import type { MonedaFormData } from '@/shared/schemas/formSchemas';

export const monedaService = {
  /**
   * Guarda una nueva moneda
   * TODO: Implementar POST a /api/finanzas/monedas
   */
  async save(data: MonedaFormData): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.log('[monedaService.save] Guardando moneda:', data);
  },

  /**
   * Obtiene todas las monedas
   * TODO: Implementar GET a /api/finanzas/monedas
   */
  async getAll(): Promise<any[]> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.log('[monedaService.getAll] Obteniendo monedas');
    return [];
  },
};\n