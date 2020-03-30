import {User} from "./User";
import { Patient } from "./Patient";

export class Doctor extends User{
  patientList?:Patient[];
  constructor(patientList:Patient[],id:number,firstName:string,lastName:string,dateOfBirth:Date,phoneNumber:number,email:string,username:string,roleType:string){
    super(id,firstName,lastName,dateOfBirth,phoneNumber,email,username,roleType);
    this.patientList=patientList;
  }
}