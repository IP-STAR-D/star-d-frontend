import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { LoginComponent } from './app/components/login/login.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';  // Import LoginComponent
import { StudentComponent } from './app/components/user/student/student.component';
import { ProfessorComponent } from './app/components/user/professor/professor.component';
import { AdminComponent } from './app/components/user/admin/admin.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },  // Configure the route for login
  {path: 'user/student',component:StudentComponent},
  {path: 'user/professor',component:ProfessorComponent},
  {path:'user/admin',component:AdminComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }  // Redirect any unknown paths to login
  
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), provideAnimationsAsync(), provideAnimationsAsync(), provideAnimationsAsync()  // Configure routing
  ]
})
.catch(err => console.error(err));
