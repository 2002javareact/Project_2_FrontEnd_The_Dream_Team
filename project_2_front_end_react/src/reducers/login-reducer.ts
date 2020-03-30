import { loginTypes } from './../action-mappers/login-action-mapper';
import { AnyAction } from 'redux';
import { ILoginState } from '.';
import { User } from '../models/User';


// Initial State
const initialState:ILoginState={
  profile: new User(0,'','',new Date(0),0,'','',''),
  token: "",
  errorMessage:""
}

export const loginReducer = (state=initialState,action:AnyAction) => {
  switch(action.type){
    case loginTypes.SUCCESSFUL_LOGIN:{
      return {
        ...state,
        profile:action.payload.profile,
        token:action.payload.token
      }
    }
    case loginTypes.INVALID_CREDENTIALS:{
      return {
        ...state,
        errorMessage:"Username or Password Incorrect"
      }
    }
    case loginTypes.INTERNAL_SERVER:{
      return {
        ...state,
        errorMessage:"Something went wrong. Oops!"
      }
    }
    case loginTypes.RESET: {
      return {
        ...state,
        errorMessage:''
      }
    }
    case loginTypes.LOGOUT:{
      console.log('logging out')
      return {
        ...state,
        profile:action.payload.profile,
        token:action.payload.token
      }
    }
    default: 
      return state
  }
}