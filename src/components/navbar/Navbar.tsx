import React from "react";
import { Col, Nav, Navbar } from "react-bootstrap";
//import { Search } from "react-feather";

const NavbarPage: React.FC = () => {
  return (
    <Navbar expand="md" className="navbar px-1">
      <Col xs={1} md={4}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="/" className="ps-4 ps-md-0">Home</Nav.Link>
            <Nav.Link href="/about" className="ps-4 ps-md-0">About</Nav.Link>
            <Nav.Link href="/contact" className="ps-4 ps-md-0">Contact</Nav.Link>
            <Nav.Link href="/service" className="ps-4 ps-md-0">Service</Nav.Link>
          </Nav>
          {/* <Form className="d-flex nav-search-1">
          <Search />
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          </Form> */}
        </Navbar.Collapse>
      </Col>
      <Col xs={11} md={4}>
        <h1 className="text-center mt-3 mb-3">My Library</h1>
      </Col>
      {/* <Col xs={2} sm={4} className="pe-4">
        <Form className="d-flex nav-search-2">
          <Search />
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
        </Form>
      </Col> */}
    </Navbar>
  );
};
export default NavbarPage;
