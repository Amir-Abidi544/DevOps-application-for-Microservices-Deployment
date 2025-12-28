import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LegumeService, Legume } from '../services/legume.service';

@Component({
  selector: 'app-legumes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './legumes.component.html',
  styleUrls: ['./legumes.component.css']
})
export class LegumesComponent implements OnInit {
  legumes: Legume[] = [];
  newLegume: string = '';
  editingLegume: Legume | null = null;

  constructor(private legumeService: LegumeService) {}

  ngOnInit(): void {
    this.getLegumes();
  }

  getLegumes(): void {
    this.legumeService.getLegumes().subscribe(
      data => {
        this.legumes = data;
      },
      error => {
        console.error("Erreur lors de la récupération des légumes :", error);
      }
    );
  }

  addLegume(): void {
    if (this.newLegume.trim() !== '') {
      const newLegumeObj: Omit<Legume, 'id'> = { name: this.newLegume }; // Suppression de l'ID
      this.legumeService.addLegume(newLegumeObj).subscribe(
        addedLegume => {
          this.legumes.push(addedLegume);
          this.newLegume = '';
        },
        error => {
          console.error("Erreur lors de l'ajout du légume :", error);
        }
      );
    }
  }

  deleteLegume(id: number): void {
    this.legumeService.deleteLegume(id).subscribe(
      () => {
        this.legumes = this.legumes.filter(legume => legume.id !== id);
      },
      error => {
        console.error("Erreur lors de la suppression du légume :", error);
      }
    );
  }

  editLegume(legume: Legume): void {
    this.editingLegume = { ...legume };
  }

  updateLegume(): void {
    if (this.editingLegume && this.editingLegume.id !== undefined) {
      this.legumeService.updateLegume(this.editingLegume.id, this.editingLegume).subscribe(
        updatedLegume => {
          const index = this.legumes.findIndex(legume => legume.id === updatedLegume.id);
          if (index !== -1) {
            this.legumes[index] = updatedLegume;
          }
          this.editingLegume = null;
        },
        error => {
          console.error("Erreur lors de la mise à jour du légume :", error);
        }
      );
    } else {
      console.error("Erreur: ID du légume indéfini.");
    }
  }
}
