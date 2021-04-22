import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import {AssortedDoctorsListComponent} from './assorted-doctors-list/assorted-doctors-list.component'

const routes: Routes = [
  {path: "", redirectTo: "/main", pathMatch: "full"},
  {path: "main", component: MainComponent},
  {path: "doctors/:id/:id1", component: AssortedDoctorsListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
