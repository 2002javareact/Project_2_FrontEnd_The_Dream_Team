//need some fix in react-bootstrap
import React, { SyntheticEvent } from 'react'
import { Form, FormGroup,  Col,  Button, Table, InputGroup,  ButtonGroup, FormControl, Container } from 'react-bootstrap'
//import { User } from '../../../models/user'
import { Redirect } from 'react-router'
import { Medication } from '../../models/Medication'



interface ISubmiteNewMedicationProps
{
    SubmiteNewMedication:Medication
    //currentUser:User
    errorMessage:string
    submiteNewMedicationActionMapper:(dn:string,mi:number,pi:number)=>void
}


 interface ISubmiteNewMedicationState {
     doctorNotes: string 
 	medcineId: number 
     patientId: number
 	}

export class SubmiteDosageComponent extends React.Component <ISubmiteNewMedicationProps,ISubmiteNewMedicationState>
{
    
     constructor(props:any)
     {
         super(props)
         this.state = 
         {
             doctorNotes:'',
             medcineId: 0,  // primary key
 	        patientId:0,  // not null  unique
 	       
         }
     }

 submitNewMedication = async (e: SyntheticEvent) => 
 {
     console.log('we are on submite medication');
     
     e.preventDefault()
    
        this.props.submiteNewMedicationActionMapper(this.state.doctorNotes,this.state.medcineId,this.state.patientId)
     
     this.setState({    
        doctorNotes:'',
        medcineId: 0,  // primary key
        patientId:0,  // not null  unique
       
     })
 }
 updateDoctorNotes = (e: any) => {

     this.setState({
        doctorNotes: e.currentTarget.value
     })
 }
 updateMedcineId = (e: any) => {

     this.setState({
        medcineId: e.currentTarget.value
     })
 }
 updatePatientId = (e: any) => {

     this.setState({
         patientId: e.currentTarget.value
     })
 }

 render() {
     return (
        // this.props.currentUser.userId ?
         <div>



        <Form onSubmitCapture={this.submitNewMedication}>
      
  
        <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon1">Days</InputGroup.Text>
    </InputGroup.Prepend>
    <Form.Control onChange={this.updateDoctorNotes} defaultValue={this.state.doctorNotes} type="string"
      placeholder="Please Enter your notes"
      aria-label="notes"
      aria-describedby="basic-addon1"
    />
         </InputGroup>
         <br/>
         <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon1">Dosage/Day</InputGroup.Text>
    </InputGroup.Prepend>
    <Form.Control onChange={this.updateMedcineId} defaultValue={this.state.medcineId} type="number"
      placeholder="Please Enter Medicine Id?"
      aria-label="MedicineId"
      aria-describedby="basic-addon1"
    />
         </InputGroup>
         <br/>
         <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon1">medication Name</InputGroup.Text>
    </InputGroup.Prepend>
    <Form.Control onChange={this.updatePatientId} defaultValue={this.state.patientId} type="number"
      placeholder="Please Enter patient Id"
      aria-label="patientId"
      aria-describedby="patientId"
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