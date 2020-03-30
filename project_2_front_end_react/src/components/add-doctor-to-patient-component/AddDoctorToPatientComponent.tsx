import React, { SyntheticEvent } from 'react';
import { SideBarComponent } from '../mainpage-component/side-bar-component/SideBarComponent';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import { Patient } from '../../models/Patient';
import { Doctor } from '../../models/Doctor';
import { mTSaveDoctorToPatient } from '../../remote/medicine-time/patient-mt';
import { User } from '../../models/User';

interface AddDoctorToPatientProps{
  location:any,
  profile:User
}

interface AddDoctorToPatientState{
  doctorList:Array<Doctor>,
  isPatientSuccess:boolean
}

export class AddDoctorToPatientComponent extends React.Component<any,AddDoctorToPatientState>{
  constructor(props:any){
    super(props);
    this.state = {
      doctorList: [],
      isPatientSuccess: false
    }
  }
  async saveDoctorToPatient(e:any,doctorId:number){
    e.preventDefault();
    const response = mTSaveDoctorToPatient(doctorId,this.props.patient.id);
    if(response){
      this.setState({
        isPatientSuccess: true
      })
    }
  }
  render(){
    return(
      <Container>
        <Row>
          <SideBarComponent profile={this.props.profile}/>
          <Col lg={10} className="p-0">
            <Container>
              <Row>
                <Col>
                  <Table>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Contact</th>
                        <th>{}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.doctorList && this.state.doctorList.length !==0?(
                        this.state.doctorList.map((el:Doctor)=>
                          <tr>
                            <td>{el.id}</td>
                            <td>{el.firstName} {el.lastName}</td>
                            <td>{el.email + '\n' + el.phoneNumber}</td>
                            {!this.props.patient.doctor || this.props.patient.doctor.id!== el.id?(
                              <td>
                                <Button onClick={(e:SyntheticEvent)=>this.saveDoctorToPatient(e,el.id)}>Remove as Current Doctor</Button>
                              </td>
                            ):(
                              <td>
                                <Button onClick={(e:SyntheticEvent)=>this.saveDoctorToPatient(e,el.id)}>Add/Replace Doctor</Button>
                              </td>
                            )}
                          </tr>
                        )
                      ):(
                        <tr>
                          <td colSpan={5}>Cannot find any doctors</td>
                        </tr>
                      )}
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>

      </Container>
    )
  }
}