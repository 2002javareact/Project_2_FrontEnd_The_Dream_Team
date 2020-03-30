import React, { SyntheticEvent } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { mTUpdateUser } from '../../../remote/medicine-time/user-mt';
import { User } from '../../../models/User';
import { Redirect } from 'react-router';
import { UpdateUserDTO } from '../../../dtos/UpdateUserDTO';

interface IUserFormProps {
  user:User
}

interface IUserFormState {
  password:string,
  password2:string,
  firstName:string,
  lastName:string,
  dateOfBirth:string,
  phoneNumber:number,
  email:string,
  isSuccessful:boolean,
  errorMessage:string
}

export class UserFormComponent extends React.Component<IUserFormProps,IUserFormState>{
  constructor(props:any){
    super(props);
    this.state = {
      password:'',
      password2:'',
      firstName:'',
      lastName:'',
      email:'',
      isSuccessful:false,
      errorMessage:'',
      phoneNumber:NaN,
      dateOfBirth:''
    }
    this.handlerPassword=this.handlerPassword.bind(this);
    this.handlerPassword2=this.handlerPassword2.bind(this);
    this.handlerFirstName=this.handlerFirstName.bind(this);
    this.handlerLastName=this.handlerLastName.bind(this);
    this.handlerEmail=this.handlerEmail.bind(this);
    this.submitUpdate=this.submitUpdate.bind(this);
    this.handlerPhoneNumber=this.handlerPhoneNumber.bind(this);
    this.handlerDateOfBirth=this.handlerDateOfBirth.bind(this);
  }
  handlerPassword(e:any){this.setState({password:e.target.value})}
  handlerPassword2(e:any){this.setState({password2:e.target.value})}
  handlerFirstName(e:any){this.setState({firstName:e.target.value})}
  handlerLastName(e:any){this.setState({lastName:e.target.value})}
  handlerEmail(e:any){this.setState({email:e.target.value})}
  handlerPhoneNumber(e:any){this.setState({phoneNumber:e.target.value})}
  handlerDateOfBirth(e:any){this.setState({dateOfBirth:e.target.value})}
  async submitUpdate(e:SyntheticEvent){
    e.preventDefault();
    if(this.state.password&&this.state.password!==this.state.password2){
      this.setState({errorMessage:"Password and Confirmed Password are not the same."},()=>{
        setTimeout(()=>{
          this.setState({errorMessage:''})
        },5000)
      })
    }
    else{
      try{
        await mTUpdateUser(new UpdateUserDTO(
          this.props.user.id,
          this.state.firstName,
          this.state.lastName,
          this.state.dateOfBirth,
          this.state.phoneNumber,
          this.state.email,
          this.state.password));
        this.setState({isSuccessful:true});
      }
      catch(e){    
        this.setState({errorMessage:e},()=>{
          setTimeout(()=>{
            this.setState({errorMessage:''})
          },5000)
        })
      }
    }
  }
  render(){
    return(    
      <Form onSubmit={(e:SyntheticEvent)=>this.submitUpdate(e)}>
        {this.state.isSuccessful && <Redirect to={{pathname:"/users",state:{isUpdate:true}}}/> }
        {this.state.errorMessage && <Alert variant='danger'>{this.state.errorMessage}</Alert>}
        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onChange={this.handlerPassword} type="password" placeholder="password" defaultValue={this.state.password}/>
        </Form.Group>
        <Form.Group controlId="formPassword2">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control onChange={this.handlerPassword2} type="password" placeholder="confirm password" defaultValue={this.state.password2}/>
        </Form.Group>
        <Form.Group controlId="formFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control onChange={this.handlerFirstName} type="text" placeholder="First Name" defaultValue={this.state.firstName}/>
        </Form.Group>
        <Form.Group controlId="formLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control onChange={this.handlerLastName} type="text" placeholder="Last Name" defaultValue={this.state.lastName}/>
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control onChange={this.handlerEmail} type="email" placeholder="Email@email.com" defaultValue={this.state.email}/>
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    )
  }
}