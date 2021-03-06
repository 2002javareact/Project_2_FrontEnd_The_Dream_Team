import {medicationByIdTypes} from './../action-mappers/medication-action-mapper';
import { AnyAction } from 'redux';
import {IMedicationByIdState} from '.';




const initialState:IMedicationByIdState={
    medicationByIdArr: [],
    errorMessage: ''
}


export const medicationByIdReducer = (state=initialState,action:AnyAction) => {

    switch(action.type){
        case medicationByIdTypes.SUCCESSFUL:{
            return {
                ...state,
                medicationByIdArr:action.payload.medicationByIdArr
            }
        }
        case medicationByIdTypes.INTERNAL_SERVER:{
            return {
                ...state,
                errorMessage: "Something Went Wrong!"
            }
        }
        default:
            return state
    }

}
