export interface CuentaBancaria {
  id: number;
  banco: string;
  numeroCuenta: string;
  tipoCuenta: string;
  moneda: string;
  saldo: number;
}