import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { register } from 'module';
import { provideHttpClient } from '@angular/common/http';
// import { RegisterComponent } from "../Components/register/register.component";
import { LoginComponent } from '../Components/login/login.component';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-root',
  
  imports: [RouterOutlet, LoginComponent,RegisterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-proj';
}
