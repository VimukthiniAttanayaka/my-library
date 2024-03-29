import React from "react";
import { Col, Row } from "react-bootstrap";
import { Plus } from "react-feather";
import { useDispatch} from 'react-redux';
import { formVisible } from '../../../../redux/authorReducer';

const AddAuthor: React.FC = () => {

  const dispatch = useDispatch();

  return (
    <Row>
      <Col xs={12} className="p-0 add-author mb-4 mb-md-5" onClick={() => dispatch(formVisible(true))}>
        <Plus className="plus me-1 me-md-2" />
        <span>Add Author</span>
      </Col>
    </Row>
  );
};
export default AddAuthor;
