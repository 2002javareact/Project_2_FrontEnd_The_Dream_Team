import { combineReducers } from 'redux';
import { AllMedicine } from '../models/AllMedicine';

export interface ILoginState {
  //profile:
}
export interface IAllMedicineState{
  currentMedicine:AllMedicine
}
export interface IState{
  login: ILoginState
  medicine:IAllMedicineState
}

export const state = combineReducers<IState>({
})