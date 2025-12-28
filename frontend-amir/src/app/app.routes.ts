import { Routes } from '@angular/router';
import { FruitsComponent } from './fruits/fruits.component';
import { LegumesComponent } from './legumes/legumes.component';

export const routes: Routes = [
  { path: 'fruits', component: FruitsComponent },
  { path: 'legumes', component: LegumesComponent },
  { path: '', redirectTo: '/fruits', pathMatch: 'full' }
];
