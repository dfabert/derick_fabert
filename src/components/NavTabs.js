import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";


function NavTabs() {

  return (
    <>
      <Navbar bg="dark" variant="dark" sticky='top' >
        <Navbar.Brand as={Link} to="/" >Derick Fabert</Navbar.Brand>
        <Nav className = 'ml-auto'>
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link}  to="/portfolio">Portfolio</Nav.Link>
          <NavDropdown alignRight title="Contact">
            <NavDropdown.Item href="tel:1-317-258-0021" active={false}>Phone:  (317) 258-0021</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href='mailto:glen.fabert@gmail.com' active={false}>E-mail:  glen.fabert@gmail.com</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar>
    </>
  );
}

export default NavTabs;
