import React from 'react'
//import { CardText, Card, CardTitle } from 'reactstrap'
import { Button } from 'react-bootstrap'
import { AllMedicine } from '../../models/AllMedicine'

interface IUserInfoProps{
    allMedicine:AllMedicine
}

export class AllMedicineInfoComponent extends React.Component<IUserInfoProps,any>{
    render(){
        return(
            // <Card>
            //     <CardTitle style={{color:"red"}}>{this.props.allMedicine.name}</CardTitle>
            //     <CardText>{`Description: ${this.props.allMedicine.description}`}</CardText>
            //     <Button>{`Add Medicine`}</Button>
            // </Card>
            <div></div>
        )
    }
}