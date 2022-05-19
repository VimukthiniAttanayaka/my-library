import React from "react";
import { Row, Col } from "react-bootstrap";
import { BookArray } from "../../../types/LibraryTypes";
import Book from "./Book";
import { selectBook } from '../../../../redux/configureStore';
import { useSelector } from 'react-redux';

const BookList: React.FC = () => {

  const bookList = useSelector(selectBook);

  if (bookList.length === 0) {
    return (
      <p className="empty-book mt-2">
        <i>No Book Listed Here</i>
      </p>
    );
  }

  const renderBook = () => {
    return (
      <ul className="p-3 m-0">
        {bookList.map((book: BookArray, index: number) => (
          <Book
            book={book}
            index={index}
            key={index}
          />
        ))}
      </ul>
    );
  };

  return (
    <Row>
      <Col xs={12} className="p-0">
        {renderBook()}
      </Col>
    </Row>
  );
};
export default BookList;
