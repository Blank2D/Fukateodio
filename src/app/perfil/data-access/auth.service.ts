import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(this.getInitialAuthState());

  constructor(private userService: UserService) {}

  private getInitialAuthState(): boolean {
    return this.userService.estado() === '1';
  }

  get isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  login(username: string, password: string): boolean {
    if (this.userService.validateUser(username, password)) {
      this.userService.estado.set('1');
      this.loggedIn.next(true);
      return true;
    } else {
      return false;
    }
  }

  logout() {
    this.userService.estado.set('0');
    this.loggedIn.next(false);
  }
}
