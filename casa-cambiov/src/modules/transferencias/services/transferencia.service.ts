import axios from "axios";
import type { Transferencia } from "../interfaces/Transferencia";

const API_URL = "http://localhost:8080/api/transferencias";

export const obtenerTransferencias = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const guardarTransferencia = async (
  transferencia: Transferencia
) => {
  const response = await axios.post(
    API_URL,
    transferencia
  );

  return response.data;
};

export const eliminarTransferencia = async (
  id: number
) => {
  const response = await axios.delete(
    `${API_URL}/${id}`
  );

  return response.data;
};