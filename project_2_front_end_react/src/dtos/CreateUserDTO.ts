export class CreateUserDTO {
    id:number;
    firstName:string;
    lastName:string;
    dateOfBirth:Date;
    phoneNumber:number;
    email:string;
    username:string;
    password:string;
    roleType:string;
    constructor(id:number,firstName:string,lastName:string,dateOfBirth:Date,phoneNumber:number,email:string,username:string,password:string, roleType:string){
      this.id=id;
      this.firstName=firstName;
      this.lastName=lastName;
      this.dateOfBirth=dateOfBirth;
      this.phoneNumber=phoneNumber;
      this.email=email;
      this.username=username;
      this.password=password;
      this.roleType=roleType;
    }
  }