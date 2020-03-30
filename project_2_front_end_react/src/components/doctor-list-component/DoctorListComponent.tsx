import React from 'react';
import { Container, Row, Col, Image, Button, Table } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { SideBarComponent } from '../mainpage-component/side-bar-component/SideBarComponent';
import { Doctor } from '../../models/Doctor';
import {User} from '../../models/User';

interface DoctorListProps {
  doctorList:Array<Doctor>,
  profile:User,
  mTDoctorListActionMapper: () => void,
  errorMessage:string
}

export class DoctorListComponent extends React.Component<DoctorListProps,any>{
  componentDidMount(){
    if(this.props.doctorList.length===0){
      this.props.mTDoctorListActionMapper();
    }
  }
  render(){
    return(
      <Container fluid>
        <Row>
          <SideBarComponent/>
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
                        <th>{}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.props.doctorList && this.props.doctorList.length !==0?(
                        this.props.doctorList.map((el)=>
                          <tr>
                            <td>{el.id}</td>
                            <td>{el.firstName} {el.lastName}</td>
                            <td>{el.email + '\n' + el.phoneNumber}</td>
                            <td><NavLink
                                to={{
                                  pathname:"/doctor",
                                  state:{doctorId:el.id}
                                  }}>View Page</NavLink></td>
                            <td><NavLink
                                to={{
                                  pathname:"/patient-list",
                                  state:{doctorId:el.id}
                                  }}>View Patient List</NavLink></td>
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