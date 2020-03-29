import { AnyAction } from "redux";
import { ISubmiteDosageState } from ".";
import { Dosage } from "../models/Dosage";
import { submiteDosageTypes } from "../action-mappers/saveNewDosage-Action-Mapper";


const initialState:ISubmiteDosageState = {
    SubmiteDosege: new Dosage (0,new Date(0),0),
    errorMessage:''
}

export const submiteDosageReducer = (state = initialState, action:AnyAction ) =>{
    switch (action.type) {
        case submiteDosageTypes.SUBMITE_Dosage:{
            return {
                ...state,
                submiteDosage:action.payload.SubmiteDosege
            }
        }  
        case submiteDosageTypes.FAILED_TO_SUBMITE_DOSAGE:{
            return {
                ...state,
                errorMessage:'Failed to Submite The Dosage'
            }
        } 
        default:
            return state;
            
            
    }
}