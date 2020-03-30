import React,{Component} from 'react';
import {Medication} from '../../models/Medication';
import {User} from '../../models/User';
import {Table} from 'react-bootstrap';




interface IMedicationByIdProps {

    medicationByIdArr:Medication[], 
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
  {this.props.medicationByIdArr && this.props.medicationByIdArr.length !==0?(
                        this.props.medicationByIdArr.map((med) =>
    <tr>
        <td>{this.props.profile.firstName} {this.props.profile.lastName}</td>
      {med.medicine_id === 1 &&
        <td>Mometasone Furoate(Elocon)</td>
      }
      {med.medicine_id === 2 &&
        <td>Ruxolitinib(Jakafi)</td>
      }
       {med.medicine_id === 3 &&
        <td>Ofloxacin(Floxin)</td>
      }
         {med.medicine_id === 4 &&
        <td>Pancrelipase(Ultrase)</td>
      }
        {med.medicine_id === 5 &&
        <td>Acetaminophen(Tylenol)</td>
      }
      
      
      
      
    <td>{med.doctor_note}</td>
    <td>{med.start_date}</td>
    
    </tr>
                        )
  ):(
    <tr>Connot find medication</tr>
 
  )}
   </tbody>
</Table>


        )
    }


}