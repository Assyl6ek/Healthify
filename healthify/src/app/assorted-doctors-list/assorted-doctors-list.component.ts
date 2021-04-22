import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../doctor.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-assorted-doctors-list',
  templateUrl: './assorted-doctors-list.component.html',
  styleUrls: ['./assorted-doctors-list.component.css']
})
export class AssortedDoctorsListComponent implements OnInit {
  public doctors: any = []
  title: any
  constructor(private doctorService: DoctorService, private activeRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.activeRoute.params.subscribe(routeParams => {
      let category: string
      let city: string
      if(routeParams.id == "all") category = ""; else category =  routeParams.id
      if(routeParams.id1 == "all") city = ""; else city = routeParams.id1
      if(category == "") this.title = "List of Doctors"
    this.doctorService.getDoctors()
      .subscribe(data => {
        this.doctors = data.filter(o => (o.category).toLowerCase().includes(category) && o.city.toLowerCase().includes(city))
      })
    });
  }

}
