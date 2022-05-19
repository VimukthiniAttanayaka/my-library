import React from "react";
import { Col, Row } from "react-bootstrap";
import { Plus } from "react-feather";

const AddBook: React.FC = () => {

  const formStateSet = () => {
    localStorage.setItem('bookForm', "true")
  }

  return (
    <Row>
      <Col xs={12} className="p-0 add-book mb-4 mb-md-5" onClick={() => formStateSet()}>
        <Plus className="plus me-1 me-md-2" />
        <span>Add Book</span>
      </Col>
    </Row>
  );
};
export default AddBook;
