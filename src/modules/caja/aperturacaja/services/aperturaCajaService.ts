/**
 * Servicio de Apertura de Caja
 * API: POST /api/caja/apertura
 */

import type { AperturaCajaFormData } from '@/shared/schemas/formSchemas';

export const aperturaCajaService = {
  /**
   * Abre la caja del día
   * TODO: Implementar POST a /api/caja/apertura
   */
  async save(data: AperturaCajaFormData): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.log('[aperturaCajaService.save] Abriendo caja:', data);
  },
};



