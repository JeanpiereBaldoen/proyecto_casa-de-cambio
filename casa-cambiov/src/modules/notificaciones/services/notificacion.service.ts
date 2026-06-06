import axios from "axios";
import type { Notificacion } from "../interfaces/Notificacion";

const API_URL = "http://localhost:8080/api/notificaciones";

export const obtenerNotificaciones = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const guardarNotificacion = async (
  notificacion: Notificacion
) => {
  const response = await axios.post(
    API_URL,
    notificacion
  );

  return response.data;
};

export const eliminarNotificacion = async (
  id: number
) => {
  const response = await axios.delete(
    `${API_URL}/${id}`
  );

  return response.data;
};