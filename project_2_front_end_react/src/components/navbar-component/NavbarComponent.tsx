import { IState } from "../../reducers"
import React from 'react'
import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import {User} from "../../models/User"


interface INavbarProps {
  profile:User,
  mTLogoutActionMapper:()=>void
}

export class NavbarComponent extends React.Component<INavbarProps,any>{
  render(){
    return (
      <React.Fragment>
        {this.props.profile && this.props.profile.id!==0?(
          <Navbar bg="primary" expand="lg">
            <Navbar.Brand>
              <NavLink
              to={"/mainpage"} className="text-white">Medicine Time</NavLink>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link>                
                  <NavLink 
                  to="/mainpage"
                  activeStyle={{
                    fontWeight:"bold",
                  }}
                  className="text-white">Main</NavLink>
                </Nav.Link>
                <Nav.Link>                
                  <NavLink 
                    to="/profile"
                    activeStyle={{
                      fontWeight:"bold",
                    }}
                    className="text-white">Profile</NavLink>   
                </Nav.Link>
                {this.props.profile.roleType==="admin" &&   
                  <NavDropdown title="Options" id="basic-nav-dropdown" >
                    <NavDropdown.Item>
                      <NavLink
                        to="/doctor-list-page" className="text-dark">Doctor List</NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <NavLink
                        to="/patient-list-page" className="text-dark">Patient List</NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <NavLink
                        to="/medicine-list-page" className="text-dark">Medicine List</NavLink>
                    </NavDropdown.Item>
                  </NavDropdown>
                }
                {this.props.profile.roleType==="doctor" &&   
                  <NavDropdown title="Options" id="basic-nav-dropdown">
                    <NavDropdown.Item>
                      <NavLink
                        to="/patient-list-page" className="text-dark">Patient List</NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <NavLink
                        to="/medicine-list-page" className="text-dark">Medicine List</NavLink>
                    </NavDropdown.Item>
                  </NavDropdown>
                }
                <Nav.Link>                
                  <NavLink
                    to="/"
                    className="text-white"
                    onClick={this.props.mTLogoutActionMapper}>Logout</NavLink>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        ):(   
          <Navbar bg="primary" expand="lg">   
            <Navbar.Brand>
                <NavLink
                to={"/"} className="text-white">Medicine Time</NavLink>
            </Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link>
                <NavLink 
                  to="/" className="text-white">Home</NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink 
                  to="/login" className="text-white">Login</NavLink>
              </Nav.Link>
            </Nav>
          </Navbar>
        )}
      </React.Fragment>
    )
  }
}