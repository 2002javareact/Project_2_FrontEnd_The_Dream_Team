import { combineReducers } from 'redux';
import { AllMedicine } from '../models/AllMedicine';
import { User } from '../models/User';
import { loginReducer } from './login-reducer';

export interface ILoginState{
  profile:User
  token:string
  errorMessage:string
}
export interface IAllMedicineState{
  currentMedicine:AllMedicine
}
export interface IState{
  login: ILoginState
  // @Taco I couldnt find ur medicine reducer so i commented this out
  //medicine:IAllMedicineState
}

export const state = combineReducers<IState>({
  login:loginReducer
})