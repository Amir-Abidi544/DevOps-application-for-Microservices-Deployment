package com.example.legumeservice.controller;

import com.example.legumeservice.model.Legume;
import com.example.legumeservice.service.LegumeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*") // Autoriser Angular
@RestController
@RequestMapping("/api/legumes")
public class LegumeController {

    @Autowired
    private LegumeService legumeService;

    // Créer un légume
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Legume createLegume(@RequestBody Legume legume) {
        return legumeService.createLegume(legume);
    }

    // Récupérer tous les légumes
    @GetMapping
    public List<Legume> getAllLegumes() {
        return legumeService.getAllLegumes();
    }

    // Récupérer un légume par son ID
    @GetMapping("/{id}")
    public Legume getLegumeById(@PathVariable Long id) {
        return legumeService.getLegumeById(id);
    }

    // Mettre à jour un légume par son ID
    @PutMapping("/{id}")
    public Legume updateLegume(@PathVariable Long id, @RequestBody Legume legumeDetails) {
        return legumeService.updateLegume(id, legumeDetails);
    }

    // Supprimer un légume par son ID
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteLegume(@PathVariable Long id) {
        legumeService.deleteLegume(id);
    }
}
