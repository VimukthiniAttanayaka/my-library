import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { IAuthor, IBook } from "../../../types/LibraryTypes";
import AddBook from "./AddBook";
import BookForm from "./BookForm";
import BookList from "./BookList";
import BookTitle from "./BookTitle";
import { useToasts } from 'react-toast-notifications';

type BookSectionProps = {
  books: IBook[];
  authors: IAuthor[];
  onBookListChange: (newBooks: IBook[]) => void;
};

const BookSection: React.FC<BookSectionProps> = (props) => {

  const { addToast } = useToasts();
  const { authors, books, onBookListChange } = props;

  const [isFormVisible, setIsFormVisible] = useState(false);
  const [updateIndex, setUpdateIndex] = useState<number | null>(null);
  const [updateBook, setUpdateBook] = useState<IBook | null>(null);

  useEffect(() => {
    onBookListChange(books)
  }, [books]);

  const handleOnFormOpen = () => {
    return setIsFormVisible(true);
  };

  const handleOnFormClose = () => {
    setIsFormVisible(false);
    setUpdateBook(null);
    setUpdateIndex(null);
  };

  const handleOnBookDelete = (index: number) => {
    const allBooks: IBook[] = books.slice();
    allBooks.splice(index, 1);
    onBookListChange(allBooks);
    addToast("Book Deleted", { appearance: 'success', autoDismiss: true });
  };

  const handleOnBookCreate = (newBook: IBook) => {
    const index = books.length;
    const allBooks: IBook[] = books.slice();
    allBooks.push(newBook);
    onBookListChange(allBooks);
    addToast("Book Created", { appearance: 'success', autoDismiss: true });
  };

  const handleOnBookUpdate = (newBook: IBook) => {
    if (!updateIndex) {
      return;
    }
    const allBooks: IBook[] = books.slice();
    allBooks.splice(updateIndex - 1, 1, newBook);
    onBookListChange(allBooks);
    setUpdateBook(null);
    setUpdateIndex(null);
    addToast("Book Updated", { appearance: 'success', autoDismiss: true });
  };

  const handleOnBookUpdateSet = (index: number) => {
    setUpdateIndex(index + 1);
    setUpdateBook(books[index]);
    setIsFormVisible(true);
  };

  return (
    <Row className="book-section mx-3 mx-md-4 mx-lg-5">
      <Col xs={12} className="p-0">
        <BookTitle />
      </Col>
      <Col xs={12} className="p-0">
        <BookList
          bookList={books}
          onBookDelete={handleOnBookDelete}
          onBookUpdateSet={handleOnBookUpdateSet}
        />
      </Col>
      <Col xs={12} className="p-0">
        <AddBook formOpen={handleOnFormOpen} />
      </Col>
      <Col xs={12} sm={11} md={10} lg={9} className="p-0">
        {isFormVisible &&
          <BookForm
            formClose={handleOnFormClose}
            onBookCreate={handleOnBookCreate}
            authorList={authors}
            updateBook={updateBook}
            onBookUpdate={handleOnBookUpdate} />}
      </Col>
    </Row>
  );
};
export default BookSection;
