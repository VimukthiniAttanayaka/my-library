import React, { useEffect, useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { XCircle } from "react-feather";
import { useDispatch, useSelector } from 'react-redux';
import { addAuthors, updateAuthor, updateAuthorId } from '../../../../redux/authorReducer';
import { useToasts } from 'react-toast-notifications';
import { selectAuthor, selectAuthorUpdateId } from '../../../../redux/configureStore';

type AuthorFormProps = {
  onFormClose: (state:boolean) => void;
};

const AuthorForm: React.FC<AuthorFormProps> = (props) => {

  const { addToast } = useToasts()
  const dispatch = useDispatch();
  const updateId = useSelector(selectAuthorUpdateId);
  const authorList = useSelector(selectAuthor);

  const {onFormClose} = props; 

  const [validated, setValidated] = useState(false);
  const [authorName, setAuthorName] = useState<string>("");

  const handleOnAuthorNameChanged = (name: string) => {
    setAuthorName(name);
  };

  useEffect(() => {
    if (updateId === -1) {
      return;
    }
    setAuthorName(authorList[updateId].name);
  }, [updateId]);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    if (!authorName) {
      return;
    } else if (updateId !== -1) {
      dispatch(updateAuthor(authorName));
      setAuthorName("");
      addToast("Author Updated", { appearance: 'success', autoDismiss: true });
      dispatch(updateAuthorId(-1))
    } else {
      dispatch(addAuthors(authorName));
      setAuthorName("");
      addToast("Author Created", { appearance: 'success', autoDismiss: true });
    }
    setValidated(false);
  };

  return (
    <Row className="author-form-area mb-5">
      <Col xs={11} className="p-0 mb-2 ps-md-1">
        <h4>{updateId !== -1 ? "Update " : "Create "} Author</h4>
      </Col>
      <Col xs={1} className="p-0">
        <XCircle className="form-close mt-1" onClick={() => onFormClose(false)} />
      </Col>
      <Col xs={12} className="p-0 author-form">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label className="author-name-label">
              Name of Author
            </Form.Label>
            <Form.Control
              size="sm"
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
            {updateId !== -1 ? "Update" : "Create"}
          </Button>
        </Form>
      </Col>
    </Row>
  );
};
export default AuthorForm;
