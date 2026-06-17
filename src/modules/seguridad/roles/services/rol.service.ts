import axios from "axios";
import type { Rol } from "../interfaces/Rol";

const API_URL = "http://localhost:8080/api/roles";

export const obtenerRoles = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const guardarRol = async (rol: Rol) => {
  const response = await axios.post(API_URL, rol);
  return response.data;
};

export const eliminarRol = async (id: number) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};