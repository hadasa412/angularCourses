// home.component.ts
import { Component } from '@angular/core';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <h1>ברוכים הבאים לדף הבית!</h1>
    <p>תוכן הדף הבית כאן.</p>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  static routes: Routes = [
    { path: '', component: HomeComponent }
  ];
}
