import axios from "axios";
import type { Bitacora } from "../interfaces/Bitacora";

const API_URL = "http://localhost:8080/api/bitacora";

export const obtenerBitacora = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const guardarBitacora = async (
  bitacora: Bitacora
) => {
  const response = await axios.post(
    API_URL,
    bitacora
  );

  return response.data;
};