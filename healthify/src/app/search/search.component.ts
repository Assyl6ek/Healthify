import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../doctor.service';
import { Router } from '@angular/router';

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
  constructor(private doctorService: DoctorService, private router: Router) { }
  ngOnInit(): void {
    this.doctorService.getDoctors()
      .subscribe(data => {
        this.doctorCity = Array.from(new Set(data.map(a => a.city)))
        .map(city => {
          return data.find(a => a.city === city)
        })
        this.doctorCategory = Array.from(new Set(data.map(a => a.category)))
        .map(category => {
          return data.find(a => a.category === category)
        })
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

