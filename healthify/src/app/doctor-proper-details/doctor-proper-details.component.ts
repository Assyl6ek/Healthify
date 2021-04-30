import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DoctorService } from '../doctor.service';
import { User } from '../user';
import { EnrolmentService } from '../enrolment.service';
import { IEnrollment } from '../enrollment'
@Component({
  selector: 'app-doctor-proper-details',
  templateUrl: './doctor-proper-details.component.html',
  styleUrls: ['./doctor-proper-details.component.css']
})
export class DoctorProperDetailsComponent implements OnInit {
  // userModel = new User('', '', '', '', '', '', '')
  public enrollmentModel: any
  public name = '';
  public phone = '';
  public surname = '';
  public date = '';
  public toggle: boolean = false
  public doctor: any
  public id: any

  constructor(private route: ActivatedRoute, private doctorService: DoctorService, private enrolment: EnrolmentService) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('doctor_id')
    this.doctorService.getDoctors()
      .subscribe(data => {
        this.doctor = data.find(o => o.id == this.id)
      })
    this.enrollmentModel = new IEnrollment('', '', '', '', this.doctor.id)
  }
  onSubmit() {

    this.enrolment.enroll(this.name, this.phone, this.surname, this.date, this.id).subscribe(res =>{
        this.toggle = true
        this.name = '';
        this.phone = '';
        this.surname = '';
        this.date = '';
    });
  }

}
