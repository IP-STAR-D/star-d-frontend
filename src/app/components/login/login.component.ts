import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    if (this.authService.login(this.username, this.password)) {
      // Dacă autentificarea este reușită, redirectăm utilizatorul
      const user = this.authService.getUser();
      if (user.role === 'student') {
        this.router.navigate(['/student']);
      } else if (user.role === 'professor') {
        this.router.navigate(['/professor']);
      }
    } else {
      alert('Autentificare eșuată!');
    }
  }
}
