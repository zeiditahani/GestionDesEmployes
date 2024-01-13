export class Employe {
    id! : number     //?attribut optionel
    fname! : string
    lname! : string
    email! : string
    salaire! : number
    experience! : number
    image! : string
  
}
export interface PageOfEmployees{
    temployee : Employe[]
    page : number
    size : number
    totalPages : number
  }
