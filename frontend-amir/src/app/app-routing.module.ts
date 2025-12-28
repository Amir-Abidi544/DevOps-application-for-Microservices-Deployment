import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FruitsComponent } from './fruits/fruits.component';
import { LegumesComponent } from './legumes/legumes.component';

const routes: Routes = [
  { path: 'fruits', component: FruitsComponent },
  { path: 'legumes', component: LegumesComponent },
  { path: 'fruits/edit/:id', component: FruitsComponent }, // Route pour éditer un fruit
  { path: 'legumes/edit/:id', component: LegumesComponent }, // Route pour éditer un légume
  { path: '', redirectTo: '/fruits', pathMatch: 'full' } // Redirection par défaut vers "fruits"
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
