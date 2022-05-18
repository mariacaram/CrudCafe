import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
class Navigation extends Component {
  render() {
    return (
      <Navbar bg="primary" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#home">CRUD Cafe</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#link">Inicio</Nav.Link>
              <Nav.Link href="#link">Productos</Nav.Link>
              <Nav.Link href="#link">Extra</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Navigation;
