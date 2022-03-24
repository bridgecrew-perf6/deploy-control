import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private user:BehaviorSubject<User> = new BehaviorSubject<User>({});
  readonly account:Observable<User> = this.user.asObservable();
  constructor() { }
}
