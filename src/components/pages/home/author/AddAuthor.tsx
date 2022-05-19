import React from "react";
import { Col, Row } from "react-bootstrap";
import { Plus } from "react-feather";

type AddAuthorProps = {
  onFormOpen: (state:boolean) => void;
};

const AddAuthor: React.FC<AddAuthorProps> = (props) => {

  const {onFormOpen} = props;

  return (
    <Row>
      <Col xs={12} className="p-0 add-author mb-4 mb-md-5" onClick={() => onFormOpen(true)}>
        <Plus className="plus me-1 me-md-2" />
        <span>Add Author</span>
      </Col>
    </Row>
  );
};
export default AddAuthor;
