import { AnyAction } from 'redux';
import { IAllMedicineState } from '.';
import { allMedicineTypes } from '../action-mappers/all-medicine-mapper'
import { AllMedicine } from '../models/AllMedicine';


// Initial State
const initialState:IAllMedicineState={
  allMedicine:[],
  errorMessage:"",
  medicine:new AllMedicine('','',0)

}

export const allMedicineReducer = (state=initialState,action:AnyAction) => {
  switch(action.type){
    case allMedicineTypes.SUCCESSFUL_RETRIEVAL:{
      return {
        ...state,
        allMedicine:action.payload.allMedicine
      }
    }
    case allMedicineTypes.INTERNAL_SERVER:{
      return {
        ...state,
        errorMessage:"Something went wrong. Oops!"
      }
    }
    default: 
      return state
  }
  
}

