import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Employe } from '../models/employe';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit { 
  employee : Employe = new Employe(); 
  //il faut declarer un variable de type this class pour l injecter dans le service
  constructor( 
    private _formService : EmployeeService,
    private router : Router
    ){} 
    ngOnInit(): void {
      this.employee.id = this.generateRandomIntegerInRange(20, 30);
    }
  ajouter() 
  {
    this._formService.createEmployee(this.employee ).subscribe(
        data =>this.router.navigate(["/employe"])//apres faire creation d un employer tourner vers la liste des employees
    );
    this.employee = new Employe();
  }
    // Generate a random number between 2 and 10, including both 2 and 10
    private generateRandomIntegerInRange(min: number, max: number): number {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

}

