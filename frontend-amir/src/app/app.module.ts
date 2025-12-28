import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FruitsComponent } from './fruits/fruits.component';
import { LegumesComponent } from './legumes/legumes.component';
import { FormsModule } from '@angular/forms';  
import { CommonModule } from '@angular/common';  
import { RouterModule, Routes } from '@angular/router';  // ✅ Ajout de RouterModule

// Définition des routes
const routes: Routes = [
  { path: 'fruits', component: FruitsComponent },
  { path: 'legumes', component: LegumesComponent },
  { path: '', redirectTo: '/fruits', pathMatch: 'full' } // Redirection par défaut
];

@NgModule({
  declarations: [
    AppComponent,
    FruitsComponent,
    LegumesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot(routes)  // ✅ Ajout du routing ici
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
