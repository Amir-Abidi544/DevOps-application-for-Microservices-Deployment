import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],  // Import RouterModule to use <router-outlet>
  template: `
    <h1>Welcome to My App</h1>
    <nav>
      <a routerLink="/fruits">Go to Fruits</a> |
      <a routerLink="/legumes">Go to Legumes</a>
    </nav>
    <router-outlet></router-outlet>  <!-- Important: This is where routed components load -->
  `
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
}
