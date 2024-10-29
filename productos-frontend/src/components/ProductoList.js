import React, { useEffect, useState } from "react";
import { getProductos, deleteProducto } from "../api/productoService";
import { Link } from "react-router-dom";

const ProductoList = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      const result = await getProductos();
      setProductos(result);
    };

    fetchProductos();
  }, []);

  const handleDelete = async (id) => {
    await deleteProducto(id);
    setProductos(productos.filter((producto) => producto.id !== id));
  };

  return (
    <div>
      <h2>Lista de Productos</h2>
      <Link to="/agregar">Agregar Producto</Link>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            {producto.nombre} - ${producto.precio}
            <button onClick={() => handleDelete(producto.id)}>Eliminar</button>
            <Link to={`/editar/${producto.id}`}>Editar</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductoList;
