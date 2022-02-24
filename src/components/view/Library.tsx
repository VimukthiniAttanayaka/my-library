import React, { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import AuthorSection from "../author/AuthorSection";
import BookSection from "../book/BookSection";
import Welcome from "../welcome/Welcome";
import { IAuthor } from "../types/LibraryTypes";

const Library: React.FC = () => {
  const authors: IAuthor[] = [
    { name: "vimu" },
    { name: "vimu" },
    { name: "vimu" },
  ];

  const [visible, setVisible] = useState(false);
  const [authorList, setAuthorList] = useState<IAuthor[]>(authors);

  const handleOnFormVisible = () => {
    return setVisible(true);
  };

  const handleOnFormUnVisible = () => {
    return setVisible(false);
  };

  const handleOnAuthorDelete = (index: number) => {
    const allAuthor: IAuthor[] = authorList.slice();
    allAuthor.splice(index, 1);
    setAuthorList(allAuthor);
  };

  const handleOnAuthorCreate = (newAuther:IAuthor) => {
    const index = authorList.length;
    const allAuthor: IAuthor[] = authorList.slice();
    allAuthor.splice(index, 1, newAuther);
    setAuthorList(allAuthor);
  };

  return (
    <Container fluid={true}>
      <Row>
        <Col xs={12}>
          <Welcome />
        </Col>
        <Col
          xs={{ span: 12, order: 1 }}
          md={{ span: 6, order: 2 }}
          className="px-0 mx-0"
        >
          <AuthorSection
            onFormVisible={handleOnFormVisible}
            onFormUnVisible={handleOnFormUnVisible}
            visible={visible}
            authorList={authorList}
            onAuthorDelete={handleOnAuthorDelete}
            onAuthorCreate={handleOnAuthorCreate}
          />
        </Col>
        <Col
          xs={{ span: 12, order: 2 }}
          md={{ span: 6, order: 1 }}
          className="px-0 mx-0"
        >
          <BookSection authorList={authorList}/>
        </Col>
      </Row>
    </Container>
  );
};
export default Library;
