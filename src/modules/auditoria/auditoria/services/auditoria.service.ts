import axios from "axios";
import type { Auditoria } from "../interfaces/Auditoria";

const API_URL = "http://localhost:8080/api/auditoria";

export const obtenerAuditorias = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const guardarAuditoria = async (
  auditoria: Auditoria
) => {
  const response = await axios.post(
    API_URL,
    auditoria
  );

  return response.data;
};