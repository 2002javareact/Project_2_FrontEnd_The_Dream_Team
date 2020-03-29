import { Dispatch } from "redux";
import { submiteDosageData } from "../remote/medicine-time/saveNewDosage-Remote";


export const submiteDosageTypes = {
    SUBMITE_Dosage: 'DOSAGE_SUBMITE_DOSAGE',
    FAILED_TO_SUBMITE_DOSAGE:'DOSAGE_FAILE_TO_SUBMITE_DOSAGE'
}


export const submiteDosageActionMapper = ( days:number,dosage:number,medicationId:string) => async  (dispatch:Dispatch) => {
    try {
        let submiteDosage
        let count = days*dosage
     let currentTime=new Date
     let hour =Math.round(24/dosage)
     console.log(`dosage = ${dosage} but days = ${days}`);
     
     for (let i = 0; i < count; i++) {//change 1 to count
       currentTime.setHours(currentTime.getHours() + hour);
       //console.log(currentTime  );
         submiteDosage = await submiteDosageData(currentTime,medicationId)
        console.log( 'we are in action mapper ' +currentTime);
     }
        
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