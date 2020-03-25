import React from 'react';
import { Container, Row, Col, ListGroup, Image } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


export class MainpageComponent extends React.Component{
  render(){
    return(
      <Container fluid>
        <Row>
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
          <Col lg={10} style={{height:"100vh"}} className="p-0">
            <Image src={"doctor-background.jpg"} fluid style={{height:'100%', overflow:'hidden'}}/>
          </Col>
        </Row>
      </Container>
    )
  }
}