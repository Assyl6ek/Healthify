import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search/search.component'
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MainComponent } from './main/main.component';
import { DocCardComponent } from './doc-card/doc-card.component';
import { DoctorProperDetailsComponent } from './doctor-proper-details/doctor-proper-details.component';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core'
import {MatFormFieldModule} from '@angular/material/form-field'
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AssortedDoctorsListComponent } from './assorted-doctors-list/assorted-doctors-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    AdminComponent,
    DocCardComponent,
    DoctorProperDetailsComponent,
    LoginComponent,
    MainComponent,
    AssortedDoctorsListComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSelectModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    FormsModule,
    BrowserAnimationsModule

  ],
  providers: [
    MatDatepickerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
