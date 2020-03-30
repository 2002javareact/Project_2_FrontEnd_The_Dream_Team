import { combineReducers } from 'redux';
import { AllMedicine } from '../models/AllMedicine';
import { User } from '../models/User';
import {Medication} from '../models/Medication';
import { loginReducer } from './login-reducer';
import { Doctor } from '../models/Doctor';
import { doctorListReducer } from './doctor-list-reducer';
import {medicationByIdReducer} from './medication-list-reducer'
import { Dosage } from '../models/Dosage';
import { submiteDosageReducer } from './saveNewDosage-Reducer';
import { allMedicineReducer} from './all-medicine-reducer';
import{ updateMedicine} from './update-medicine-reducer'

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
  allMedicine:AllMedicine[]
  errorMessage:string
}

export interface IUpdateMedicineState{
  errorMessage:string
  updatedMedicine:AllMedicine
}

export interface IMedicationByIdState{
  medicationByIdArr:Medication[],
  errorMessage:string
}
export interface ISubmiteDosageState{
  SubmiteDosege:Dosage,
  errorMessage:string
}

export interface IState{
  login: ILoginState,
  doctorList: IDoctorListState,
  newDosage:ISubmiteDosageState
  medicine:IAllMedicineState
  medicationByIdArr: IMedicationByIdState
  updateMedicine:IUpdateMedicineState

}

export const state = combineReducers<IState>({
  login:loginReducer,
  doctorList:doctorListReducer,
  newDosage:submiteDosageReducer,
  medicationByIdArr:medicationByIdReducer,
  medicine:allMedicineReducer,
  updateMedicine:updateMedicine,
  //viewOneMedicine: viewOneMedicineReducer,
})