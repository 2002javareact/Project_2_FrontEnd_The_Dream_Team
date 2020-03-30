import { InternalServerError } from './../../errors/InternalServerError';
import { mTClient } from './mt-client';
import { UpdateUserDTO } from '../../dtos/UpdateUserDTO';
import { CreateUserDTO } from '../../dtos/CreateUserDTO';


export async function mTGetUserById(userId:number):Promise<any> {
  try{
    console.log(userId +' we are in remote');
    
    let response = await mTClient.get(`/patients/${userId}`)
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

export async function mTCreateUser(user:CreateUserDTO){
  try{
    console.log(user);
    let response;
    if(user.roleType==='Admin'){
      response = await mTClient.post('/admins',
        user
      )
    }
    else if(user.roleType==='Doctor'){
      response = await mTClient.post('/doctors',
        user
      )
    }
    else if(user.roleType==='Patient'){
      response = await mTClient.post('/patients',
        user
      )
    }
    else{
      throw new InternalServerError();
    }
    return response.data;
  }
  catch(e){
    if(e.response.status===500){
      throw new InternalServerError();
    }
  }
}