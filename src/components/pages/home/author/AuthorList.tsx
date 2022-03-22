import React from "react";
import { Row, Col } from "react-bootstrap";
import { IAuthor } from "../../../types/LibraryTypes";
import Author from "./Author";

type AuthorListProps = {
  authorList: IAuthor[];
  onAuthorDelete: (index: number) => void;
  onAuthorUpdateSet: (index: number) => void;
};

const AuthorList: React.FC<AuthorListProps> = (props) => {
  const { authorList, onAuthorDelete, onAuthorUpdateSet } = props;

  if (props.authorList.length === 0) {
    return (
      <p className="empty-author mt-2">
        <i>No Author Listed Here</i>
      </p>
    );
  }

  const renderAuthor = () => {
    return (
      <ul className="p-3 m-0">
        {authorList.map((author: IAuthor, index: number) => (
          <Author
            author={author}
            index={index}
            key={index}
            deleteAuthor={onAuthorDelete}
            onAuthorUpdateSet={onAuthorUpdateSet}
          />
        ))}
      </ul>
    );
  };

  return (
    <Row>
      <Col xs={12} className="p-0">
        {renderAuthor()}
      </Col>
    </Row>
  );
};
export default AuthorList;
