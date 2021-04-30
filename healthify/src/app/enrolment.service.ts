import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User} from './user'
import { IEnrollment } from './enrollment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EnrolmentService {
  private _url: string = 'http://localhost:8000/api/'
  constructor(private http: HttpClient) { }
  enroll(name: string, phone: string, surname: string, date: string, id: string) :Observable<IEnrollment> {
    return this.http.post<IEnrollment>(this._url + 'enroll/', {name, phone, surname, date, id})
  }
}
