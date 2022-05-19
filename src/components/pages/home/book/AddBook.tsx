import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Plus } from "react-feather";

type AddBookProps = {
  onFormOpen: (state: boolean) => void;
};
const AddBook: React.FC<AddBookProps> = (props) => {

  const { onFormOpen } = props;

  return (
    <Row>
      <Col xs={12} className="p-0 add-book mb-4 mb-md-5" onClick={() => onFormOpen(true)}>
        <Plus className="plus me-1 me-md-2" />
        <span>Add Book</span>
      </Col>
    </Row>
  );
};
export default AddBook;
