import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { XCircle } from "react-feather";

type AuthorForm = {
  formUnVisible: () => void
}
const AuthorForm: React.FC<AuthorForm> = (props) => {
  const {formUnVisible} = props;
  
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event: any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <Row className="author-form-area mb-5">
      <Col xs={11} className="p-0 mb-3 ps-1">
        <h4>Create Author</h4>
      </Col>
      <Col xs={1} className="p-0">
        <XCircle className="form-close" onClick={formUnVisible}/>
      </Col>
      <Col xs={12} className="p-0 author-form">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label className="author-name-label">Name of Author</Form.Label>
            <Form.Control 
                required 
                type="text" 
                placeholder="" 
            />
            <Form.Control.Feedback type="invalid">
              Enter Author Name
            </Form.Control.Feedback>
          </Form.Group>
          <Button type="submit" className="author-submit">Create</Button>
        </Form>
      </Col>
    </Row>
  );
};
export default AuthorForm;
