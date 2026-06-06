import axios from "axios";
import type { Banco } from "../interfaces/Banco";

const API_URL = "http://localhost:8080/api/bancos";

export const obtenerBancos = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const guardarBanco = async (
  banco: Banco
) => {
  const response = await axios.post(
    API_URL,
    banco
  );

  return response.data;
};

export const actualizarBanco = async (
  id: number,
  banco: Banco
) => {
  const response = await axios.put(
    `${API_URL}/${id}`,
    banco
  );

  return response.data;
};

export const eliminarBanco = async (
  id: number
) => {
  const response = await axios.delete(
    `${API_URL}/${id}`
  );

  return response.data;
};