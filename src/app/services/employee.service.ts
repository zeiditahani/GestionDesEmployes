import { Injectable } from '@angular/core';
import { Employe, PageOfEmployees } from '../models/employe';
import { HttpClient } from '@angular/common/http';
import { Observable ,of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url = 'http://localhost:3000/employees';
  nbEmployee : number = 0
  temployee : Employe [] = []
  constructor(private http : HttpClient) { }
  getEmployeeByPage(page: number, size: number): Observable<PageOfEmployees> {
    let index = page * size;
    let totalPages = ~~(this.nbEmployee / size);
        if (this.nbEmployee % size !== 0) totalPages++;
        let pageOfEmployee = this.temployee.slice(index, index + size);
        return of({
          page: page,
          size: size,
          totalPages: totalPages,
          temployee: pageOfEmployee
        });
  }
  
  getEmployee(): Observable<Employe[]> {
    return this.http.get<Employe[]>(this.url);
  }
 
  createEmployee(employe : Employe) : Observable <object> {
    return this.http.post(`${this.url}` , employe);
  }

  deleteEmployee(id : number) : Observable <object>{
     return this.http.delete(`${this.url}/${id}`); //this.x == `${this.url}/${id}` certitude
  }
  getEmployeeById(id : number) : Observable <Employe>{
    return this.http.get<Employe>(`${this.url}/${id}`);
  }

  updateEmployee(id: number, employee: Employe): Observable <object> {
    return this.http.put(`${this.url}/${id}`, employee);
  }
}
