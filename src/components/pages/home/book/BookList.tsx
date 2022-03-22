import React from "react";
import { Row, Col } from "react-bootstrap";
import { IBook } from "../../../types/LibraryTypes";
import Book from "./Book";

type BookListProps = {
  bookList: IBook[];
  onBookDelete: (index: number) => void;
  onBookUpdateSet: (index: number) => void;
};

const BookList: React.FC<BookListProps> = (props) => {
  const { bookList, onBookDelete, onBookUpdateSet } = props;
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
        {bookList.map((book: IBook, index: number) => (
          <Book
            book={book}
            index={index}
            key={index}
            deleteBook={onBookDelete}
            onBookUpdateSet={onBookUpdateSet}
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
