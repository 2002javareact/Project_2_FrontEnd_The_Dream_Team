import { Doctor } from '../models/Doctor';
import { Dispatch } from 'redux';
import { mTGetDoctorList } from '../remote/medicine-time/doctor-mt';

export const doctorListTypes = {
  SUCCESSFUL: "MT_SUCCESSFUL",
  INTERNAL_SERVER: "MT_INTERNAL_SERVER_ERROR"
}

export const mTDoctorListActionMapper = () => async (dispatch:Dispatch) => {
  try {
    console.log('testing thunk?')
    let doctorList:Array<Doctor> = await mTGetDoctorList();
    console.log(doctorList);
    dispatch({
      type: doctorListTypes.SUCCESSFUL,
      payload:{
        doctorList
      }
    })
  }
  catch(e){
    dispatch({
      type:doctorListTypes.INTERNAL_SERVER,
      payload: {
        errorMessage: "Something went wrong"
      }
    })
  }
}