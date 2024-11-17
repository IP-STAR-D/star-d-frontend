import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: any = null;  // Aici vom stoca datele utilizatorului

  constructor() { }

  // Simulăm autentificarea (în practică, folosești un serviciu de backend pentru a obține aceste date)
  login(username: string, password: string): boolean {
    // Exemplu simplu de autentificare:
    if (username === 'student' && password === '1234') {
      this.user = { username: 'student', role: 'student' };
      return true;
    } else if (username === 'professor' && password === '1234') {
      this.user = { username: 'professor', role: 'professor' };
      return true;
    }
    return false;
  }

  // Verifică dacă utilizatorul este autentificat
  isAuthenticated(): boolean {
    return this.user !== null;
  }

  // Returnează datele utilizatorului
  getUser() {
    return this.user;
  }

  // Deconectează utilizatorul
  logout(): void {
    this.user = null;
  }
}
