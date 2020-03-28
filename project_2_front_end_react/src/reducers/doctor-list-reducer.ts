import { AnyAction } from 'redux';
import { doctorListTypes } from '../action-mappers/doctor-list-action.mapper';
import { IDoctorListState } from '.';


// Initial State
const initialState:IDoctorListState={
  doctorList:[],
  errorMessage:""
}

export const doctorListReducer = (state=initialState,action:AnyAction) => {
  switch(action.type){
    case doctorListTypes.SUCCESSFUL:{
      return {
        ...state,
        doctorList:action.payload.doctorList
      }
    }
    case doctorListTypes.INTERNAL_SERVER:{
      return {
        ...state,
        errorMessage:"Something went wrong. Oops!"
      }
    }
    default: 
      return state
  }
}