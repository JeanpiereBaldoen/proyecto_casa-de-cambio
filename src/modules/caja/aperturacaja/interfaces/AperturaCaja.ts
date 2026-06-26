/**
 * Interfaces para Apertura de Caja
 */

export interface AperturaCaja {
  id: string;
  usuarioId: string;
  montoInicial: number;
  monedas: Array<{
    monedaId: string;
    monto: number;
  }>;
  observaciones?: string;
  fechaApertura: string;
}
\n