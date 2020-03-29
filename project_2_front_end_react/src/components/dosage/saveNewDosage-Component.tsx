//need some fix in react-bootstrap
import React, { SyntheticEvent } from 'react'
import { Form, FormGroup,  Col,  Button, Table, InputGroup,  ButtonGroup, FormControl, Container } from 'react-bootstrap'
//import { User } from '../../../models/user'
import { Redirect } from 'react-router'
import { Dosage } from '../../models/Dosage'



interface ISubmiteDosageProps
{
    SubmiteDosege:Dosage
    //currentUser:User
    errorMessage:string
    submiteDosageActionMapper:(dy:number,dos:number,mn:string)=>void
}


 interface ISubmiteDosageState {
     days: number 
 	dosageDay: number 
 	medicationName: string  
 	}

export class SubmiteDosageComponent extends React.Component <ISubmiteDosageProps,ISubmiteDosageState>
{
    
     constructor(props:any)
     {
         super(props)
         this.state = 
         {
             days: 0,  // primary key
 	        dosageDay:0,  // not null  unique
 	        medicationName:'',  // not null
	   
         }
     }

 submitNewDosage = async (e: SyntheticEvent) => 
 {
     console.log('we are on submite');
     
     e.preventDefault()
     let count = this.state.days*this.state.dosageDay
     let currentTime=new Date
     let hour =Math.round(24/this.state.dosageDay)
     for (let i = 0; i < 1; i++) {//change 1 to count
       currentTime.setHours(currentTime.getHours() + hour);
       //console.log(currentTime  );
       
         this.props.submiteDosageActionMapper(this.state.days,this.state.dosageDay,this.state.medicationName)
     }
     this.setState({    
         days: 0,  
         dosageDay: 0, 
         medicationName:''
     })
 }
 updateDays = (e: any) => {

     this.setState({
         days: e.currentTarget.value
     })
 }
 updateMedicationName = (e: any) => {

     this.setState({
         medicationName: e.currentTarget.value
     })
 }
 updateDosageDay = (e: any) => {

     this.setState({
         dosageDay: e.currentTarget.value
     })
 }

 render() {
     return (
        // this.props.currentUser.userId ?
         <div>



        <Form onSubmitCapture={this.submitNewDosage}>
      
  
        <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon1">Days</InputGroup.Text>
    </InputGroup.Prepend>
    <Form.Control onChange={this.updateDays} defaultValue={this.state.days} type="number"
      placeholder="Please Enter How many days?"
      aria-label="How many days"
      aria-describedby="basic-addon1"
    />
         </InputGroup>
         <br/>
         <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon1">Dosage/Day</InputGroup.Text>
    </InputGroup.Prepend>
    <Form.Control onChange={this.updateDosageDay} defaultValue={this.state.dosageDay} type="number"
      placeholder="Please Enter How many Dosage per day?"
      aria-label="How many Dosage"
      aria-describedby="basic-addon1"
    />
         </InputGroup>
         <br/>
         <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon1">medication Name</InputGroup.Text>
    </InputGroup.Prepend>
    <Form.Control onChange={this.updateMedicationName} defaultValue={this.state.medicationName} type="number"
      placeholder="Please Enter The medication Name"
      aria-label="medication Name"
      aria-describedby="medicationName"
    />
         </InputGroup>
                                               
                              <br/>
                              <Button variant="primary" type="submit">
    Submit
  </Button>
                      </Form>
                      <p>{this.props.errorMessage}</p>
                   </div>
        // :
        
        // <Redirect to='/'/>
     )
 }
} 