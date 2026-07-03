/**
 * Servicio de Cierre de Caja
 * API: POST /api/caja/cierre
 */

import type { CierreCajaFormData } from '@/shared/schemas/formSchemas';

export const cierreCajaService = {
  /**
   * Cierra la caja del día
   * TODO: Implementar POST a /api/caja/cierre
   */
  async save(data: CierreCajaFormData): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.log('[cierreCajaService.save] Cerrando caja:', data);
  },
};\n