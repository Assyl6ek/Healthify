import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../doctor.service';
import { ActivatedRoute } from '@angular/router';
import { CATCH_STACK_VAR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-assorted-doctors-list',
  templateUrl: './assorted-doctors-list.component.html',
  styleUrls: ['./assorted-doctors-list.component.css']
})
export class AssortedDoctorsListComponent implements OnInit {
  public doctors: any = []
  title: string = "List of Doctors"
  constructor(private doctorService: DoctorService, private activeRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.activeRoute.params.subscribe(routeParams => {
      let category: string
      let city: string
      if(routeParams.id == "all" && routeParams.id1 == "all")
        {
          category = ""
          city = ""
          this.doctorService.getDoctors()
        .subscribe(data => {
          this.doctors = data
      })
        }
        else if(routeParams.id == 'all'){
          category = ""
          city = routeParams.id1
          this.doctorService.getDoctors()
          .subscribe(data => {
            this.doctors = data.filter(o => o.city.name.toLowerCase().includes(city))
          })
        }
        else if(routeParams.id1 == 'all'){
          city = ""
          category = routeParams.id
          this.doctorService.getDoctors()
          .subscribe(data => {
            this.doctors = data.filter(o => o.category.name.toLowerCase().includes(category))
          })
        }
        else {
          category = routeParams.id; city = routeParams.id1
          this.doctorService.getDoctors()
          .subscribe(data => {
            this.doctors = data.filter(o => o.category.name.toLowerCase().includes(category) && o.city.name.toLowerCase().includes(city))
          })
        }



    });
  }
}
