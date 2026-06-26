/**
 * Interfaces para Cliente
 */

export interface Cliente {
  id: string;
  tipoDocumento: string;
  numeroDocumento: string;
  nombre: string;
  apellido: string;
  email?: string;
  telefono?: string;
  direccion?: string;
  ciudad?: string;
  fechaCreacion: string;
}
\n