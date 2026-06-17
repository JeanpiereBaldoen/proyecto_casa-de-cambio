import axios from "axios";
import type { CierreCaja } from "../interfaces/CierreCaja";

const API_URL = "http://localhost:8080/api/cierrecaja";

export const obtenerCierresCaja = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const guardarCierreCaja = async (
  cierreCaja: CierreCaja
) => {
  const response = await axios.post(
    API_URL,
    cierreCaja
  );

  return response.data;
};

export const eliminarCierreCaja = async (
  id: number
) => {
  const response = await axios.delete(
    `${API_URL}/${id}`
  );

  return response.data;
};