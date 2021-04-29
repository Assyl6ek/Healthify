import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IDoctor } from 'src/assets/interface/doctor';
@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private url: string = "http://127.0.0.1:8000/api/"
  constructor(private http: HttpClient) { }
  getDoctors(): Observable<IDoctor[]> {
    return this.http.get<IDoctor[]>(this.url + 'doctors/')
  }
}



