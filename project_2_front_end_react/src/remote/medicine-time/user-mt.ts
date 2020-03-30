import { InternalServerError } from './../../errors/InternalServerError';
import { mTClient } from './mt-client';
import { UpdateUserDTO } from '../../dtos/UpdateUserDTO';


export async function mTGetUserById(userId:number):Promise<any> {
  try{
    let response = await mTClient.get(`/users/${userId}`)
      .catch((e)=>{throw e});
    return response.data
  }
  catch (e) {
    if(e.response.status===500){
      throw new InternalServerError();
    }
  }
}

export async function mTUpdateUser(user:UpdateUserDTO){
  try{
    let response = await mTClient.patch(`/users/${user.id}`,{user})
      .catch((e)=>{throw e});
    return response.data;
  }
  catch(e){
    if(e.response.status===500){
      throw new InternalServerError();
    }
  }
}