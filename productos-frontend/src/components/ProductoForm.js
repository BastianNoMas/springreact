import React, { useState, useEffect } from "react";
import {
  createProducto,
  obtenerProductoPorId,
  updateProducto,
} from "../api/productoService";

const ProductoForm = ({ match }) => {
  const [nombre, setNombre] = useState("");
  const [tipo, setTipo] = useState("");
  const [estado, setEstado] = useState("");
  const [vendedor, setVendedor] = useState("");
  const [precio, setPrecio] = useState("");
  const isEditing = !!match.params.id;

  useEffect(() => {
    if (isEditing) {
      const fetchProducto = async () => {
        const data = await obtenerProductoPorId(match.params.id);
        setNombre(data.nombre);
        setTipo(data.tipo);
        setEstado(data.estado);
        setVendedor(data.vendedor);
        setPrecio(data.precio);
      };
      fetchProducto();
    }
  }, [isEditing, match.params.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const producto = { nombre, tipo, estado, vendedor, precio };

    if (isEditing) {
      await updateProducto(match.params.id, producto);
    } else {
      await createProducto(producto);
    }

    // Resetear el formulario
    setNombre("");
    setTipo("");
    setEstado("");
    setVendedor("");
    setPrecio("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Tipo"
        value={tipo}
        onChange={(e) => setTipo(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Estado"
        value={estado}
        onChange={(e) => setEstado(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Vendedor"
        value={vendedor}
        onChange={(e) => setVendedor(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Precio"
        value={precio}
        onChange={(e) => setPrecio(e.target.value)}
        required
      />
      <button type="submit">
        {isEditing ? "Actualizar" : "Guardar Producto"}
      </button>
    </form>
  );
};

export default ProductoForm;
