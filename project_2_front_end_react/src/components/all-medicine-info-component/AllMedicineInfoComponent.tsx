import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { AllMedicine } from '../../models/AllMedicine'

interface IUserInfoProps{
    allMedicine:AllMedicine
}

export class AllMedicineInfoComponent extends React.Component<IUserInfoProps,any>{
    render(){
        return(
            <Card style={{ width: '18rem' }}>
                <Card.Title style={{color:"red"}}>{this.props.allMedicine.name}</Card.Title>
                <Card.Text>{`Description: ${this.props.allMedicine.description}`}</Card.Text>
                <Card.Link /*add return value from get one Medicine*/>{`Add Medicine`}</Card.Link>
            </Card>
          
        )
    }
}