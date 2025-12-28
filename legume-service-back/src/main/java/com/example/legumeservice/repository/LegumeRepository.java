package com.example.legumeservice.repository;

import com.example.legumeservice.model.Legume;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LegumeRepository extends JpaRepository<Legume, Long> {
    // On peut ajouter des méthodes de requêtes personnalisées ici si nécessaire
}
