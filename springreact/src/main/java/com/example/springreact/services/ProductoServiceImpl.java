package com.example.springreact.services;

import com.example.springreact.models.Producto;
import com.example.springreact.repository.ProductoRepository; // Cambia a ProductoRepository
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductoServiceImpl implements ProductoService {

    @Autowired
    private ProductoRepository repositorio; // Cambia a ProductoRepository

    @Override
    public List<Producto> getAllProductos() {
        return repositorio.findAll();
    }

    @Override
    public Optional<Producto> getProductoById(Long id) {
        return repositorio.findById(id);
    }

    @Override
    public Producto saveProducto(Producto producto) {
        return repositorio.save(producto);
    }

    @Override
    public void deleteProducto(Long id) {
        repositorio.deleteById(id);
    }
}