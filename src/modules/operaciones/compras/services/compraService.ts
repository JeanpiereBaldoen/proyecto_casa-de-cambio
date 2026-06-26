/**
 * Servicio de Compras
 * API: POST /api/operaciones/compras
 */

import type { CompraFormData } from '@/shared/schemas/formSchemas';

export const compraService = {
  /**
   * Registra una nueva compra
   * TODO: Implementar POST a /api/operaciones/compras
   */
  async save(data: CompraFormData): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.log('[compraService.save] Registrando compra:', data);
  },
};