import { InternalServerError } from '../../errors/InternalServerError';
import { mTClient } from './mt-client';


export async function mTGetMedicationById(patient_Id:number):Promise<any> {

    
    try{
    let response = await mTClient.get('/medication/'+ 1)
    .catch((e) => {     
      throw e
    });
    console.log(response);
    
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