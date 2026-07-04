/**
 * Servicio de Clientes
 * API: GET/POST /api/clientes
 */

import type { ClienteFormData } from '@/shared/schemas/formSchemas';

import { api } from '@/api/axios';
import { endpoints } from '@/api/endpoints';

import type { ApiResponse } from '@/interfaces/ApiResponse';
import type { Cliente } from '@/interfaces/Cliente';

export const clienteService = {
  /**
   * Guarda un nuevo cliente
   * API: POST /api/clientes
   */
  async save(data: ClienteFormData): Promise<Cliente> {
    const payload = {
      tipoDocumento: data.tipoDocumento,
      numeroDocumento: data.numeroDocumento,
      nombre: data.nombre,
      apellido: data.apellido,
      email: data.email,
      telefono: data.telefono,
      direccion: data.direccion,
      ciudad: data.ciudad,
    };

    const response = await api.post(endpoints.clientes.base, payload);
    return (response.data as ApiResponse<Cliente>).data ?? (response.data as Cliente);
  },

  /**
   * Obtiene todos los clientes
   * API: GET /api/clientes
   */
  async getAll(): Promise<Cliente[]> {
    const response = await api.get(endpoints.clientes.base);

    const payload = response.data as ApiResponse<Cliente[]>;
    return payload.data ?? (response.data as Cliente[]);
  },
};




