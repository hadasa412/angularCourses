// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../Components/home/home.component';
import { AboutComponent } from '../Components/about/about.component';
import { AdminComponent } from '../Components/admin/admin.component';
import { CoursesComponent } from '../Components/courses/courses.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
      { path: 'admin', component: AdminComponent },
      { path: 'courses', component: CoursesComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
