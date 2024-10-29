package com.example.springreact.controllers;

import com.example.springreact.models.Producto;
import com.example.springreact.services.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000") // Permite peticiones desde tu frontend
@RestController // Cambiado a RestController para que todos los métodos devuelvan JSON
@RequestMapping("/api") // Prefijo para tus endpoints
public class HomeController {

    @Autowired
    private ProductoService productoService;

    @GetMapping("/productos") // Cambiado a /productos
    public ResponseEntity<List<Producto>> listarPublicados() {
        List<Producto> productos = productoService.getAllProductos();
        return ResponseEntity.ok(productos); // Retorna lista de productos
    }

    @PostMapping("/productos") // Para guardar un producto
    public ResponseEntity<Producto> guardar(@RequestBody Producto producto) {
        try {
            Producto savedProducto = productoService.saveProducto(producto);
            return ResponseEntity.ok(savedProducto); // Retorna el producto guardado
        } catch (Exception e) {
            System.out.println("Error al guardar el producto: " + e.getMessage());
            return ResponseEntity.status(500).body(null); // Retorna error 500
        }
    }

    @GetMapping("/productos/{id}") // Para obtener un producto por ID
    public ResponseEntity<Producto> obtenerProducto(@PathVariable Long id) {
        return productoService.getProductoById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build()); // Retorna 404 si no se encuentra
    }

    @DeleteMapping("/productos/{id}") // Para eliminar un producto
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        productoService.deleteProducto(id);
        return ResponseEntity.noContent().build(); // Retorna 204 No Content
    }
}
