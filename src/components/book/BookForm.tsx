import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { XCircle } from "react-feather";
import NumberFormat from "react-number-format";
import Select from 'react-select';

type BookForm = {
  formUnVisible: () => void;
};
const BookForm: React.FC<BookForm> = (props) => {
  const { formUnVisible } = props;

  const [validated, setValidated] = useState(false);

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  const handleSubmit = (event: any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  }; 
  return (
    <Row className="book-form-area mb-5">
      <Col xs={11} className="p-0 mb-3 ps-1">
        <h4>Create Book</h4>
      </Col>
      <Col xs={1} className="p-0">
        <XCircle className="form-close" onClick={formUnVisible} />
      </Col>
      <Col xs={12} className="p-0 book-form">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label className="book-name-label pb-1">
              Title of Book
            </Form.Label>
            <Form.Control required type="text" placeholder="" />
            <Form.Control.Feedback type="invalid">
              Enter Book Name
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label className="book-name-label pt-4 pb-1">Price</Form.Label>
            <NumberFormat 
              thousandSeparator={true} 
              prefix={'$'} 
              className="form-control" 
              required />
            <Form.Control.Feedback type="invalid">
              Enter Book Name
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label className="book-name-label pt-4 pb-1">
              Author
            </Form.Label>
            <Select options={options} isClearable={true}/>
            <Form.Control.Feedback type="invalid">
              Enter Book Name
            </Form.Control.Feedback>
          </Form.Group>
          <Button type="submit" className="book-submit">
            Create
          </Button>
        </Form>
      </Col>
    </Row>
  );
};
export default BookForm;
