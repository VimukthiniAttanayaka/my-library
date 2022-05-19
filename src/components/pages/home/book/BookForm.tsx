import React, { useEffect, useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { XCircle } from "react-feather";
import NumberFormat from "react-number-format";
import Select from "react-select";
import { IAuthorArray, AuthorDropDown, IAuthor, IBook } from "../../../types/LibraryTypes";
import customStyles from '../../../../constants/values';
import { useDispatch, useSelector } from 'react-redux';
import { addBooks, updateBook, updateBookId } from '../../../../redux/bookReducer';
import { useToasts } from 'react-toast-notifications';
import { selectAuthor, selectBook, selectBookUpdateId } from '../../../../redux/configureStore';

type BookFormProps = {
  onFormClose: (state: boolean) => void;
};
const BookForm: React.FC<BookFormProps> = (props) => {

  const { addToast } = useToasts()
  const dispatch = useDispatch();
  const updateId = useSelector(selectBookUpdateId);
  const authorList = useSelector(selectAuthor);
  const bookList = useSelector(selectBook);

  const { onFormClose } = props;

  const [bookName, setBookName] = useState<string>("");
  const [bookPrice, setBookPrice] = useState<string>("");
  const [bookAuthor, setBookAuthor] = useState<AuthorDropDown | null>(null);

  const [validated, setValidated] = useState(false);
  const [bookAuthorValid, setBookAuthorValid] = useState<string>("");
  const [authorMsg, setAuthorMsg] = useState<string>("author-valid");

  const authors = authorList.map((author: IAuthorArray) => {
    return { value: author.author.name, label: author.author.name };
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
    if (updateId === -1) {
      return;
    }
    const updateBookAuthor: AuthorDropDown = {
      value: bookList[updateId].book.author,
      label: bookList[updateId].book.author,
    };
    setBookName(bookList[updateId].book.name);
    setBookPrice(bookList[updateId].book.price);
    setBookAuthor(updateBookAuthor);
  }, [updateId]);

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
    } else if (updateId !== -1) {
      const newBook: IBook = {
        name: bookName,
        price: bookPrice,
        author: bookAuthor.value,
      };
      dispatch(updateBook(newBook));
      addToast("Book Updated", { appearance: 'success', autoDismiss: true });
      dispatch(updateBookId(-1))
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
      dispatch(addBooks(newBook));
      addToast("Book Created", { appearance: 'success', autoDismiss: true });
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
        <h4>{updateId !== -1 ? "Update " : "Create "} Book</h4>
      </Col>
      <Col xs={1} className="p-0">
        <XCircle className="form-close mt-1" onClick={() => onFormClose(false)} />
      </Col>
      <Col xs={12} className="p-0 book-form">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label className="book-name-label pb-1">
              Title of Book
            </Form.Label>
            <Form.Control
              size="sm"
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
            {updateId !== -1 ? "Update" : "Create"}
          </Button>
        </Form>
      </Col>
    </Row>
  );
};
export default BookForm;
