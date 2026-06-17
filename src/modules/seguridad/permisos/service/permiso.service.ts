import axios from "axios";
import type { Permiso } from "../interfaces/Permiso";

const API_URL = "http://localhost:8080/api/permisos";

export const obtenerPermisos = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const guardarPermiso = async (
  permiso: Permiso
) => {
  const response = await axios.post(
    API_URL,
    permiso
  );

  return response.data;
};

export const actualizarPermiso = async (
  id: number,
  permiso: Permiso
) => {
  const response = await axios.put(
    `${API_URL}/${id}`,
    permiso
  );

  return response.data;
};

export const eliminarPermiso = async (
  id: number
) => {
  const response = await axios.delete(
    `${API_URL}/${id}`
  );

  return response.data;
};