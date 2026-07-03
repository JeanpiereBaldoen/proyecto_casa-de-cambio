/**
 * Servicio de Clientes
 * API: GET/POST /api/clientes
 */

import type { ClienteFormData } from '@/shared/schemas/formSchemas';

export const clienteService = {
  /**
   * Guarda un nuevo cliente
   * TODO: Implementar POST a /api/clientes
   */
  async save(data: ClienteFormData): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.log('[clienteService.save] Guardando cliente:', data);
  },

  /**
   * Obtiene todos los clientes
   * TODO: Implementar GET a /api/clientes
   */
  async getAll(): Promise<any[]> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.log('[clienteService.getAll] Obteniendo clientes');
    return [];
  },
};



