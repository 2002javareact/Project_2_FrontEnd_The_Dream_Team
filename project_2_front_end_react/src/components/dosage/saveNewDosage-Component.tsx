
import React, { SyntheticEvent } from 'react'
import { Form, FormGroup,  Col,  Button, Table, InputGroup,  ButtonGroup, FormControl } from 'react-bootstrap'
//import { User } from '../../../models/user'
import { Redirect } from 'react-router'
import { Dosage } from '../../models/Dosage'



interface ISubmiteDosageProps
{
    SubmiteDosege:Dosage
    //currentUser:User
    errorMessage:string
    submiteDosageActionMapper:(dy:Date,mn:string)=>void
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
     e.preventDefault()
     let count = this.state.days*this.state.dosageDay
     let currentTime=new Date
     let hour =Math.round(24/this.state.dosageDay)
     for (let i = 0; i < count; i++) {
       currentTime.setHours(currentTime.getHours() + hour);
         this.props.submiteDosageActionMapper(currentTime,this.state.medicationName)
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



        <Form onSubmit={this.submitNewDosage}>
        <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon1">Days</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl onChange={this.updateDays} defaultValue={this.state.days} type="number"
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
    <FormControl onChange={this.updateDosageDay} defaultValue={this.state.dosageDay} type="number"
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
    <FormControl onChange={this.updateMedicationName} defaultValue={this.state.medicationName} type="number"
      placeholder="Please Enter The medication Name"
      aria-label="medication Name"
      aria-describedby="medicationName"
    />
         </InputGroup>
                                               
                              <br/>
                          <Button color='info'>Submite</Button>
                      </Form>
                      <p>{this.props.errorMessage}</p>
                   </div>
        // :
        
        // <Redirect to='/'/>
     )
 }
}