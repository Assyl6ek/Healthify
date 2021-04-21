import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorProperDetailsComponent } from './doctor-proper-details.component';

describe('DoctorProperDetailsComponent', () => {
  let component: DoctorProperDetailsComponent;
  let fixture: ComponentFixture<DoctorProperDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorProperDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorProperDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
