import axios from "axios";
import type { MovimientoCaja } from "../interfaces/MovimientoCaja";

const API_URL = "http://localhost:8080/api/movimientoscaja";

export const obtenerMovimientosCaja = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const guardarMovimientoCaja = async (
  movimiento: MovimientoCaja
) => {
  const response = await axios.post(
    API_URL,
    movimiento
  );

  return response.data;
};

export const eliminarMovimientoCaja = async (
  id: number
) => {
  const response = await axios.delete(
    `${API_URL}/${id}`
  );

  return response.data;
};