export interface Compra {
  id: number;
  cliente: string;
  moneda: string;
  monto: number;
  tipoCambio: number;
  total: number;
  fecha: string;
}