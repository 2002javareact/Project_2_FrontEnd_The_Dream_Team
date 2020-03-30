import { InternalServerError } from "../../errors/InternalServerError";
import { mTClient } from './mt-client';
import { Dosage } from "../../models/Dosage";

export async function submiteDosageData(date:Date,medicationId:string): Promise<Dosage> {
    let dosageData = {
        date,medicationId
    }
    try {
        console.log('we are in remote');
        

        let response = await mTClient.post('/dosage', dosageData)
        console.log('we are in remote '+response);
        if(response.status === 404){
            throw new InternalServerError()
        }
        return response.data
    } catch (e) {
        if(e.status === 404){
            throw e
        } else{
            throw new InternalServerError()
        }
    }
}