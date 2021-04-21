import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IDoctor } from 'src/assets/interface/doctor';
@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private url: string = "assets/data/doctors.json"
  constructor(private http: HttpClient) { }
  getDoctors(): Observable<IDoctor[]> {
    return this.http.get<IDoctor[]>(this.url)
  }
}



