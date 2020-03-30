import React from 'react';
import { Container, Row, Col, Button, Table, Form, Tab, Tabs } from 'react-bootstrap';
import { Patient } from '../../models/Patient';
import { SideBarComponent } from '../mainpage-component/side-bar-component/SideBarComponent';
import { NavLink } from 'react-router-dom';
import { mTGetPatientListByDoctorId } from '../../remote/medicine-time/patient-mt'
import { User } from '../../models/User';

interface PatientListProps {
  profile:User,
  location:any
}

interface PatientListState {
  patientList:Array<Patient>,
  doctorId:number
}

export class PatientListComponent extends React.Component<PatientListProps,PatientListState>{
  constructor(props:any){
    super(props);
    this.state = {
      patientList: [],
      doctorId: 0
    }
    this.handlerDoctorId=this.handlerDoctorId.bind(this);
    this.submitDoctorId=this.submitDoctorId.bind(this);
  }
  async componentDidMount(){
    if(this.props.location.state && this.props.location.state.doctorId){
      const patientList = await mTGetPatientListByDoctorId(this.props.location.state.doctorId);
      this.setState({
        patientList: patientList
      })
    }
    if(this.props.profile.roleType==="Doctor"){
      const patientList = await mTGetPatientListByDoctorId(this.props.profile.id);
      this.setState({
        patientList: patientList
      })
    }
  }
  handlerDoctorId(e:any){
    this.setState({doctorId:e.target.value})
  }
  async submitDoctorId(e:any){
    e.preventDefault();
    const patientList = await mTGetPatientListByDoctorId(this.state.doctorId)
    this.setState({
      patientList: patientList
    })
  }
  render(){
    return(
      <Container fluid>
        <Row>
          <SideBarComponent profile={this.props.profile}/>
          <Col lg={10} className="p-0">
            <Container>
              {this.props.profile.roleType==="Admin" && 
                <Row>
                  <Col>
                  <Tabs defaultActiveKey="noDoctor" id="uncontrolled-tab-example">
                    <Tab eventKey="noDoctor" title="Patients without a Doctor" onClick={()=>this.submitDoctorId(0)}>
                    </Tab>
                    <Tab eventKey="Doctor" title="Patients with a Doctor">
                      <Form onSubmit={(e:any)=>this.submitDoctorId(e)}>
                        <Form.Group as={Row}>
                          <Form.Label column sm={2}>Doctor ID:</Form.Label>
                          <Col sm={8}>
                            <Form.Control defaultValue={this.state.doctorId} type="number" onChange={this.handlerDoctorId} />
                          </Col>
                          <Col sm={2}>
                            <Button>Search</Button>
                          </Col>
                        </Form.Group>
                      </Form>
                    </Tab>
                  </Tabs>
                  </Col>
                </Row>
              }
              <Row>
                <Col>
                  <Table>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Contact</th>
                        <th>{}</th>
                        <th>{}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.patientList && this.state.patientList.length !==0?(
                        this.state.patientList.map((el)=>
                          <tr>
                            <td>{el.id}</td>
                            <td>{el.firstName} {el.lastName}</td>
                            <td>{el.email + '\n' + el.phoneNumber}</td>
                            <td><NavLink
                                to={"/patient"}>View Patient Medicine</NavLink></td>
                            <td><NavLink
                                to="/medication-list">View Medication List</NavLink></td>
                          </tr>
                        )
                      ):(
                        <tr>
                          <td colSpan={5}>Cannot find any patients under this doctor</td>
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