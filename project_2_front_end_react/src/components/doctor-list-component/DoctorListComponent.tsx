import React from 'react';
import { Container, Row, Col, Image, Button, Table } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { SideBarComponent } from '../mainpage-component/side-bar-component/SideBarComponent';
import { Doctor } from '../../models/Doctor';
import {User} from '../../models/User';

interface DoctorListProps {
  doctorList:Doctor[],
  profile:User
}

export class DoctorListComponent extends React.Component<DoctorListProps,any>{
  render(){
    return(
      <Container fluid>
        <Row>
          <SideBarComponent/>
          <Col lg={10} style={{height:"100vh"}} className="p-0">
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
                      {this.props.doctorList.map((el)=>
                        <tr>
                          <td>{el.id}</td>
                          <td>{el.firstName} {el.lastName}</td>
                          <td>{el.email + '\n' + el.phoneNumber}</td>
                          <td><NavLink
                              to="/doctor/:id">View Page</NavLink></td>
                          <td><NavLink
                              to="/patient-list">View Patient List</NavLink></td>
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