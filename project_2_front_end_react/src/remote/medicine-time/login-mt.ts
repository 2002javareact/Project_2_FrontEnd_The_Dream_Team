import { InternalServerError } from './../../errors/InternalServerError';
import { mTClient } from './mt-client';
import { UserFailedToLogin } from '../../errors/UserFailedToLoginError';


export async function mTLogin(username:string,password:string):Promise<any> {
  let credentials = {
    username,
    password
  }
  try{
    let response = await mTClient.post('/login',credentials)
      .catch((e)=>{throw e});
    return response.data
  }
  catch (e) {
    if(e.response.status===500){
      throw new InternalServerError();
    }
    else {
      throw new UserFailedToLogin();
    }
  }
}