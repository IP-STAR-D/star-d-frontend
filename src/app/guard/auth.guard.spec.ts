import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AuthService } from '../services/auth.service';
import { RouterTestingModule } from '@angular/router/testing';

class MockAuthService {
  getUser() {
    return { role: 'student' };  // Poți modifica rolul pentru teste
  }
}

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let authService: AuthService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],  // Importă RouterTestingModule pentru a testa routingul
      providers: [
        { provide: AuthService, useClass: MockAuthService },  // Folosește Mock pentru AuthService
      ]
    });
    guard = TestBed.inject(AuthGuard);  // Instanțiază AuthGuard
    authService = TestBed.inject(AuthService);  // Obține instanța de AuthService
    router = TestBed.inject(Router);  // Obține instanța de Router
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should redirect to login if no user is logged in', () => {
    spyOn(router, 'navigate');  // Spionează metoda navigate pentru a verifica redirecționarea
    authService.getUser = () => null;  // Simulează faptul că nu există niciun utilizator autentificat
    
    const result = guard.canActivate(null as any, null as any);
    expect(result).toBe(false);  // Verifică dacă s-a returnat false
    expect(router.navigate).toHaveBeenCalledWith(['/login']);  // Verifică dacă s-a apelat redirecționarea
  });

  it('should redirect to student route if user is a student', () => {
    spyOn(router, 'navigate');
    authService.getUser = () => ({ role: 'student' });  // Simulează un utilizator cu rolul de student
    
    const result = guard.canActivate(null as any, null as any);
    expect(result).toBe(false);
    expect(router.navigate).toHaveBeenCalledWith(['/student']);  // Verifică dacă s-a apelat redirecționarea corectă
  });

  it('should allow access if user is authenticated and has the correct role', () => {
    spyOn(router, 'navigate');
    authService.getUser = () => ({ role: 'professor' });  // Simulează un utilizator cu rolul de profesor
    
    const result = guard.canActivate(null as any, null as any);
    expect(result).toBe(true);  // Permite accesul dacă utilizatorul are rolul corect
  });
});
