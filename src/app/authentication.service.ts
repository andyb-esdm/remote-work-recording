import { Injectable } from '@angular/core';
// import { JwtHelper } from '@auth0/angular-jwt';

@Injectable()
export class AuthenticationService {

  constructor() { }

  isAuthenticated(): boolean {

    const token = localStorage.getItem('token');
    // return !this.jwtHelper.isTokenExpired(token);
    if (token) {
      return true;
    }
    return false;
  }

  authenticate(username: string, password: string): boolean {
    if (username === 'andyb' && password === 'password') {
      localStorage.setItem('token', 'andyb');
      return true;
    }
    return false;
  }

  getUsername(): string {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
  }
}
