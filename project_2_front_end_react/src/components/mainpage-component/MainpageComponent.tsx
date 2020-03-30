import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { SideBarComponent } from './side-bar-component/SideBarComponent';
import { User } from '../../models/User';

interface MainpageProps {
  profile:User
}

export class MainpageComponent extends React.Component<MainpageProps,any>{
  render(){
    return(
      <Container fluid>
        <Row>
          <SideBarComponent profile={this.props.profile} />
          <Col lg={10} style={{height:"100vh"}} className="p-0">
            <Image src={"doctor-background.jpg"} fluid style={{height:'100%', overflow:'hidden'}}/>
          </Col>
        </Row>
      </Container>
    )
  }
}