import { makeAutoObservable } from 'mobx';

import { AuthService } from './../services/AuthService';

export class AuthStore {

  constructor() {
    makeAutoObservable(this, {
      authService: false
    });
    this.authenticated = !!localStorage.getItem('access_token');
    this.authService = new AuthService();
  }

  login(login, password) {
     if (this.authService.login({login, password})) {
      localStorage.setItem('access_token', 'token');
      this.authenticated = true;
      return true;
     }
     return false;
  }
}