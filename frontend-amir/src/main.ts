import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http'; // Nouvelle méthode Angular
import { AppComponent } from './app/app.component';
import { FruitsComponent } from './app/fruits/fruits.component';
import { LegumesComponent } from './app/legumes/legumes.component';
import { FruitDetailComponent } from './app/fruits/fruit-detail/fruit-detail.component';
import { LegumeDetailComponent } from './app/legumes/legume-detail/legume-detail.component';

const routes: Routes = [
  { path: 'fruits', component: FruitsComponent },
  { path: 'fruits/:id', component: FruitDetailComponent },
  { path: 'legumes', component: LegumesComponent },
  { path: 'legumes/:id', component: LegumeDetailComponent },
  { path: '', redirectTo: 'fruits', pathMatch: 'full' },
  { path: '**', redirectTo: 'fruits', pathMatch: 'full' }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()) // Nouvelle méthode Angular pour HttpClient
  ]
}).catch(err => console.error(err));
