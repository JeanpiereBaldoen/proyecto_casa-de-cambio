export interface Moneda {
  id: string;
  nombre: string;
  codigo: string;
  simbolo: string;
  activa: boolean;
}

export interface MonedaRequest {
  nombre: string;
  codigo: string;
  simbolo: string;
  activa?: boolean;
}

