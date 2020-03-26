import React from 'react';
import { User } from "../../models/User";
import { Container, Col, Row } from 'react-bootstrap';

interface IProfileProps {
  profile:User
}

export class ProfileComponent extends React.Component<IProfileProps,any>{
  render(){
    return(
      <Container>
        <Row>
          <Col>
            <p>ID: {this.props.profile.id}</p>
            <p>Name: {this.props.profile.firstName} {this.props.profile.lastName}</p>
            <p>Date Of Birth: {this.props.profile.dateOfBirth}</p>
            <p>Email: {this.props.profile.email}</p>
            <p>Phone: {this.props.profile.phoneNumber}</p>
            <p>Role: {this.props.profile.roleType}</p>
          </Col>
        </Row>
      </Container>
    )
  }
}