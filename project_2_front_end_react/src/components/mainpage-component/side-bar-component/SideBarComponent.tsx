import React from 'react';
import { Col, ListGroup } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { User } from '../../../models/User';

interface SideBarProps {
  profile:User
}

export class SideBarComponent extends React.PureComponent<SideBarProps,any>{
  render(){
    return(
      <Col lg={2} className="p-0">
        <ListGroup className="w-100" >
          {this.props.profile.roleType==='Admin'&& 
            <NavLink
              to="/doctor-list"
              className="p-3">Doctor List Page</NavLink>
          }
          {this.props.profile.roleType==='Doctor'||this.props.profile.roleType==='Admin'&& 
            <NavLink
              to="/patient-list"
              className="p-3">Patient List Page</NavLink>
          }
          {this.props.profile.roleType==='Patient'&&
            <NavLink
              to="/medicine-list"
              className="p-3">Medicine List Page</NavLink>
          }
            <NavLink
              to="/medication-list"
              className="p-3">Medication List Page</NavLink>
        </ListGroup>
      </Col>
    )
  }
}