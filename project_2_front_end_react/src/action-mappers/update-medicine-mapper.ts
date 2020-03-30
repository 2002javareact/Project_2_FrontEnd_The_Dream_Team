import { AllMedicine } from '../models/AllMedicine';
import { Dispatch } from 'redux';
import { updateMedicine } from '../remote/medicine-time/update-medicine-remote';

export const updateMedicineTypes = {
  SUCCESSFUL_RETRIEVAL: "MT_SUCCESSFUL_RETRIEVAL",
  INTERNAL_SERVER: "MT_INTERNAL_SERVER_ERROR",
}

export const updateMedicineMapper = (am:AllMedicine) => async (dispatch:Dispatch) => {
  console.log("im going through the mapper");
  
  try {
    let medicine = await updateMedicine(am);
    console.log(medicine)
    dispatch({
      type: updateMedicineTypes.SUCCESSFUL_RETRIEVAL,
      payload:{
        medicine
      }
    })
  }
  catch(e){
    console.log(e);
    console.log('status:' + e.status)
    if(e.status === 500) {
      {
      dispatch({
        type:updateMedicineTypes.INTERNAL_SERVER,
        payload: {
          errorMessage: "Something went wrong"
        }
      })
    }
  }
}
}
