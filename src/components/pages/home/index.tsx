import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import AuthorSection from "./author/AuthorSection";
import BookSection from "./book/BookSection";
import Welcome from "./welcome/Welcome";

const Home: React.FC = () => {

  return (
    <Container fluid={true}>
      <Row>
        <Col xs={12} className='px-0'>
          <Welcome />
        </Col>
        <Col
          xs={{ span: 12, order: 1 }}
          md={{ span: 6, order: 2 }}
          className="px-sm-0 mx-0 px-3"
        >
          <AuthorSection />
        </Col>
        <Col
          xs={{ span: 12, order: 2 }}
          md={{ span: 6, order: 1 }}
          className="px-sm-0 mx-0 px-3"
        >
          <BookSection />
        </Col>
      </Row>
    </Container>
  );
};
export default Home;
