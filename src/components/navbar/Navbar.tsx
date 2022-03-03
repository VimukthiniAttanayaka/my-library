import React from "react";
import { Row, Col, Form, FormControl, Button, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarPage: React.FC = () => {
  return (
      <Navbar expand="md" className="navbar px-1">
      <Col xs={4}>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/service">Service</Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Col>
      <Col xs={4}>
        <h1 className="text-center mt-2 mb-3">My Library</h1>
      </Col>
      <Col xs={4}>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Col>
      </Navbar>
  );
};
export default NavbarPage;
