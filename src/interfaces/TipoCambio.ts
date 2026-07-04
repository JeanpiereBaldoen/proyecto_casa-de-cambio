export interface TipoCambio {
  id: string;
  monedaOrigen: string;
  monedaDestino: string;
  precioCompra: number;
  precioVenta: number;
  fechaVigencia: string;
  activo: boolean;
  fechaCreacion: string;
}

export interface TipoCambioRequest {
  monedaOrigen: string;
  monedaDestino: string;
  precioCompra: number;
  precioVenta: number;
  fechaVigencia: string;
}

