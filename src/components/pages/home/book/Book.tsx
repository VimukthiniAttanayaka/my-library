import React from "react";
import { Row, Col } from "react-bootstrap";
import { IBook } from "../../../types/LibraryTypes";
import { Trash2, Edit } from "react-feather";
import Swal from "sweetalert2";

type BookProps = {
  book: IBook;
  index: number;
  deleteBook: (index: number) => void;
  onBookUpdateSet: (index: number) => void;
};
const Book: React.FC<BookProps> = (props) => {
  const { book, index } = props;

  const deleteBook = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result: any) => {
      if (result.isConfirmed) {
        props.deleteBook(index);
      }
    });
  };
  const updateBook = () => {
    props.onBookUpdateSet(index);
  };
  return (
    <Row className="book py-1">
      <Col xs={8} className="p-0">
        <p>
          {index + 1}. {book.name}
        </p>
      </Col>
      <Col xs={4}>
        <Trash2 className="delete text-danger ms-3 mt-1" onClick={deleteBook} />
        <Edit className="edit text-warning ms-3 mt-1" onClick={updateBook} />
      </Col>
    </Row>
  );
};
export default Book;