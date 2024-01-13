
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Employe } from '../models/employe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-liste.component.html',
  styleUrls: ['./employees-liste.component.css']
})
export class EmployeesListComponent implements OnInit{
  title : string = 'Liste des employés'
  temployee : Employe [] = []
  currentPage = 0
  pageSize : number =3
  totalPages : number =0
  constructor(
    private _empService : EmployeeService ,
    private router : Router 
    ){}
  ngOnInit(): void {
    console.log(this.currentPage)
    this._empService.getEmployee().subscribe(data =>{
      this.temployee = data;
      this._empService.nbEmployee=data.length
    } )
  }
  public getOnePageOfEmployee(page : number) {
    this.currentPage=page
    this._empService.getEmployeeByPage(page,this.pageSize).subscribe(data => {
      this.temployee = data.temployee;
      this.totalPages=data.totalPages
      console.log(data)
    },
    error => console.log(error));
  }
  delete(id : number){
    console.log(id) //pour verifier l id
    let response = confirm("Voulez vous vraiment supprimer ce compte ?"); //confirm():fnt js
    if(response){
      this._empService.deleteEmployee(id).subscribe(
        (data)=>{
          console.log(this.temployee);
            this.temployee = this.temployee.filter(element=>
              element.id !== id) //; non!
            console.log(this.temployee);
        },
        (error)=>{
          console.log(error); //pour traiter les erreurs
        }
      )
    }
  }
  edit(id : number){
   // console.log(id)
   this.router.navigate(['edit',id]);
  }
}

