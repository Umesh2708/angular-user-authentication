import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users: any[] = [];
  currentUser: any = null;

  register(user: any) {
    this.users.push(user);
    alert('Registration Successful');
  }

  login(email: string, password: string) {
    const user = this.users.find(
      u => u.email === email && u.password === password
    );

    if (user) {
      this.currentUser = user;
      return true;
    }
    return false;
  }

  getUser() {
    return this.currentUser;
  }
}