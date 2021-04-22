import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import {AssortedDoctorsListComponent} from './assorted-doctors-list/assorted-doctors-list.component';
import { DoctorProperDetailsComponent } from './doctor-proper-details/doctor-proper-details.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: "main", component: MainComponent},
  {path: "doctors/:id/:id1", component: AssortedDoctorsListComponent},
  {path: "doctor-details/:doctor_id", component: DoctorProperDetailsComponent},
  {path: "", redirectTo: "/main", pathMatch: "full"},
  {path: "admin", component: AdminComponent},
  {path: "login", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
