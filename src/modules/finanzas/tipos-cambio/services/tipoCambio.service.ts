import axios from "axios";

const API_URL = "http://localhost:8080/api/tipos-cambio";

export const obtenerTiposCambio = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};