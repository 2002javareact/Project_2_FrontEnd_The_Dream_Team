import { InternalServerError } from '../../errors/InternalServerError';
import { mTClient } from './mt-client';


export async function mTGetMedicationById(patient_Id:number):Promise<any> {

    
    try{
    let response = await mTClient.get(`/medication/${patient_Id}`)
    .catch((e) => {throw e});
    return response.data
}catch (e) {
    if(e.response.status===500){
        throw new InternalServerError();
      }
      else {
        throw e;
      }
    }
}