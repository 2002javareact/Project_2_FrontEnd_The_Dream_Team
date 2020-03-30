import React, { SyntheticEvent } from 'react'
//import { Container, Form, Button, Col, Row, Alert } from 'react-bootstrap'
import { Redirect } from 'react-router'
import {User} from '../../models/User'
import '../../assets/stylesheet.css'
interface ILoginProps {
  errorMessage:string
  profile:User
  mTLoginActionMapper: (u:string,p:string) => void
  mTErrorActionMapper: () => void
}

interface ILoginState {
  username:string
  password:string
}

export class LoginComponent extends React.Component<ILoginProps,ILoginState> {
  constructor(props:any){
    super(props)
    this.state={
      username:'',
      password:''
    }
    this.submitLogin = this.submitLogin.bind(this);
    this.handlerUsername = this.handlerUsername.bind(this);
    this.handlerPassword = this.handlerPassword.bind(this);
  }
  submitLogin(e:SyntheticEvent){
    e.preventDefault();
    this.props.mTLoginActionMapper(this.state.username,this.state.password);
    this.setState({password:''})
  }
  handlerUsername(e:any){ 
    this.setState({username:e.currentTarget.value})
  }
  handlerPassword(e:any){
    this.setState({password:e.currentTarget.value})
  }
  render(){
    if(this.props.errorMessage){
      setTimeout(this.props.mTErrorActionMapper,5000);
    }
    return(
      this.props.profile && this.props.profile.id!==0?(
        <Redirect to="/mainpage" />
       ):(
      //   <Container className="p-5">

      //     {this.props.errorMessage && <Alert variant='danger'>{this.props.errorMessage}</Alert>}
      //     <Row>
      //       <Col>
      //         <Form onSubmit={this.submitLogin}>
      //           <Form.Group controlId="formUsername">
      //             <Form.Label>Username</Form.Label>
      //             <Form.Control onChange={this.handlerUsername} type="text" value={this.state.username} placeholder="Enter Username"/>
      //             <Form.Text className="text-muted">
      //             </Form.Text>
      //           </Form.Group>
      //           <Form.Group controlId="formPassword">
      //             <Form.Label>Password</Form.Label>
      //             <Form.Control onChange={this.handlerPassword} type="password" value={this.state.password} placeholder="Password" />
      //           </Form.Group>
      //           <Button variant="primary" type="submit">
      //             Submit
      //           </Button>
      //         </Form>
      //       </Col>
      //     </Row>


          <form className="login" onSubmit={this.submitLogin}>
          <input onChange={this.handlerUsername} type="text" value={this.state.username} placeholder="Username"/>
          <input type="password" onChange={this.handlerPassword} value={this.state.password} placeholder="Password" />
          <p>Forgot your password?</p>
          <button type="submit">
            Login 
          </button>
        </form>
      
      


        // </Container>
      )
    )
  }
}