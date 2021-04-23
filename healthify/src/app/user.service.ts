import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _url: string = 'http://localhost:8000/'
  constructor(private http: HttpClient) { }
  login(user: User) :Observable<User> {
    return this.http.post<User>(this._url + 'login', user)
  }
  register(user: User) :Observable<User> {
    return this.http.post<User>(this._url + 'register', user)
  }
}
