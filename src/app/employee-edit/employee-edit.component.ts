import { Component, OnInit } from '@angular/core';
import { Employe } from '../models/employe';
import { EmployeeService } from '../services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit{
  employee : Employe = new Employe()
  idEmpAModifier! : number
  constructor(
  private  editService :  EmployeeService,
  private router : Router,
  private route: ActivatedRoute //classe pour extraire des info d apres une route
  ){}
  ngOnInit(): void {
    this.idEmpAModifier  = this.route.snapshot.params['id']
    console.log(this.idEmpAModifier)
    this.editService.getEmployeeById(this.idEmpAModifier).subscribe(
      (data)=>
      {
        this.employee = data
      }
    )

  }
  onSubmit(){
    this.editService.updateEmployee(this.idEmpAModifier , this.employee).subscribe(
      ()=>{
       // this.router.navigate(['/employe'])
       this.goToEmployeeList();
      }
    )
  }
 /* onSubmit(){
    this.editService.updateEmployee(this.idEmpAModifier,this.employee).subscribe(
      (data) =>{
           this.goToEmployeeList();
      },
      (error) => console.log(error)
      );
  }*/
  goToEmployeeList(){
    this.router.navigate(['/employes']);
  }
}
