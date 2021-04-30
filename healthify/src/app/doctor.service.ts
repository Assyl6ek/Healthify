import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  addDoctor(doctor: any): Observable<any> {
    return this.http.post<IDoctor>(this.url + 'doctors/', doctor)
  }
  deleteDoctor(id: string): Observable<any> {
    return this.http.delete<any>(this.url + 'doctors/' + id + '/')
  }
  updateDoctor(doctor: any): Observable<any> {
    return this.http.put<IDoctor>(this.url+ 'doctors/' + doctor.id + '/', doctor)
  }
}



