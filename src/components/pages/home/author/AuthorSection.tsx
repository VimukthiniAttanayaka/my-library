import React from "react";
import { Row, Col } from "react-bootstrap";
import { IAuthor, IBook } from "../../../types/LibraryTypes";
import AddAuthor from "./AddAuthor";
import AuthorForm from "./AuthorForm";
import AuthorList from "./AuthorList";
import AuthorTitle from "./AuthorTitle";
import { useSelector } from 'react-redux';
import { selectAuthorFormVisible } from '../../../../redux/configureStore';

const AuthorSection: React.FC = () => {

  const isFormVisible = useSelector(selectAuthorFormVisible);

  return (
    <Row className="author-section mx-3 mx-md-4 mx-lg-5">
      <Col xs={12} className="p-0">
        <AuthorTitle />
      </Col>
      <Col xs={12} className="p-0">
        <AuthorList/>
      </Col>
      <Col xs={12} className="p-0">
        <AddAuthor/>
      </Col>
      <Col xs={12} sm={11} md={10} lg={9} className="p-0">
        {isFormVisible && <AuthorForm />}
      </Col>
    </Row>
  );
};
export default AuthorSection;
