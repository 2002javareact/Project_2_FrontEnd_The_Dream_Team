import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Patient } from '../../models/Patient';
import { SideBarComponent } from '../mainpage-component/side-bar-component/SideBarComponent';
import { NavLink } from 'react-router-dom';
import { User } from '../../models/User';
import { mTGetUserById } from '../../remote/medicine-time/user-mt';
import { mTSaveDoctorToPatient } from '../../remote/medicine-time/patient-mt';

interface PatientProps {
  doctorId:number,
  location:any,
  profile:User
}

interface PatientState {
  patient:User
}

export class PatientComponent extends React.Component<PatientProps,PatientState>{
  constructor(props:any){
    super(props);
    this.state = {
      patient:new User(0,'','',new Date(0),0,'','','')
    }
  }
  async componentDidMount(){
    // if patient is on here action mapper get medication
    if(this.props.location.state && this.props.location.state.patientId && this.props.location.state.doctorId){
      const patient = await mTGetUserById(this.props.location.state.patientId);
      if(patient){
        this.setState({patient:patient});
      }
    }
  }
  render(){
    return(
      <Container fluid>
        <Row>
          <SideBarComponent profile={this.props.profile}/>
          {(this.props.profile.roleType==='Admin'||this.props.profile.roleType==='Doctor') && 
            <Col lg={10} className="p-0">
              <NavLink
                to={{
                  pathname:"/add-doctor-to-patient",
                  state:{
                    patient:this.props.location.state.patient
                  }
                }}>Add/Replace a Doctor to Patient</NavLink>
            {/* TODO: if medication list exist select medication where date is today */}
            </Col>
          }
          {this.props.profile.roleType==='Patient' && 
            <Col lg={10} className="p-0">
              
            </Col>  
          }
        </Row>
      </Container>
    )
  }
}