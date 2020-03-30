import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { SideBarComponent } from './side-bar-component/SideBarComponent';
import { User } from '../../models/User';
import { Dosage } from '../../models/Dosage';

interface MainpageProps {
  profile:User
}

interface MainpageState {
  dosageList:Array<Dosage>
}

export class MainpageComponent extends React.Component<MainpageProps,MainpageState>{
  constructor(props:any){
    super(props);
    this.state = {
      dosageList: []
    }
  }
  componentDidMount(){
    // if(this.props.profile.roleType==="Patient"){
    //   const dosageList = m
    // }
  }
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