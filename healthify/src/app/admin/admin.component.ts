import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../doctor.service';@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public doctors: any
  public doctor: any
  edit: boolean = false
  adminModel  =  {
    id: 0,
    name: '',
    image: '',
    speciality: '',
    city: '',
    price: '',
    experience: ''
  }
  constructor(private doctorService: DoctorService) { }
  ngOnInit ( ) : void  {
    this.doctorService.getDoctors().subscribe(data => {
      this.doctors = data
    } )
  }
  onAdd() {
    if(!this.edit) this.doctorService.addDoctor(this.adminModel).subscribe()
    else this.doctorService.updateDoctor(this.adminModel).subscribe()
  }
  onDelete (id: any)  {
    this.doctorService.deleteDoctor(id).subscribe()
  }
  onEdit(id: any) {
    this.edit = true
    this.doctorService.getDoctors().subscribe(
      data => {
        this.doctor = data.find(o => o.id == id)
        this.adminModel.name = this.doctor.name
        this.adminModel.id = id
        this.adminModel.speciality = this.doctor.category.name
        this.adminModel.image = this.doctor.imageURL
        this.adminModel.city = this.doctor.city.name
        this.adminModel.experience = this.doctor.experience
        this.adminModel.price = this.doctor.price
      }
    )
  }
}
