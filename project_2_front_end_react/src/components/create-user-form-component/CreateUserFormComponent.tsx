import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { SideBarComponent } from '../mainpage-component/side-bar-component/SideBarComponent';
import { NavLink } from 'react-router-dom';

interface CreateUserFormState{
  firstName:string,
  lastName:string,
  dateOfBirth:Date,
  phoneNumber:number,
  email:string,
  username:string,
  roleType:string,
  password:string
}

export class CreateUserFormComponent extends React.Component<any,CreateUserFormState>{
  constructor(props:any){
    super(props);
    this.state = {
      firstName:'',
      lastName:'',
      dateOfBirth:new Date(0),
      phoneNumber: 0,
      email:'',
      username:'',
      roleType:'',
      password:''
    }
    this.handlerFirstName=this.handlerFirstName.bind(this);
  }
  handlerFirstName(e:any){this.setState({firstName:e.target.value})}
  handlerLastName(e:any){this.setState({lastName:e.target.value})}
  handlerDateOfBirth(e:any){this.setState({dateOfBirth:e.target.value})}
  handlerPhoneNumber(e:any){this.setState({phoneNumber:e.target.value})}
  handlerEmail(e:any){this.setState({email:e.target.value})}
  handlerUsername(e:any){this.setState({username:e.target.value})}
  handlerPassword(e:any){this.setState({password:e.target.value})}
  handlerRoleType(e:any){this.setState({roleType:e.target.value})}
  render(){
    return(
      <Container fluid>
        <Row>
          <SideBarComponent/>
          <Col lg={10} className="p-0">
            <Form>
              <Row>
                <Col>
                  <Form.Group controlId="firstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control onChange={this.handlerFirstName} placeholder="First Name" value={this.state.firstName}/>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="lastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control onChange={this.handlerLastName} placeholder="Last Name" value={this.state.lastName}/>
                  </Form.Group>
                </Col>   
              </Row>
              <Row>
                <Col>
                  <Form.Group controlId="dateOfBirth">
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control type="date" onChange={this.handlerDateOfBirth} placeholder="Date of Birth" value={'YYYY-MM-dd'}/>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group controlId="phoneNumber">
                    <Form.Label>Phone Number</Form.Label>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group controlId="username">
                    <Form.Label>Username</Form.Label>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group controlId="roleType">
                    <Form.Label>Role Type</Form.Label>
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}