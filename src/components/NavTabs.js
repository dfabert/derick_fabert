import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function NavTabs() {

  return (
<>
  <Navbar bg="dark" variant="dark" sticky='top'>
    <Navbar.Brand href="/">Glen Derick Fabert</Navbar.Brand>
    <Nav className="justify-content-center" variant='pills'>
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/portfolio">Portfolio</Nav.Link>
      <NavDropdown title="Contact" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1"><a href="tel:1-317-258-0021">Phone:  (317) 258-0021</a></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4"><a href="mailto:glen.fabert@gmail.com">E-mail:  glen.fabert@gmail.com</a></NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar>
</>
  );
}

export default NavTabs;
