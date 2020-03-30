import React from 'react'
import {  Card} from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { AllMedicine } from '../../../models/AllMedicine'

interface IAllMedicineInfoProps{
    allMedicine:AllMedicine
}

export class AllMedicineInfoComponent extends React.Component<IAllMedicineInfoProps,any>{
    render(){
        console.log("1");
        
        return(
            <Card>
                <h2 style={{color:"red"}}>{this.props.allMedicine.name}</h2>
                <p>{`Description: ${this.props.allMedicine.description}`}</p>
                <br></br>
                <Button>{`Add Medicine`}</Button>
            </Card>
            
        )
    }
}