import { Injectable } from '@angular/core';
import { User } from '../app.model';
import users from './users.data';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: User | null = null;

  constructor(private router: Router) {
    const user = localStorage.getItem('user');
    if (user) {
      this.user = JSON.parse(user);
    }
  }

  login({ email, password }: { email: string; password: string }): boolean {
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      return false;
    }
    this.user = user;
    this.saveUserToLocalStorage();
    console.log(this.user);
    this.router.navigate([''], { replaceUrl: true });
    return true;
  }

  logoutUser() {
    this.user = null;
    localStorage.removeItem('user');
    this.router.navigate(['login'], { replaceUrl: true });
  }

  isUserLoggedIn(): boolean {
    return !!this.user;
  }

  isAdmin(): boolean {
    return this.user?.role === 'Admin';
  }

  getUserName(): string {
    return this.user?.name || '';
  }

  getUserId(): string {
    return this.user?.id || '';
  }

  getRole(): string | null {
    return this.user?.role || null;
  }
  
  saveUserToLocalStorage(): void {
    localStorage.setItem('user', JSON.stringify(this.user));
  }
}
