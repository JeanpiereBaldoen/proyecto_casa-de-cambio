import axios from "axios";
import type { CuentaBancaria } from "../interfaces/CuentaBancaria";

const API_URL = "http://localhost:8080/api/cuentasbancarias";

export const obtenerCuentasBancarias = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const guardarCuentaBancaria = async (
  cuenta: CuentaBancaria
) => {
  const response = await axios.post(
    API_URL,
    cuenta
  );

  return response.data;
};

export const eliminarCuentaBancaria = async (
  id: number
) => {
  const response = await axios.delete(
    `${API_URL}/${id}`
  );

  return response.data;
};