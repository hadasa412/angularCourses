import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { register } from 'module';
import { provideHttpClient } from '@angular/common/http';
import { LoginComponent } from '../Components/login/login.component';
import { RegisterComponent } from '../Components/register/register.component';
import { NavbarComponent } from "../Components/navbar/navbar.component";
import { CoursesComponent } from "../Components/courses/courses.component";

@Component({
  selector: 'app-root',
  
  imports: [RouterOutlet, LoginComponent, RegisterComponent, NavbarComponent, CoursesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-proj';
}
