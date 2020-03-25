import User from "./User";
import { Doctor } from "./Doctor";

export class Patient extends User{
  doctor?:Doctor;
  //TODO fix medication List data type
  medicationList:any;
  constructor(doctor:Doctor, medicationList:any,id:number,firstName:string,lastName:string,dateOfBirth:number,phoneNumber:number,email:string,username:string,roleType:string){
    super(id,firstName,lastName,dateOfBirth,phoneNumber,email,username,roleType);
    this.doctor=doctor;
    this.medicationList=medicationList;
  }
}