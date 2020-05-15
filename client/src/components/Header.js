import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand as={Link} to="/">90.Never</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavItem>
             <Nav.Link as={Link} to="/" > Make Survey </Nav.Link>
          </NavItem>
          <Nav.Link as={Link} to="/">
           Take Survey
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link  as={Link} to="/">
            Login
          </Nav.Link>
          <Nav.Link as={Link} to="/">
            Sign Up
          </Nav.Link>
          <Nav.Link as={Link} to="/">
            Sign Out
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default Header; 