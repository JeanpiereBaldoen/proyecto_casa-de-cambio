/**
 * Interfaces para Cierre de Caja
 */

export interface CierreCaja {
  id: string;
  usuarioId: string;
  aperturaCajaId: string;
  monedas: Array<{
    monedaId: string;
    montoFinal: number;
  }>;
  observaciones?: string;
  fechaCierre: string;
}
\n