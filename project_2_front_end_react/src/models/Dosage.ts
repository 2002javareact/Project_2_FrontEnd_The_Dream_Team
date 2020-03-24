export class Dosage 
{
    dosage_id:number
	date: Date   
    medecation_id: number   
    status_id: number
    status_type: string
    time: Date 

    constructor
        (    dosage_id: number,
            date: Date,
            medecation_id: number,  
            status_id: number,
            status_type: string,
            time: Date 
    ) 
    {
       this.dosage_id=dosage_id
       this.date=date
       this.medecation_id=medecation_id
       this.status_id=status_id
       this.status_type=status_type
       this.time=time
    }
}