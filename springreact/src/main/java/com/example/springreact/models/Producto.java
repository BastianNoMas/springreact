package com.example.springreact.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity
public class Producto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter
    @Setter
    private long id;

    @Column
    @Getter
    @Setter
    private String nombre;

    @Column
    @Getter
    @Setter
    private String tipo;

    @Column
    @Getter
    @Setter
    private String estado;

    @Column
    @Getter
    @Setter
    private String vendedor;

    @Column
    @Getter
    @Setter
    private Double precio;
}
