import React from "react";
import { Row, Col } from "react-bootstrap";
import AddBook from "./AddBook";
import BookForm from "./BookForm";
import BookList from "./BookList";
import BookTitle from "./BookTitle";

const BookSection: React.FC = () => {

  const bookFormVisible = localStorage.getItem('bookForm');

  return (
    <Row className="book-section mx-3 mx-md-4 mx-lg-5">
      <Col xs={12} className="p-0">
        <BookTitle />
      </Col>
      <Col xs={12} className="p-0">
        <BookList />
      </Col>
      <Col xs={12} className="p-0">
        <AddBook />
      </Col>
      <Col xs={12} sm={11} md={10} lg={9} className="p-0">
        {bookFormVisible ==='true' && <BookForm />}
      </Col>
    </Row>
  );
};
export default BookSection;
