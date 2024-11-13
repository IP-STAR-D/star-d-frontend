import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { StudentComponent } from './components/user/student/student.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'user/student',component:StudentComponent},
    { path: '', redirectTo: '/login', pathMatch: 'full' },  // Default redirect to login
    { path: '**', redirectTo: '/login' } // Wildcard route redirects to login
  

  ];
