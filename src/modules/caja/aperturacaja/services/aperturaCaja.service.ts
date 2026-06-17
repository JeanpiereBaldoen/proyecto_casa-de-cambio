import axios from "axios";
import type { AperturaCaja } from "../interfaces/AperturaCaja";

const API_URL = "http://localhost:8080/api/apertura-caja";

export const obtenerAperturasCaja = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const guardarAperturaCaja = async (
  aperturaCaja: AperturaCaja
) => {
  const response = await axios.post(
    API_URL,
    aperturaCaja
  );

  return response.data;
};

export const eliminarAperturaCaja = async (
  id: number
) => {
  const response = await axios.delete(
    `${API_URL}/${id}`
  );

  return response.data;
};