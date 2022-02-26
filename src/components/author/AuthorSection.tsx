import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { IAuthor } from "../types/LibraryTypes";
import AddAuthor from "./AddAuthor";
import AuthorForm from "./AuthorForm";
import AuthorList from "./AuthorList";
import AuthorTitle from "./AuthorTitle";

type AuthorSectionProps = {
  onFormVisible: () => void;
  onFormUnVisible: () => void;
  visible: boolean;
  authorList: IAuthor[];
  onAuthorDelete: (index: number) => void;
  onAuthorCreate: (newAuther: IAuthor) => void;
  onAuthorUpdateSet: (index: number) => void;
  updateAuthor: IAuthor | null;
  handleOnAuthorUpdate: (newAuthor: IAuthor) => void;
};
const AuthorSection: React.FC<AuthorSectionProps> = (props) => {
  return (
    <Row className="author-section mx-4 mx-sm-5">
      <Col xs={12} className="p-0">
        <AuthorTitle />
      </Col>
      <Col xs={12} className="p-0">
        <AuthorList
          authorList={props.authorList}
          onAuthorDelete={props.onAuthorDelete}
          onAuthorUpdateSet={props.onAuthorUpdateSet}
        />
      </Col>
      <Col xs={12} className="p-0">
        <AddAuthor formVisible={props.onFormVisible} />
      </Col>
      <Col xs={12} sm={9} className="p-0">
        {props.visible ? (
          <AuthorForm
            formUnVisible={props.onFormUnVisible}
            onAuthorCreate={props.onAuthorCreate}
            updateAuthor={props.updateAuthor}
            onAuthorUpdate={props.handleOnAuthorUpdate}
          />
        ) : null}
      </Col>
    </Row>
  );
};
export default AuthorSection;
