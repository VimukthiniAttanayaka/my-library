import React from "react";
import { Row, Col } from "react-bootstrap";
import { BookArray } from "../../../types/LibraryTypes";
import { Trash2, Edit } from "react-feather";
import Swal from "sweetalert2";
import { useDispatch } from 'react-redux';
import { removeBooks, updateBookId } from '../../../../redux/bookReducer';
import { useToasts } from 'react-toast-notifications';

type BookProps = {
  book: BookArray;
  index: number;
};

const Book: React.FC<BookProps> = (props) => {

  const { addToast } = useToasts();
  const dispatch = useDispatch();

  const { book, index } = props;

  const handleOnClick = () => {
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
        dispatch(removeBooks(index));
        addToast("Book Created", { appearance: 'success', autoDismiss: true });
      }
    });
  };

  return (
    <Row className="book py-1">
      <Col xs={8} className="p-0">
        <p>
          {index + 1}. {book.book.name}
        </p>
      </Col>
      <Col xs={4}>
        <Trash2 className="delete text-danger ms-2 ms-sm-3 mt-1" onClick={handleOnClick} />
        <Edit className="edit text-warning ms-2 ms-sm-3 mt-1" onClick={() => dispatch(updateBookId(index))} />
      </Col>
    </Row>
  );
};
export default Book;
