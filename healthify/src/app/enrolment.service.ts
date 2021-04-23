import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User} from './user'
@Injectable({
  providedIn: 'root'
})
export class EnrolmentService {
  public _url = ''
  constructor(private http: HttpClient) { }
  enroll(user: User) {
    this.http.post<any>(this._url, user)
  }
}
