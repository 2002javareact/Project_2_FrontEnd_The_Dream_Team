import { AllMedicine } from "../../models/AllMedicine";

import React from "react";
import { Doctor } from "../../models/Doctor";

interface IAddMedicineProps {
        doctor:Doctor  //change to user since admin 
        addMedicine:AllMedicine
        errorMessage:string
        getAddMedicineActionMapper:(addMedi:AllMedicine)=>void
}


export class AddMedicineComponent extends React.Component<IAddMedicineProps,any>{
    
    constructor(props:any){
        super(props)
        this.state = { 
            name:'',
            number:0,
            description:'', 
            
        }
    }
     updateName=(e:any)=>{
        this.setState({name:e.currentTarget.value})

        }

     updateNum=(e:any)=>{
        this.setState({num:e.currentTarget.value})

        }

     updateDescription=(e:any)=>{
        this.setState({description:e.currentTarget.value})

        }


     setMedicine = () =>{

        let addMedi =  new AllMedicine(
            this.state.name,
            this.state.description,
            this.state.num
        )
        
        if(this.props.addMedicine){

        }else if(this.props.doctor /**is type of doctor? */){
            console.log('call getAll users mapper?');
            
            this.props.getAddMedicineActionMapper(addMedi)
        }else {
        }
    }
    
}