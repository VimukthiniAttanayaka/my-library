import React from "react";
import { Col, Nav, Navbar } from "react-bootstrap";

const NavbarPage: React.FC = () => {
  return (
    <Navbar expand="md" className="navbar px-1">
      <Col xs={1} md={4}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="/" className="ps-4 ps-md-2">Home</Nav.Link>
            <Nav.Link href="/about" className="ps-4 ps-md-2">About</Nav.Link>
            <Nav.Link href="/contact" className="ps-4 ps-md-2">Contact</Nav.Link>
            <Nav.Link href="/service" className="ps-4 ps-md-2">Service</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Col>
      <Col xs={11} md={4}>
        <h1 className="text-center mt-3 mb-3">My Library</h1>
      </Col>
    </Navbar>
  );
};
export default NavbarPage;