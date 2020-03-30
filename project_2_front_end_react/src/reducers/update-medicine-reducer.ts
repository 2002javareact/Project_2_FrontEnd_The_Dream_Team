import { AnyAction } from 'redux';
import { IUpdateMedicineState } from '.';
import { updateMedicineTypes } from '../action-mappers/update-medicine-mapper'
import { AllMedicine } from '../models/AllMedicine';


// Initial State
const initialState:IUpdateMedicineState={
  errorMessage:"",
  updatedMedicine:new AllMedicine('','',0)

}

export const updateMedicine = (state=initialState,action:AnyAction) => {
    console.log("reducer works");
    
    switch(action.type){
    case updateMedicineTypes.SUCCESSFUL_RETRIEVAL:{
      return {
        ...state,
        updateMedicine:action.payload.updateMedicine
      }
    }
    case updateMedicineTypes.INTERNAL_SERVER:{
      return {
        ...state,
        errorMessage:"Something went wrong. Oops!"
      }
    }
    default: 
      return state
  }
  
  
  
}

