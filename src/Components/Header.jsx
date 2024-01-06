import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function Header() {
  return (
    <div >
      <Navbar expand="lg" className="bg-body-tertiary " fixed='top'>
      <Container>
        <Navbar.Brand href="#home">
          <img src="https://assets-global.website-files.com/5f96916c846a8769a380ae65/5f969565846a87daea80b4a1_logotype.svg" alt="" />
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" ms-auto fs-5">
            <Nav.Link href="#home" className='me-3'>Features</Nav.Link>
            <Nav.Link href="#link" className='me-3'>Pricing</Nav.Link>
            <Nav.Link href="#link" className='me-3'>Log in</Nav.Link>
            <button className='btn btn-success p-2 rounded'>Start free trial</button>

           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header