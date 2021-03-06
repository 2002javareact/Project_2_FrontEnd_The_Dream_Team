import React, { SyntheticEvent } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { SideBarComponent } from '../mainpage-component/side-bar-component/SideBarComponent';
import { NavLink } from 'react-router-dom';
import { User } from '../../models/User';
import { mTCreateUser } from '../../remote/medicine-time/user-mt';
import { CreateUserDTO } from '../../dtos/CreateUserDTO';

interface CreateUserFormProps{
  profile:User
}

interface CreateUserFormState{
  firstName:string,
  lastName:string,
  dateOfBirth:Date,
  phoneNumber:number,
  email:string,
  username:string,
  roleType:string,
  password:string,
  isSuccessful:number
}

export class CreateUserFormComponent extends React.Component<CreateUserFormProps,CreateUserFormState>{
  constructor(props:any){
    super(props);
    this.state = {
      firstName:'',
      lastName:'',
      dateOfBirth:new Date(0),
      phoneNumber: 0,
      email:'',
      username:'',
      roleType:'Admin',
      password:'',
      isSuccessful:1
    }
    this.handlerFirstName=this.handlerFirstName.bind(this);
    this.handlerLastName=this.handlerLastName.bind(this);
    this.handlerDateOfBirth=this.handlerDateOfBirth.bind(this);
    this.handlerPhoneNumber=this.handlerPhoneNumber.bind(this);
    this.handlerEmail=this.handlerEmail.bind(this);
    this.handlerUsername=this.handlerUsername.bind(this);
    this.handlerPassword=this.handlerPassword.bind(this);
    this.handlerRoleType=this.handlerRoleType.bind(this);
    this.submitCreateUser=this.submitCreateUser.bind(this);
  }
  handlerFirstName(e:any){this.setState({firstName:e.target.value})}
  handlerLastName(e:any){this.setState({lastName:e.target.value})}
  handlerDateOfBirth(e:any){console.log(e.target.value); this.setState({dateOfBirth:new Date(e.target.value)})}
  handlerPhoneNumber(e:any){this.setState({phoneNumber:e.target.value})}
  handlerEmail(e:any){this.setState({email:e.target.value})}
  handlerUsername(e:any){this.setState({username:e.target.value})}
  handlerPassword(e:any){this.setState({password:e.target.value})}
  handlerRoleType(e:any){this.setState({roleType:e.target.value})}
  async submitCreateUser(e:SyntheticEvent){
    e.preventDefault();
    const user = new CreateUserDTO(
      0,this.state.firstName,this.state.lastName,this.state.dateOfBirth,this.state.phoneNumber,this.state.email,this.state.username,this.state.password,this.state.roleType
    )
    let response:User = await mTCreateUser(user)
      .catch(e=>console.log(e));
    if(response.id!==0){
      this.setState({isSuccessful:2})
    }
    else{
      this.setState({isSuccessful:0})
    }
    setTimeout(()=>{this.setState({isSuccessful:1})},5000)
  }
  render(){
    return(
      <Container fluid>
        <Row>
          <SideBarComponent profile={this.props.profile}/>
          <Col lg={10} className="p-0">
            {this.state.isSuccessful===2 &&
              <Alert type="success">Successful!</Alert>
            }
            {this.state.isSuccessful===0 &&
              <Alert type="danger">Failed!</Alert>
            }
            <Form onSubmit={this.submitCreateUser}>
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
                    <Form.Control type="date" max="2020-04-01" onChange={this.handlerDateOfBirth} placeholder="Date of Birth"/>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group controlId="phoneNumber">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="number" onChange={this.handlerPhoneNumber} placeholder="Phone Number" defaultValue={this.state.phoneNumber}/>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" onChange={this.handlerEmail} placeholder="email@aim.com" value={this.state.email}/>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" onChange={this.handlerUsername} placeholder="Username" value={this.state.username}/>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" onChange={this.handlerPassword} placeholder="password" value={this.state.password}/>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group controlId="roleType">
                    <Form.Label>Role Type</Form.Label>
                    <Form.Control as="select" onChange={this.handlerRoleType} value={this.state.roleType}>
                      <option>Admin</option>
                      <option>Doctor</option>
                      <option>Patient</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>
              <Button type="submit">Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}