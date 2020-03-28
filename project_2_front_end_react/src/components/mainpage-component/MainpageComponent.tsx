import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { SideBarComponent } from './side-bar-component/SideBarComponent';


export class MainpageComponent extends React.Component{
  render(){
    return(
      <Container fluid>
        <Row>
          <SideBarComponent />
          <Col lg={10} style={{height:"100vh"}} className="p-0">
            <Image src={"doctor-background.jpg"} fluid style={{height:'100%', overflow:'hidden'}}/>
          </Col>
        </Row>
      </Container>
    )
  }
}