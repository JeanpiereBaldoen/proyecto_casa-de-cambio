import axios from "axios";
import type { Configuracion } from "../interfaces/Configuracion";

const API_URL = "http://localhost:8080/api/configuracion";

export const obtenerConfiguracion = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const guardarConfiguracion = async (
  configuracion: Configuracion
) => {
  const response = await axios.post(
    API_URL,
    configuracion
  );

  return response.data;
};