import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _url: string = 'http://localhost:8000/api/'
  constructor(private http: HttpClient) { }
  login(username: string, password: string) :Observable<User> {
    return this.http.post<User>(this._url + 'login/', {username, password})
  }
  register(username: string, password: string, last_name: string, first_name: string) :Observable<User> {
    return this.http.post<User>(this._url + 'register/', {username, password, last_name, first_name})
  }
}
