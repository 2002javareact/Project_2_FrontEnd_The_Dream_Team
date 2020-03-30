import { InternalServerError } from './../../errors/InternalServerError';
import { mTClient } from './mt-client';
import { AllMedicine } from '../../models/AllMedicine';

export async function getOneMedicine(id:number):Promise<any> {
  try{
    let response = await mTClient.post('/Medicine/'+id)
    return response.data
  }
  catch (e) {
    if(e.response.status===500){
      throw new InternalServerError();
    }
    else {
      throw e;
    }
  }
}