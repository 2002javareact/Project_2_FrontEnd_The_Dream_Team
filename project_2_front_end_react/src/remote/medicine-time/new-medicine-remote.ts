import { InternalServerError } from './../../errors/InternalServerError';
import { mTClient } from './mt-client';
import { AllMedicine } from '../../models/AllMedicine';

export async function addNewMedicine(am:AllMedicine):Promise<any> {
  let req = {
      am
  }
  try{
    let response = await mTClient.post('/Medicine', req)
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