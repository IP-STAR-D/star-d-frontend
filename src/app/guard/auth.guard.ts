import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
    const user = this.authService.getUser();
    if (user) {
      if (user.role === 'student') {
        this.router.navigate(['/student']); 
        return false;
      } else if (user.role === 'professor') {
        this.router.navigate(['/professor']);  
        return false;
      }
    } else {
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}
