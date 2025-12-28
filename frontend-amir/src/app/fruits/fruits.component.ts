import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FruitService, Fruit } from '../services/fruit.service';

@Component({
  selector: 'app-fruits',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {
  fruits: Fruit[] = [];
  newFruit: string = '';
  editingFruit: Fruit | null = null;

  constructor(private fruitService: FruitService) {}

  ngOnInit(): void {
    this.getFruits();
  }

  getFruits(): void {
    this.fruitService.getFruits().subscribe(data => {
      this.fruits = data;
    }, error => {
      console.error("Erreur lors de la récupération des fruits :", error);
    });
  }

  addFruit(): void {
    if (this.newFruit.trim() !== '') {
      const newFruitObj = { name: this.newFruit };  // L'ID ne doit pas être inclus ici
      this.fruitService.addFruit(newFruitObj).subscribe(addedFruit => {
        this.fruits.push(addedFruit);
        this.newFruit = '';
      });
    }
  }
  

  deleteFruit(id: number): void {
    this.fruitService.deleteFruit(id).subscribe(() => {
      this.fruits = this.fruits.filter(fruit => fruit.id !== id);
    });
  }

  editFruit(fruit: Fruit): void {
    this.editingFruit = { ...fruit };
  }

  updateFruit(): void {
    if (this.editingFruit && this.editingFruit.id !== undefined) {
      this.fruitService.updateFruit(this.editingFruit.id, this.editingFruit)
        .subscribe(updatedFruit => {
          const index = this.fruits.findIndex(fruit => fruit.id === updatedFruit.id);
          if (index !== -1) {
            this.fruits[index] = updatedFruit;
          }
          this.editingFruit = null;
        });
    }
  }
}
