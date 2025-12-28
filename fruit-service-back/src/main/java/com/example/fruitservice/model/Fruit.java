package com.example.fruitservice.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Fruit {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Cela permettra de générer l'ID automatiquement
    private Long id;

    private String name;

    // Getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id; // L'ID ne devrait pas être défini manuellement
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
