import { Component, OnInit } from '@angular/core';
import { Employe } from '../models/employe';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})  
export class HomeComponent implements OnInit{
  temployee :Employe[] = []
  constructor(
    private homeService :EmployeeService,
    private router :Router
    ){}
  ngOnInit(): void {
    this.getEmployeList()
  }
  private getEmployeList(){
    this.homeService.getEmployee().subscribe(data =>{
      console.log();
         this.temployee = data;
    })
  }
}
