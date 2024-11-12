import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { LoginComponent } from './app/components/login/login.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';  // Import LoginComponent

const routes: Routes = [
  { path: 'login', component: LoginComponent },  // Configure the route for login
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }  // Redirect any unknown paths to login
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), provideAnimationsAsync()  // Configure routing
  ]
})
.catch(err => console.error(err));
