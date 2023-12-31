import React from "react";
import { Col, Row } from "react-bootstrap";
import { Plus } from "react-feather";
import { useDispatch} from 'react-redux';
import { formVisible } from '../../../../redux/bookReducer';

const AddBook: React.FC = () => {

  const dispatch = useDispatch();

  return (
    <Row>
      <Col xs={12} className="p-0 add-book mb-4 mb-md-5" onClick={() => dispatch(formVisible(true))}>
        <Plus className="plus me-1 me-md-2" />
        <span>Add Book</span>
      </Col>
    </Row>
  );
};
export default AddBook;
