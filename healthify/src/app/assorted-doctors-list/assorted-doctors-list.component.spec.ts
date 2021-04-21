import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssortedDoctorsListComponent } from './assorted-doctors-list.component';

describe('AssortedDoctorsListComponent', () => {
  let component: AssortedDoctorsListComponent;
  let fixture: ComponentFixture<AssortedDoctorsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssortedDoctorsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssortedDoctorsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
