import React from 'react';
import { Col, ListGroup } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export class SideBarComponent extends React.PureComponent{
  render(){
    return(
      <Col lg={2} style={{height:"100vh"}} className="p-0">
        <ListGroup className="w-100 mh-100" style={{height:"100vh"}}>
          <NavLink
            to="/doctor-list-page"
            className="p-3">Doctor List Page</NavLink>
          <NavLink
            to="/patient-list-page"
            className="p-3">Patient List Page</NavLink>
          <NavLink
            to="/medicine-list-page"
            className="p-3">Medicine List Page</NavLink>
        </ListGroup>
      </Col>
    )
  }
}