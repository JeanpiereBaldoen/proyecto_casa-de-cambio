import axios from "axios";
import type { Perfil } from "../interfaces/Perfil";

const API_URL = "http://localhost:8080/api/perfil";

export const obtenerPerfil = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const actualizarPerfil = async (
  id: number,
  perfil: Perfil
) => {
  const response = await axios.put(
    `${API_URL}/${id}`,
    perfil
  );

  return response.data;
};