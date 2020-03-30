export class UpdateUserDTO {
  id:number;
  firstName?:string;
  lastName?:string;
  dateOfBirth?:string;
  phoneNumber?:number;
  email?:string;
  password?:string;
  constructor(id:number,firstName:string,lastName:string,dateOfBirth:string,phoneNumber:number,email:string, password:string){
    this.id=id;
    this.firstName=firstName;
    this.lastName=lastName;
    this.dateOfBirth=dateOfBirth;
    this.phoneNumber=phoneNumber;
    this.email=email;
    this.password=password;
  }
}