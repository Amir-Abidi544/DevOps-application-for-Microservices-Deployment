package com.example.legumeservice.service;

import com.example.legumeservice.model.Legume;
import com.example.legumeservice.repository.LegumeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LegumeService {

    @Autowired
    private LegumeRepository legumeRepository;

    // Récupérer tous les légumes
    public List<Legume> getAllLegumes() {
        return legumeRepository.findAll();
    }

    // Récupérer un légume par son ID
    public Legume getLegumeById(Long id) {
        return legumeRepository.findById(id).orElse(null);
    }

    // Créer un légume
    public Legume createLegume(Legume legume) {
        return legumeRepository.save(legume);
    }

    // Mettre à jour un légume
    public Legume updateLegume(Long id, Legume legume) {
        legume.setId(id);

        return legumeRepository.save(legume);
    }

    // Supprimer un légume
    public void deleteLegume(Long id) {
        legumeRepository.deleteById(id);
    }
}
