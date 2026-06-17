import axios from "axios";

const API_URL = "http://localhost:8080/api/reportes";

export const obtenerReportes = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};