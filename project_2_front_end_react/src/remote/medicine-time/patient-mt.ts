import { InternalServerError } from '../../errors/InternalServerError';
import { mTClient } from './mt-client';


export async function mTGetPatientListByDoctorId(doctorId:number):Promise<any> {
  try{
    let response = await mTClient.get(`/patients/doctors/${doctorId}`)
      .catch((e)=>{throw e});
    return response.data
  }
  catch (e) {
    console.log(e)
    if(e.status===500){
      throw new InternalServerError();
    }
    else {
      throw e;
    }
  }
}

export async function mTSaveDoctorToPatient(doctorId:number,patientId:number):Promise<any>{
  try{
    let response = await mTClient.post(`/patients/${patientId}`,{
      doctorId:doctorId
    })
    return response.data
  }
  catch(e){
    console.log(e);
    if(e.status===500){
      throw new InternalServerError();
    }
    else{
      throw e;
    }
  }
}