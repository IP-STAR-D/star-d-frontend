import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { StudentComponent } from './components/user/student/student.component';
import { AdminComponent } from './components/user/admin/admin.component';
import { ProfessorComponent } from './components/user/professor/professor.component';
import { UserComponent } from './components/user/user.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },  // Configure the route for login
  { path: 'user/student', component: StudentComponent},
  { path: 'user/professor', component: ProfessorComponent},
  { path: 'user/admin', component: AdminComponent},
  { path: 'user', component: UserComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },  // Ruta principală
  { path: '**', redirectTo: '/login' }, // Redirect any unknown paths to login
];
