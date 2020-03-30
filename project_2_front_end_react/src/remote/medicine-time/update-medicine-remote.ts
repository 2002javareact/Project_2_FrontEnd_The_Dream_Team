import { InternalServerError } from './../../errors/InternalServerError';
import { mTClient } from './mt-client';
import { AllMedicine } from '../../models/AllMedicine';

export async function updateMedicine(am:AllMedicine) {
  console.log(am)
  try{
    let response = await mTClient.patch('/Medicine', {
      id:am.medicineId,
      name:am.name,
      description:am.description
    });
    return response.data;
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