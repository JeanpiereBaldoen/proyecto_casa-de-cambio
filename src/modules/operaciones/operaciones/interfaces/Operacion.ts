export interface Operacion {
  id: number;
  tipo: string;
  cliente: string;
  moneda: string;
  monto: number;
  tipoCambio: number;
  total: number;
  fecha: string;
}