import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { StudentComponent } from './components/user/student/student.component';
import { AdminComponent } from './components/user/admin/admin.component';
import { ProfessorComponent } from './components/user/professor/professor.component';
import { UserComponent } from './components/user/user.component';
import { ExamsComponent } from './components/exams/exams.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'user', component: UserComponent, children: [
    { path: 'student', component: StudentComponent},
    { path: 'professor', component: ProfessorComponent},
    { path: 'admin', component: AdminComponent}
  ]},
  { path: 'exams', component: ExamsComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' },
];
