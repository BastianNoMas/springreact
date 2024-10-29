package com.example.springreact.services;

import com.example.springreact.models.Producto;  // Cambiar de Persona a Producto
import java.util.List;
import java.util.Optional;

public interface ProductoService {  // Cambiar de PersonaService a ProductoService
    List<Producto> getAllProductos();  // Cambiar de getAllPersonas a getAllProductos
    Optional<Producto> getProductoById(Long id);  // Cambiar de getPersonaById a getProductoById
    Producto saveProducto(Producto producto);  // Cambiar de savePersona a saveProducto
    void deleteProducto(Long id);  // Cambiar de deletePersona a deleteProducto
}
