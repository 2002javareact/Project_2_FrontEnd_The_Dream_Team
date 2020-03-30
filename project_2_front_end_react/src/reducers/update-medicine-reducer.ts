import { AnyAction } from 'redux';
import { IAllMedicineState } from '.';
import { updateMedicineTypes } from '../action-mappers/update-medicine-mapper'
import { AllMedicine } from '../models/AllMedicine';


// Initial State
const initialState:IAllMedicineState={
  allMedicine:[],
  errorMessage:"",
  medicine:new AllMedicine('','',0)

}

export const updateMedicine = (state=initialState,action:AnyAction) => {
    console.log("reducer works");
    
    switch(action.type){
    case updateMedicineTypes.SUCCESSFUL_RETRIEVAL:{
    console.log(action.payload.medicine);
      return {
        ...state,
        medicine:action.payload.medicine
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

