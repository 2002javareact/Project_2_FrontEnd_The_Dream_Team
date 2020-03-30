import { combineReducers } from 'redux';
import { AllMedicine } from '../models/AllMedicine';
import { User } from '../models/User';
import {Medication} from '../models/Medication';
import { loginReducer } from './login-reducer';
import { Doctor } from '../models/Doctor';
import { doctorListReducer } from './doctor-list-reducer';
import {medicationByIdReducer} from './medication-list-reducer'
export interface ILoginState{
  profile:User
  token:string
  errorMessage:string
}
export interface IDoctorListState{
  doctorList:Array<Doctor>,
  errorMessage:string
}
export interface IAllMedicineState{
  currentMedicine:AllMedicine
}
export interface IMediationByIdState{
  medicationByIdArr:Array<Medication>,
  errorMessage:string
}
export interface IState{
  login: ILoginState,
  doctorList: IDoctorListState,
  // @Taco I couldnt find ur medicine reducer so i commented this out
  //medicine:IAllMedicineState
  //fair
  medicationByIdArr: IMediationByIdState
  
}

export const state = combineReducers<IState>({
  login:loginReducer,
  doctorList:doctorListReducer,
  medicationByIdArr:medicationByIdReducer
  //medicine:allMedicineReducer
})