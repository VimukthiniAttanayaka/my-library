import React, { useEffect, useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { XCircle } from "react-feather";
import { IAuthor } from "../../../types/LibraryTypes";

type AuthorForm = {
  formUnVisible: () => void;
  onAuthorCreate: (newAuther: IAuthor) => void;
  updateAuthor: IAuthor | null;
  onAuthorUpdate: (newAuthor: IAuthor) => void;
};
const AuthorForm: React.FC<AuthorForm> = (props) => {
  const { formUnVisible, updateAuthor } = props;

  const [validated, setValidated] = useState(false);
  const [authorName, setAuthorName] = useState<string>("");

  const handleOnAuthorNameChanged = (name: string) => {
    setAuthorName(name);
  };

  useEffect(() => {
    if (!updateAuthor) {
      return;
    }
    setAuthorName(updateAuthor.name);
  }, [updateAuthor]);

  const handleSubmit = (event: any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    event.preventDefault();
    setValidated(true);
    if (!authorName) {
      return;
    } else if (updateAuthor) {
      const newAuthor: IAuthor = { name: authorName };
      props.onAuthorUpdate(newAuthor);
      setAuthorName("");
    } else {
      const newAuthor: IAuthor = { name: authorName };
      props.onAuthorCreate(newAuthor);
      setAuthorName("");
    }
    setValidated(false);
  };
  return (
    <Row className="author-form-area mb-5">
      <Col xs={11} className="p-0 mb-3 ps-1">
        <h4>{updateAuthor ? "Update " : "Create "} Author</h4>
      </Col>
      <Col xs={1} className="p-0">
        <XCircle className="form-close mt-1" onClick={formUnVisible} />
      </Col>
      <Col xs={12} className="p-0 author-form">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label className="author-name-label">
              Name of Author
            </Form.Label>
            <Form.Control
              required
              type="text"
              placeholder=""
              value={authorName}
              onChange={(ev: React.ChangeEvent<HTMLInputElement>) =>
                handleOnAuthorNameChanged(ev.target.value)
              }
            />
            <Form.Control.Feedback type="invalid">
              Enter Author Name
            </Form.Control.Feedback>
          </Form.Group>
          <Button type="submit" className="author-submit">
            {" "}
            {updateAuthor ? "Update" : "Create"}
          </Button>
        </Form>
      </Col>
    </Row>
  );
};
export default AuthorForm;
