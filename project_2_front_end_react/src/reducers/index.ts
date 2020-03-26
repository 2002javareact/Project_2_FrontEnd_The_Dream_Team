import { combineReducers } from 'redux';
import { User } from '../models/User';
import { loginReducer } from './login-reducer';

export interface ILoginState{
  profile:User
  token:string
  errorMessage:string
}

export interface IState{
  login:ILoginState
}

export const state = combineReducers<IState>({
  login:loginReducer
})