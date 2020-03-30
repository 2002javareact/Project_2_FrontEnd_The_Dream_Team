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
import { allMedicineReducer } from './all-medicine-reducer';

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
  allMedicine:AllMedicine[],
  errorMessage:string
}

export interface IMediationByIdState{
  medicationByIdArr:Array<Medication>,
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
<<<<<<< HEAD
  medicine:IAllMedicineState
=======
  // @Taco I couldnt find ur medicine reducer so i commented this out
  //medicine:IAllMedicineState
  //fair
  medicationByIdArr: IMediationByIdState
  
>>>>>>> 5b2624cff9d837ce8b660107c9ccfaccbfa4a140
}

export const state = combineReducers<IState>({
  login:loginReducer,
  doctorList:doctorListReducer,
  newDosage:submiteDosageReducer,
<<<<<<< HEAD
  medicine:allMedicineReducer
=======
  medicationByIdArr:medicationByIdReducer
  //medicine:allMedicineReducer
>>>>>>> 5b2624cff9d837ce8b660107c9ccfaccbfa4a140
})