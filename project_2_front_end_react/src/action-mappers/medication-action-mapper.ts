import {Medication} from '../models/Medication';
import {Dispatch} from 'redux';
import {mTGetMedicationById } from '../remote/medicine-time/medication-by-id-remote';




export const medicationByIdTypes = {
    SUCCESSFUL: "MT_SUCCESSFUL",
  INTERNAL_SERVER: "MT_INTERNAL_SERVER_ERROR"
}


export const mTGetMedicationByIdActionMapper = (patient_id:number) => async (dispatch:Dispatch) => {
    try {
      console.log('we are in action mapper '+patient_id);
      
      let medicationByIdArr:Array<Medication> = await mTGetMedicationById(patient_id);
      dispatch({
          type: medicationByIdTypes.SUCCESSFUL,
          payload:{
              medicationByIdArr
          }
      })
    }
    catch(e){
        dispatch({
          type:medicationByIdTypes.INTERNAL_SERVER,
          payload: {
            errorMessage: "Something went wrong"
          }
        })
      }
    }
