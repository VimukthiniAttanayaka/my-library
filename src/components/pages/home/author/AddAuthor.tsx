import React from "react";
import { Col, Row } from "react-bootstrap";
import { Plus } from "react-feather";

const AddAuthor: React.FC = () => {

  const formStateSet = () => {
    localStorage.setItem('authorForm', "true")
  }

  return (
    <Row>
      <Col xs={12} className="p-0 add-author mb-4 mb-md-5" onClick={() => formStateSet()}>
        <Plus className="plus me-1 me-md-2" />
        <span>Add Author</span>
      </Col>
    </Row>
  );
};
export default AddAuthor;
