import React from "react";
import { Row, Col } from "react-bootstrap";
import { IAuthorArray, IAuthor } from "../../../types/LibraryTypes";
import { Trash2, Edit } from "react-feather";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from 'react-redux';
import { removeAuthors, updateAuthorId } from '../../../../redux/authorReducer';
import { useToasts } from 'react-toast-notifications';
import { selectBook } from '../../../../redux/configureStore';
import { selectAuthor } from '../../../../redux/configureStore';

type AuthorProps = {
  author: IAuthorArray;
  index: number;
};

const Author: React.FC<AuthorProps> = (props) => {

  const { addToast } = useToasts();
  const dispatch = useDispatch();
  const bookList = useSelector(selectBook);
  const authorList = useSelector(selectAuthor);

  const { author, index } = props;

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
        const bookauthorinclude: string[] = [];

        for (let i = 0; i < bookList.length; i++) {
          if (bookList[i].book.author === authorList[index].author.name) {
            bookauthorinclude.push(bookList[i].book.name)
          }
        }

        if (bookauthorinclude.length === 0) {
          const allAuthors: IAuthorArray[] = authorList.slice();
          allAuthors.splice(index, 1);
          dispatch(removeAuthors(index));
          addToast("Author Deleted", { appearance: 'success', autoDismiss: true });
        } else {
          addToast("Author Can not Deleted, First you need to remove '" + bookauthorinclude.toString() + "' book", { appearance: 'error', autoDismiss: false });
        }
      }
    });
  };

  return (
    <Row className="author py-1">
      <Col xs={8} className="p-0">
        <p>
          {index + 1}. {author.author.name}
        </p>
      </Col>
      <Col xs={4}>
        <Trash2 className="delete text-danger ms-2 ms-sm-3 mt-1" onClick={handleOnClick} />
        <Edit className="edit text-warning ms-2 ms-sm-3 mt-1" onClick={() => dispatch(updateAuthorId(index))} />
      </Col>
    </Row>
  );
};
export default Author;
