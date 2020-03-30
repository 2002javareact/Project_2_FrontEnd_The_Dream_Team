import { AnyAction } from 'redux';
import { IAllMedicineState } from '.';
import { viewOneTypes } from '../action-mappers/get-one-medicine-mapper'
import { AllMedicine } from '../models/AllMedicine';


// Initial State
const initialState:IAllMedicineState={
  allMedicine:[],
  errorMessage:"",
  medicine:new AllMedicine('','',0)
}

export const viewOneMedicineReducer = (state=initialState,action:AnyAction) => {
    switch(action.type){
      case viewOneTypes.SUCCESSFUL_RETRIEVAL:{
        return {
          ...state,
          medicine:action.payload.oneMedicine
        }
      }
      case viewOneTypes.INTERNAL_SERVER:{
        return {
          ...state,
          errorMessage:"Something went wrong. Oops!"
        }
      }
      default: 
        return state
    }
  }