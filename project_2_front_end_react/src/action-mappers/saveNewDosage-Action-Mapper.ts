import { Dispatch } from "redux";
import { submiteDosageData } from "../remote/medicine-time/saveNewDosage-Remote";


export const submiteDosageTypes = {
    SUBMITE_Dosage: 'DOSAGE_SUBMITE_DOSAGE',
    FAILED_TO_SUBMITE_DOSAGE:'DOSAGE_FAILE_TO_SUBMITE_DOSAGE'
}


export const submiteDosageActionMapper = ( date:Date,medicationId:string) => async  (dispatch:Dispatch) => {
    try {
        let submiteDosage = await submiteDosageData(date,medicationId)
        dispatch({
          type:  submiteDosageTypes.SUBMITE_Dosage,
          payload:{
            submiteDosage
          }
        })
    }catch(e){
        console.log('error in action mapper'+e);
       
            dispatch({
                type:submiteDosageTypes.FAILED_TO_SUBMITE_DOSAGE,
            })
        }
    }