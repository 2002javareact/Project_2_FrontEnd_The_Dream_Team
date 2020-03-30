import React,{Component} from 'react';
import {Medication} from '../../models/Medication';
import {User} from '../../models/User';
import {Table} from 'react-bootstrap';




interface IMedicationByIdProps {

    medicationByIdArr:Array<Medication>, 
    profile:User,
    mTGetMedicationByIdActionMapper: (patient_id:number) => void, 
    errorMessage:string
}




//Finish Tomorow 
export class MedicationByIdComponent extends Component<IMedicationByIdProps,any>{

    componentDidMount(){
        this.props.mTGetMedicationByIdActionMapper(this.props.profile.id);
        console.log('we are in mede component '+ this.props.profile.id);
        
    }

    
    i = ()=>{
      return(
        
          this.props.medicationByIdArr.map((med) =>
<tr>
<td>{this.props.profile.firstName} {this.props.profile.lastName}</td>





<td>{med.doctor_note}</td>
<td>{med.start_date}</td>

</tr>
          


      )
      )
    }

    render(){
        return (


            <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Patient Name</th>
      <th>Medication Name</th>
      <th>Doctors Note</th>
      <th>Medication Start Date </th>
      <th>Medication End Date</th>

    </tr>
  </thead>
  <tbody>
  {this.i}
   </tbody>
        
</Table>



        )
    }


}