import axios from "axios";

const API_URL = "http://localhost:8080"; // Cambia si es necesario

export const getProductos = async () => {
  const response = await axios.get(`${API_URL}/ver-productos`);
  return response.data;
};

export const createProducto = async (producto) => {
  await axios.post(`${API_URL}/guardar`, producto);
};

export const deleteProducto = async (id) => {
  await axios.delete(`${API_URL}/delete/${id}`);
};

export const obtenerProductoPorId = async (id) => {
  const response = await axios.get(`${API_URL}/editar/${id}`);
  return response.data;
};

export const updateProducto = async (id, producto) => {
  await axios.put(`${API_URL}/guardar/${id}`, producto);
};
