import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient, private cookie: CookieService, private router: Router) {}

  login(email: string, password: string) {
    return this.http.post<any>('/api/login', { email, password }).pipe(
      tap(res => {
        this.cookie.set('token', res.token);
        this.cookie.set('email', res.user.email);
      })
    );
  }

  logout() {
    this.cookie.deleteAll();
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return this.cookie.check('token');
  }

  getUserEmail(): string {
    return this.cookie.get('email');
  }
}