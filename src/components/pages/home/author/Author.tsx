import React from "react";
import { Row, Col } from "react-bootstrap";
import { IAuthor } from "../../../types/LibraryTypes";
import { Trash2, Edit } from "react-feather";
import Swal from "sweetalert2";
import { useDispatch } from 'react-redux';
import { removeAuthors, updateAuthorId } from '../../../../redux/authorReducer';
import { useToasts } from 'react-toast-notifications';

type AuthorProps = {
  author: IAuthor;
  index: number;
};

const Author: React.FC<AuthorProps> = (props) => {
  const { addToast } = useToasts();
  const dispatch = useDispatch();

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
        dispatch(removeAuthors(index));
        addToast("Author Created", { appearance: 'success', autoDismiss: true });
      }
    });
  };

  return (
    <Row className="author py-1">
      <Col xs={8} className="p-0">
        <p>
          {index + 1}. {author.name}
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
