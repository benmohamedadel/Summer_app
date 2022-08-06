import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,


    AcceuilComponent,
      LoginComponent,
      CoursesComponent,
      RegisterComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{path :'home',component:AcceuilComponent},{path:'' ,redirectTo:'home',pathMatch:'full'},{path:'register',component:RegisterComponent},
  {path:'courses',component:CoursesComponent},{path:'login',component:LoginComponent}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
