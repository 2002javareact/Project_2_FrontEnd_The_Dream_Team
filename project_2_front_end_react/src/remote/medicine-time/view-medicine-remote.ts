import { InternalServerError } from './../../errors/InternalServerError';
import { mTClient } from './mt-client';


export async function getAllMedicine():Promise<any> {
  try{
    
    let response = await mTClient.get('/Medicine')
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