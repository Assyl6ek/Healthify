import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../doctor.service';
import { Router } from '@angular/router';
import { IDoctor } from 'src/assets/interface/doctor';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  city: string = 'all'
  category: string = 'all'
  public doctorCategory: any
  public doctorCity: any
  public a: any
  public citySet = new Set()
  public categorySet = new Set()
  constructor(private doctorService: DoctorService, private router: Router) { }
  ngOnInit(): void {
    this.doctorService.getDoctors()
      .subscribe(data => {
        for(let i = 0; i < data.length - 1; i++){
          this.citySet.add(data[i].city.name)
        }
        this.doctorCity = Array.from(this.citySet)


        for(let i = 0; i < data.length - 1; i++){
          this.categorySet.add(data[i].category.name)
        }
        this.doctorCategory = Array.from(this.categorySet)

      })
  }

  onChangePath() {
    this.router.navigate(['doctors', this.category, this.city])
    console.log(this.category, this.city)
  }

  selectedCity(event: any) {
    this.city = event.value.toLowerCase()
  }
  selectedCategory(event: any) {
    this.category = event.value.toLowerCase()
  }
}

