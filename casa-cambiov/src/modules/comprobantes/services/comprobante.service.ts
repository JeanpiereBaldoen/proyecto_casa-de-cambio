import axios from "axios";
import type { Comprobante } from "../interfaces/Comprobante";

const API_URL = "http://localhost:8080/api/comprobantes";

export const obtenerComprobantes = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const guardarComprobante = async (
  comprobante: Comprobante
) => {
  const response = await axios.post(
    API_URL,
    comprobante
  );

  return response.data;
};

export const eliminarComprobante = async (
  id: number
) => {
  const response = await axios.delete(
    `${API_URL}/${id}`
  );

  return response.data;
};