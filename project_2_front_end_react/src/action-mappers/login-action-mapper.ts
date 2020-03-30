import { User } from './../models/User';
import { Dispatch } from 'redux';
import { mTLogin} from '../remote/medicine-time/login-mt';

export const loginTypes = {
  SUCCESSFUL_LOGIN: "MT_SUCCESSFUL_LOGIN",
  INVALID_CREDENTIALS: "MT_INVALID_CREDENTIALS",
  INTERNAL_SERVER: "MT_INTERNAL_SERVER_ERROR",
  RESET:"RESET",
  LOGOUT: "MT_LOGOUT"
}

export const mTLoginActionMapper = (username:string,password:string) => async (dispatch:Dispatch) => {
  try {
    let profile = await mTLogin(username,password);
    console.log(profile)
    dispatch({
      type: loginTypes.SUCCESSFUL_LOGIN,
      payload:{
        profile
      }
    })
  }
  catch(e){
    console.log(e);
    console.log('status:' + e.status)
    if(e.status === 401) {
      dispatch({
        type:loginTypes.INVALID_CREDENTIALS,
        payload:{
          errorMessage: "Invalid Credentials"
        }
      })
    }
    else{
      dispatch({
        type:loginTypes.INTERNAL_SERVER,
        payload: {
          errorMessage: "Something went wrong"
        }
      })
    }
  }
}

export const mTLogoutActionMapper = () => (dispatch:Dispatch) => {
  dispatch({
    type: loginTypes.LOGOUT,
    payload:{
      profile: new User(0,'','',new Date(0),0,'','','')
    }
  })
}

export const mTErrorActionMapper = () => (dispatch:Dispatch) => {
  dispatch({
    type: loginTypes.RESET,
    payload:{
      errorMessage:''
    }
  })
}