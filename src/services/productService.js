import axios from "axios"

const API_URL = "https://6a15f92f91ff9a63de090ac4.mockapi.io/productos"

export const getProductos = async () => {
  const response = await axios.get(API_URL)
  return response.data
}

export const createProducto = async (producto) => {
  const response = await axios.post(API_URL, producto)
  return response.data
}

export const updateProducto = async (id, producto) => {
  const response = await axios.put(`${API_URL}/${id}`, producto)
  return response.data
}

export const deleteProducto = async (id) => {
  await axios.delete(`${API_URL}/${id}`)
}