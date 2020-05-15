import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function MenuBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand as={Link} to="/">90.Never</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavItem>
             <Nav.Link as={Link} to="/" >Staff Picks</Nav.Link>
          </NavItem>
          <Nav.Link as={Link} to="/">
           Tags
          </Nav.Link>
          <Nav.Link  as={Link} to="/">
            All Playlists
          </Nav.Link>
          <Nav.Link as={Link} to="/">
            LogIn
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default MenuBar; 