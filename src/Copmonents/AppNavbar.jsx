import React, { Component } from 'react';
import {Navbar,Container,Nav,NavDropdown } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
class AppNavbar extends Component {
    render() {
        return (
            <div>
               <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-App</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      <Nav.Link> <Link to="">Home </Link></Nav.Link>
      <Nav.Link ><Link to="/responsive">Responsive</Link></Nav.Link>
        <Nav.Link ><Link to="/aboutus">About Us </Link></Nav.Link>
        <Nav.Link><Link to="/materialui">Material UI</Link></Nav.Link>
        <Nav.Link ><Link to="/footer">Footer</Link></Nav.Link>
        <Nav.Link ><Link to="/buy">Buy</Link></Nav.Link>

 
        <NavDropdown title="DropDown" id="basic-nav-dropdown">
          <NavDropdown.Item ><Link to="/">DDL_1</Link></NavDropdown.Item>
          <NavDropdown.Item><Link to="/">DDL_2</Link></NavDropdown.Item>
          <NavDropdown.Item ><Link to="/">DDL_3</Link></NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
        
      </Nav>
     
    </Navbar.Collapse>
  </Container>
  <input className='search'></input>
  <button className='loginButton'>Login</button>
</Navbar>
            </div>
        );
    }
}

export default AppNavbar;