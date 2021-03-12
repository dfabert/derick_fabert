import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";


function NavTabs() {

  return (
    <>
      <Navbar expand = 'md' bg="dark" variant="dark" sticky='top' >
        <Navbar.Brand as={Link} to="/" >Derick Fabert</Navbar.Brand>
        <Nav className = 'ml-auto'>
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link}  to="/portfolio">Portfolio</Nav.Link>
          <NavDropdown alignRight title="Contact" id="collasible-nav-dropdown">
            <NavDropdown.Item><a href="tel:1-317-258-0021">Phone:  (317) 258-0021</a></NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item><a href="mailto:glen.fabert@gmail.com">E-mail:  glen.fabert@gmail.com</a></NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar>
    </>
  );
}

export default NavTabs;
