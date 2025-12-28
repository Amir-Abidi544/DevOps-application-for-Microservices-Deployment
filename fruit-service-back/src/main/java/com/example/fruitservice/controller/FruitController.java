package com.example.fruitservice.controller;

import com.example.fruitservice.model.Fruit;
import com.example.fruitservice.service.FruitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/fruits")
public class FruitController {

    @Autowired
    private FruitService fruitService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Fruit createFruit(@RequestBody Fruit fruit) {
        return fruitService.createFruit(fruit);
    }

    @GetMapping
    public List<Fruit> getAllFruits() {
        return fruitService.getAllFruits();
    }

    @GetMapping("/{id}")
    public Fruit getFruitById(@PathVariable Long id) {
        return fruitService.getFruitById(id);
    }

    @PutMapping("/{id}")
    public Fruit updateFruit(@PathVariable Long id, @RequestBody Fruit fruitDetails) {
        return fruitService.updateFruit(id, fruitDetails);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteFruit(@PathVariable Long id) {
        fruitService.deleteFruit(id);
    }
}
