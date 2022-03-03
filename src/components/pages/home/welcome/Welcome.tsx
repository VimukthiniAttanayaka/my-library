import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import libraryimg from "../../../../assets/images/library.jpg";

const Welcome: React.FC = () => {
  return (
    <Row className="welcome">
      <Col xs={12} className="p-0">
        <Image src={libraryimg}></Image>
      </Col>
      <Col xs={12}>
        <p className="photo-credit px-lg-5 px-md-3 px-2 pt-1 pt-md-2">
          Photo by {" "}
          <a href="https://unsplash.com/@annahunko">Anna Hunko</a>{" "}on{" "}
          <a href="https://unsplash.com/photos/ajE5goOGzZc">Unsplash</a>
        </p>
      </Col>
    </Row>
  );
};
export default Welcome;
