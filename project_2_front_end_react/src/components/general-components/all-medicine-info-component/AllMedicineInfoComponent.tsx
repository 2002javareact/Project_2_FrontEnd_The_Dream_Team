import React from 'react'
import {  Card} from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { AllMedicine } from '../../../models/AllMedicine'

interface IAllMedicineInfoProps{
    allMedicine:AllMedicine
    getOneMedicine: (e:any)=>void
}

export class AllMedicineInfoComponent extends React.Component<IAllMedicineInfoProps,any>{
    
    render(){
        return(
            <Card style={{ width: '25rem' }}>
                <Card.Title>{this.props.allMedicine.name}</Card.Title>
                <Card.Text>{`Description: ${this.props.allMedicine.description}`}
                <br></br></Card.Text>
            <Button onClick={this.props.getOneMedicine}>{`Add Medicine`}</Button>
            <Button style={{backgroundColor:"#d21b3f"}} >{`Delete Medicine`}</Button>
            </Card>
            
        )
    }
}