import { AllMedicine } from './../models/AllMedicine';
import { Dispatch } from 'redux';
import { getAllMedicine} from '../remote/medicine-time/view-medicine-remote';

export const loginTypes = {
  SUCCESSFUL_RETRIEVAL: "MT_SUCCESSFUL_RETRIEVAL",
  INTERNAL_SERVER: "MT_INTERNAL_SERVER_ERROR",
}

export const getAllMedicineActionMapper = () => async (dispatch:Dispatch) => {
  try {
    let allMedicine = await getAllMedicine();
    console.log(allMedicine)
    dispatch({
      type: loginTypes.SUCCESSFUL_RETRIEVAL,
      payload:{
        allMedicine
      }
    })
  }
  catch(e){
    console.log(e);
    console.log('status:' + e.status)
    if(e.status === 500) {
      {
      dispatch({
        type:loginTypes.INTERNAL_SERVER,
        payload: {
          errorMessage: "Something went wrong"
        }
      })
    }
  }
}
}
