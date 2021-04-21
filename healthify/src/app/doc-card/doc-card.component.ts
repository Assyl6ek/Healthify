import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doc-card',
  templateUrl: './doc-card.component.html',
  styleUrls: ['./doc-card.component.css']
})
export class DocCardComponent implements OnInit {
@Input() doctor: any
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  openDoc(id: any) {
    this.router.navigate(['doctor-details/' + id])
  }
}
