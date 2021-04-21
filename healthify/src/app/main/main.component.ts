import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
public doctorsList: any = []
  constructor(private doctorService: DoctorService) { }

  ngOnInit(): void {
    this.doctorService.getDoctors()
      .subscribe(data => {
        this.doctorsList = data
      })
  }

}
