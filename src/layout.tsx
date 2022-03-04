import React from "react";
import { Row, Col } from "react-bootstrap";
import AppRoute from "./AppRoute";
import Navbar from "./components/navbar/Navbar";

const Layout: React.FC = () => {
  return (
    <Row className="layout mx-0">
      <Col xs={12} className="p-0">
          <Navbar/>
      </Col>
      <Col xs={12} className="p-0">
        <AppRoute/>
      </Col>
      <Col xs={12}>
      </Col>
    </Row>
  );
};
export default Layout;
