import React from 'react';
import { Table } from 'react-bootstrap';
import { Dosage } from '../../../models/Dosage';
//import Medication from '../../../models/Me'

interface IPatientDosageProps {
  dosageList:Array<Dosage> //Array<Medication>
}

export class PatientDosageComponent extends React.Component<IPatientDosageProps,any>{
  render(){
    const date = new Date();
    return(
      <Table striped bordered hover>
        <thead>
          <tr>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.props.dosageList.filter((dose)=>dose.date.getDate()===date.getDate()).map((el)=>
            <tr>
              <td>{el.medecation_id}</td>
            </tr>
          )}
          {this.props.dosageList.length===0 &&
            <tr>
              <td>User does not have any information</td>
            </tr>
          }
        </tbody>
      </Table>
    )
  }
}