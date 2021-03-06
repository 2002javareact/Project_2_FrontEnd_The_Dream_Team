import React, { SyntheticEvent } from 'react'
import { Redirect } from 'react-router';
import { CardDeck } from '../card-deck-component/CardDeckComponent';
import { AllMedicine } from '../../models/AllMedicine';
import { AllMedicineInfoComponent } from '../general-components/all-medicine-info-component/AllMedicineInfoComponent';
import { User } from '../../models/User';
import { Form, Button, Row, Col } from 'react-bootstrap';

interface IViewAllMedicineProps {
    updateMedicine:AllMedicine
    errorMessage:string
    updateMedicineMapper:(o:any)=>void
}


export class UpdateMedicineComponent extends React.Component<IViewAllMedicineProps,any>{

    constructor(props:any){
        super(props)
        this.state = { 
            name:'',
            number:1,
            description:'', 
            
        }
        this.updateName=this.updateName.bind(this);
        this.updateNum=this.updateNum.bind(this);
        this.updateDescription=this.updateDescription.bind(this);
        this.setMedicine=this.setMedicine.bind(this);
    }
     updateName=(e:any)=>{
        this.setState({
            name:e.currentTarget.value
        })

        }

     updateNum=(e:any)=>{
        this.setState({
            number:e.currentTarget.value
        })

        }

     updateDescription=(e:any)=>{
        this.setState({
            description:e.currentTarget.value
        })

        }

     async setMedicine (e:SyntheticEvent){
        e.preventDefault();
        let  updateMedi=  new AllMedicine(
            this.state.name,
            this.state.description,
            this.state.number
        )
        const up = await this.props.updateMedicineMapper(updateMedi);

    }

    render(){
        
        return(
            
            //forms
            <Form onSubmit={this.setMedicine}>
                <br></br>
                <Row>
                    <Col sm={6}>
                        <Form.Control type="text" placeholder="ID Number" value={this.state.number} onChange={this.updateNum} required/>
                    </Col>
                    <Col sm={6}>
                        <Form.Control type="text" placeholder={"Name"}  value={this.state.name} onChange={this.updateName} />
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col sm={12}>
                        <Form.Control type="text" placeholder="Description" as="textarea" rows="3" value={this.state.description} onChange={this.updateDescription}/>
                    </Col>
                </Row>
            <Button variant="primary" type="submit" >Submit</Button>
        </Form>
        )
    }
}