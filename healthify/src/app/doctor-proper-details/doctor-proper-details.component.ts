import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DoctorService } from '../doctor.service';
import { User } from '../user';
import { EnrolmentService } from '../enrolment.service';
@Component({
  selector: 'app-doctor-proper-details',
  templateUrl: './doctor-proper-details.component.html',
  styleUrls: ['./doctor-proper-details.component.css']
})
export class DoctorProperDetailsComponent implements OnInit {
  userModel = new User('', '', '', '', '', '')
  public toggle: boolean = false
  public doctor: any
  public id = this.route.snapshot.paramMap.get('doctor_id')
  constructor(private route: ActivatedRoute, private doctorService: DoctorService, private enrolment: EnrolmentService) { }
  ngOnInit(): void {
    this.doctorService.getDoctors()
      .subscribe(data => {
        this.doctor = data.find(o => o.id == this.id)
      })
  }
  onSubmit() {
    this.enrolment.enroll(this.userModel)
      .subscribe(data => console.log('success', data),
      error => console.log('error', error)
      )
  }
}
