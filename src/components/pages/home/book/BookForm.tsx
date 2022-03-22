import React, { useEffect, useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { XCircle } from "react-feather";
import NumberFormat from "react-number-format";
import Select from "react-select";
import { AuthorDropDown, IAuthor, IBook } from "../../../types/LibraryTypes";
import customStyles from '../../../../constants/values';

type BookFormProps = {
  formClose: () => void;
  onBookCreate: (newBook: IBook) => void;
  authorList: IAuthor[];
  updateBook: IBook | null;
  onBookUpdate: (newBook: IBook) => void;
};

const BookForm: React.FC<BookFormProps> = (props) => {
  const { formClose, updateBook, onBookCreate, onBookUpdate, authorList } = props;

  const [bookName, setBookName] = useState<string>("");
  const [bookPrice, setBookPrice] = useState<string>("");
  const [bookAuthor, setBookAuthor] = useState<AuthorDropDown | null>(null);

  const [validated, setValidated] = useState(false);
  const [bookAuthorValid, setBookAuthorValid] = useState<string>("");
  const [authorMsg, setAuthorMsg] = useState<string>("author-valid");

  const authors = authorList.map((author: IAuthor) => {
    return { value: author.name, label: author.name };
  });

  const handleOnBookNameChanged = (name: string) => {
    setBookName(name);
  };

  const handleOnPriceChanged = (price: string) => {
    setBookPrice(price);
  };

  const handleOnBookAuthorChanged = (author: AuthorDropDown | null) => {
    if (!author) {
      return;
    }
    setBookAuthor(author);
    setBookAuthorValid("yes");
  };

  useEffect(() => {
    if (!updateBook) {
      return;
    }
    const updateBookAuthor: AuthorDropDown = {
      value: updateBook.author,
      label: updateBook.author,
    };
    setBookName(updateBook.name);
    setBookPrice(updateBook.price);
    setBookAuthor(updateBookAuthor);
  }, [updateBook]);
  const handleSubmit = (event: any) => {
    setAuthorMsg("author-invalid");
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    if (bookAuthor == null) {
      setBookAuthorValid("yes");
    }
    event.preventDefault();
    setValidated(true);
    if (!bookName || !bookPrice || !bookAuthor) {
      return;
    } else if (updateBook) {
      const newBook: IBook = {
        name: bookName,
        price: bookPrice,
        author: bookAuthor.value,
      };
      onBookUpdate(newBook);
      setBookName("");
      setBookPrice("");
      setBookAuthor(null);
      setValidated(true);
      setAuthorMsg("author-valid");
      setBookAuthorValid("");
    } else {
      const newBook: IBook = {
        name: bookName,
        price: bookPrice,
        author: bookAuthor.value,
      };
      onBookCreate(newBook);
      setBookName("");
      setBookPrice("");
      setBookAuthor(null);
      setValidated(true);
      setAuthorMsg("author-valid");
      setBookAuthorValid("");
    }
    setValidated(false);
  };

  const bookAuthorValidate = () => {
    if (bookAuthor === null && bookAuthorValid === "") {
      return "form-input";
    } else if (bookAuthor === null && bookAuthorValid === "yes") {
      return "select-invalid";
    } else if (bookAuthor !== null && bookAuthorValid === "") {
      return "form-input";
    } else {
      return "select-invalid1";
    }
  };

  return (
    <Row className="book-form-area mb-5">
      <Col xs={11} className="p-0 mb-2 ps-1">
        <h4>{updateBook ? "Update " : "Create "} Book</h4>
      </Col>
      <Col xs={1} className="p-0">
        <XCircle className="form-close mt-1" onClick={formClose} />
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
              Enter Valid Book Name
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
              Enter Valid Book Price
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label className="book-name-label pt-4 pb-1">
              Author
            </Form.Label>
            <Select
              className={bookAuthorValidate()}
              styles={customStyles}
              options={authors}
              isSearchable={true}
              isClearable={true}
              value={bookAuthor}
              onChange={(selected: AuthorDropDown | null) => {
                handleOnBookAuthorChanged(selected);
              }}
            />
            {!updateBook && !bookAuthor && (
              <p className={authorMsg}>Enter Valid Book Author</p>
            )}
          </Form.Group>
          <Button type="submit" className="book-submit">
            {updateBook ? "Update" : "Create"}
          </Button>
        </Form>
      </Col>
    </Row>
  );
};
export default BookForm;
