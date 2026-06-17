import axios from "axios";
import type { Caja } from "../interfaces/Caja";

const API_URL = "http://localhost:8080/api/cajas";

export const obtenerCajas = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const guardarCaja = async (
  caja: Caja
) => {
  const response = await axios.post(
    API_URL,
    caja
  );

  return response.data;
};

export const actualizarCaja = async (
  id: number,
  caja: Caja
) => {
  const response = await axios.put(
    `${API_URL}/${id}`,
    caja
  );

  return response.data;
};

export const eliminarCaja = async (
  id: number
) => {
  const response = await axios.delete(
    `${API_URL}/${id}`
  );

  return response.data;
};