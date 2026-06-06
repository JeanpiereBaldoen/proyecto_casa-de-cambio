export interface Venta {
  id: number;
  cliente: string;
  moneda: string;
  monto: number;
  tipoCambio: number;
  total: number;
  fecha: string;
}