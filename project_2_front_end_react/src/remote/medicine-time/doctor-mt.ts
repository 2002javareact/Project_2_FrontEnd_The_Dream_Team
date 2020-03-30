import { InternalServerError } from '../../errors/InternalServerError';
import { mTClient } from './mt-client';


export async function mTGetDoctorList():Promise<any> {
  try{
    let response = await mTClient.get('/doctors')
      .catch((e)=>{throw e});
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