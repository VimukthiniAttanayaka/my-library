import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { XCircle } from "react-feather";
import NumberFormat from "react-number-format";
import Select from "react-select";
import { AuthorDropDown, IAuthor, IBook } from "../types/LibraryTypes";

type BookForm = {
  formUnVisible: () => void;
  onBookCreate: (newBook: IBook) => void;
  authorList: IAuthor[];
};
const BookForm: React.FC<BookForm> = (props) => {
  const { formUnVisible } = props;

  const [validated, setValidated] = useState(false);
  const [bookName, setBookName] = useState<string>("");
  const [bookPrice, setBookPrice] = useState<string>("");
  const [bookAuthor, setBookAuthor] = useState<AuthorDropDown | null>(null);

  const options = props.authorList.map((author: IAuthor) => {
    return { value: author.name, label: author.name };
  });

  const handleOnBookNameChanged = (name:string) => {
    setBookName(name);
  }

  const handleOnPriceChanged = (price:string) => {
    setBookPrice(price);
  }

  const handleOnBookAuthorChanged = (author:AuthorDropDown|null) => {
    if(!author){
      return;
    }
    setBookAuthor(author);
  }

  const handleSubmit = (event: any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    event.preventDefault();
    setValidated(true);
    if (!bookName || !bookPrice || !bookAuthor) {
      return;
    } else {
      const newBook: IBook = {
        name: bookName,
        price: bookPrice,
        author: bookAuthor.value,
      };
      props.onBookCreate(newBook);
      setBookName("");
      setBookPrice("");
      setBookAuthor(null);
    }
    setValidated(false);
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
            <Form.Control
              required
              type="text"
              placeholder=""
              value={bookName}
              onChange={(ev: React.ChangeEvent<HTMLInputElement>) =>
                handleOnBookNameChanged(ev.target.value)
              }
            />
            <Form.Control.Feedback type="invalid">
              Enter Book Name
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label className="book-name-label pt-4 pb-1">Price</Form.Label>
            <NumberFormat
              thousandSeparator={true}
              prefix={"$"}
              className="form-control"
              required
              value={bookPrice}
              onValueChange={(values: any) => {
                handleOnPriceChanged(values.value);
              }}
            />
            <Form.Control.Feedback type="invalid">
              Enter Book Name
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label className="book-name-label pt-4 pb-1">
              Author
            </Form.Label>
            <Select
              options={options}
              isClearable={true}
              value={bookAuthor}
              onChange={(selected: AuthorDropDown | null) => {
                handleOnBookAuthorChanged(selected);
              }}
            />
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
