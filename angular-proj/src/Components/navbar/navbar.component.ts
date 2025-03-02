// navbar.component.ts
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav>
      <ul>
        <li><a routerLink="/home" routerLinkActive="active">דף הבית</a></li>
        <li><a routerLink="/about" routerLinkActive="active">אודות</a></li>
        <li><a routerLink="/courses" routerLinkActive="active">קורסים</a></li>
        <li><a routerLink="/admin" routerLinkActive="active">מנהל</a></li>
      </ul>
    </nav>
  `,
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {}
