import { Component, NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,


    AcceuilComponent,
      LoginComponent,
      CoursesComponent,
      RegisterComponent,
      DashboardComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{path :'home',component:AcceuilComponent},{path:'' ,redirectTo:'home',pathMatch:'full'},{path:'register',component:RegisterComponent},
  {path:'courses',component:CoursesComponent},{path:'login',component:LoginComponent},{path:'Dashboard',component:DashboardComponent}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
