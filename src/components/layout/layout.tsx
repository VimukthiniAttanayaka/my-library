import React from "react";
import { Row, Col } from "react-bootstrap";
import AppRoute from "../appRoute/AppRoute";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const Layout: React.FC = () => {
  return (
    <Row className="layout mx-0">
      <Col xs={12} className="p-0">
        <Navbar />
      </Col>
      <Col xs={12} className="p-0">
        <AppRoute />
      </Col>
      <Col xs={12}>
        <Footer />
      </Col>
    </Row>
  );
};
export default Layout;
