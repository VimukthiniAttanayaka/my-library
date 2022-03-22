import React from "react";
import { Row, Col } from "react-bootstrap";
import { IAuthor } from "../../../types/LibraryTypes";
import { Trash2, Edit } from "react-feather";
import Swal from "sweetalert2";

type AuthorProps = {
  author: IAuthor;
  index: number;
  deleteAuthor: (index: number) => void;
  onAuthorUpdateSet: (index: number) => void;
};

const Author: React.FC<AuthorProps> = (props) => {
  const { author, index, deleteAuthor, onAuthorUpdateSet } = props;

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
        deleteAuthor(index);
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
        <Edit className="edit text-warning ms-2 ms-sm-3 mt-1" onClick={() => onAuthorUpdateSet(index)} />
      </Col>
    </Row>
  );
};
export default Author;
