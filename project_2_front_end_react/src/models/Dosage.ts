export class Dosage 
{
    dosage_id:number
	date: Date   
    medecation_id: number   


    constructor
        (    dosage_id: number,
            date: Date,
            medecation_id: number,  

    ) 
    {
       this.dosage_id=dosage_id
       this.date=date
       this.medecation_id=medecation_id

    }
}