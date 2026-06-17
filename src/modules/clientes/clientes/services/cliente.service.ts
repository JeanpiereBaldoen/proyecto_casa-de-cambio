import { api } from "../../../core/api/axiosConfig";
import type { Cliente } from "../Interfaces/Cliente";

export const obtenerClientes = async () => {
  const response = await api.get("/clientes");
  return response.data;
};

export const obtenerClientePorId = async (id: number) => {
  const response = await api.get(`/clientes/${id}`);
  return response.data;
};

export const guardarCliente = async (cliente: Cliente) => {
  const response = await api.post(
    "/clientes",
    cliente
  );

  return response.data;
};

export const actualizarCliente = async (
  id: number,
  cliente: Cliente
) => {
  const response = await api.put(
    `/clientes/${id}`,
    cliente
  );

  return response.data;
};

export const eliminarCliente = async (id: number) => {
  const response = await api.delete(
    `/clientes/${id}`
  );

  return response.data;
};