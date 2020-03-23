import { IState } from "../../reducers"
import React from 'react'
import { Navbar } from "react-bootstrap"
import { NavLink } from "react-router-dom"


interface INavbarProps {
  // profile:User
}

export class NavbarComponent extends React.Component<INavbarProps,any>{
  render(){
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand><NavLink
          to={"/homepage"}></NavLink>Medicine Time</Navbar.Brand>
      </Navbar>
    )
  }
}