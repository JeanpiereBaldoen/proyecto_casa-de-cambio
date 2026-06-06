export interface Transferencia {
  id: number;
  cuentaOrigen: string;
  cuentaDestino: string;
  monto: number;
  moneda: string;
  fecha: string;
  estado: string;
}