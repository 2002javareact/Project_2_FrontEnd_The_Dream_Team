import { AllMedicine } from '../models/AllMedicine';
import { Dispatch } from 'redux';
import { getOneMedicine } from '../remote/medicine-time/get-one-medicine';

export const viewOneTypes = {
  SUCCESSFUL_RETRIEVAL: "MT_SUCCESSFUL_RETRIEVAL",
  INTERNAL_SERVER: "MT_INTERNAL_SERVER_ERROR",
}

export const getOneMedicineMapper = (id:number) => async (dispatch:Dispatch) => {
  try {
    let oneMedicine = await getOneMedicine(id);
    console.log(oneMedicine)
    dispatch({
      type: viewOneTypes.SUCCESSFUL_RETRIEVAL,
      payload:{
        oneMedicine
      }
    })
  }
  catch(e){
    console.log(e);
    console.log('status:' + e.status)
    if(e.status === 500) {
      {
      dispatch({
        type:viewOneTypes.INTERNAL_SERVER,
        payload: {
          errorMessage: "Something went wrong"
        }
      })
    }
  }
}
}
