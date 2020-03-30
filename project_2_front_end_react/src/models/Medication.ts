//import { Patient } from "./Patient";
 export class Medication {

   medication_id:number;
   doctor_note:string;
   start_date:string;
   end_date:string;
   medicine_id:number;
   patient_id:number;

   constructor(medication_id:number, doctor_note:string, start_date:string, end_date:string, medicine_id:number, patient_id:number){
       
       this.medication_id = medication_id;
       this.doctor_note = doctor_note;
       this.start_date = start_date;
       this.end_date = end_date;
       this.medicine_id = medication_id;
       this.patient_id = patient_id;
   }

    



 }