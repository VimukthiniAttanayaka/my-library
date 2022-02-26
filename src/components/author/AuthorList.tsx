import React from "react";
import { Row, Col } from "react-bootstrap";
import { IAuthor } from "../types/LibraryTypes";
import Author from "./Author";

type AuthorListProps = {
  authorList: IAuthor[];
  onAuthorDelete: (index: number) => void;
  onAuthorUpdateSet: (index: number) => void;
};
const AuthorList: React.FC<AuthorListProps> = (props) => {
  const randerAuthor = () => {
    if (props.authorList.length == 0) {
      return (
        <p className="empty-author mt-2">
          <i>No Author Listed Here</i>
        </p>
      );
    } else {
      return (
        <ul className="p-3 m-0">
          {props.authorList.map((author: IAuthor, index: number) => (
            <Author
              author={author}
              index={index}
              key={index}
              deleteAuthor={props.onAuthorDelete}
              onAuthorUpdateSet={props.onAuthorUpdateSet}
            />
          ))}
        </ul>
      );
    }
  };
  return (
    <Row>
      <Col xs={12} className="p-0">
        {randerAuthor()}
      </Col>
    </Row>
  );
};
export default AuthorList;
