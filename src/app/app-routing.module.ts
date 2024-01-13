import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PspaceComponent } from './pspace/pspace.component';
import { ContactComponent } from './contact/contact.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeesListComponent } from './employees-liste/employees-liste.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { LoginComponent } from './login/login.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
  {path: "home",component : HomeComponent},
  {path: "employe",component : EmployeesListComponent},
  {path: "pspace",component : PspaceComponent},
  {path: "contact",component : ContactComponent},
  {path: "add",component : EmployeeFormComponent},
  {path: "edit/:id",component : EmployeeEditComponent},
  {path: "login",component : LoginComponent},
  {path: "news",component : NewsComponent},
  {path: "",component : HomeComponent}, // n5alliha far8a
  {path: "**",component : HomeComponent} //** ==ay 7aja yhezni lil home
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
