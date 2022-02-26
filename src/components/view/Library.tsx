import React, { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import AuthorSection from "../author/AuthorSection";
import BookSection from "../book/BookSection";
import Welcome from "../welcome/Welcome";
import { IAuthor } from "../types/LibraryTypes";

const Library: React.FC = () => {
  const authors: IAuthor[] = [];

  const [visible, setVisible] = useState(false);
  const [authorList, setAuthorList] = useState<IAuthor[]>(authors);
  const [updateIndex, setUpdateIndex] = useState<number | null>(null);
  const [updateAuthor, setUpdateAuthor] = useState<IAuthor | null>(null);

  const handleOnFormVisible = () => {
    return setVisible(true);
  };

  const handleOnFormUnVisible = () => {
    setVisible(false);
    setUpdateAuthor(null);
    setUpdateIndex(null);
  };

  const handleOnAuthorDelete = (index: number) => {
    const allAuthor: IAuthor[] = authorList.slice();
    allAuthor.splice(index, 1);
    setAuthorList(allAuthor);
  };

  const handleOnAuthorCreate = (newAuther: IAuthor) => {
    const index = authorList.length;
    const allAuthor: IAuthor[] = authorList.slice();
    allAuthor.splice(index, 1, newAuther);
    setAuthorList(allAuthor);
  };

  const handleOnAuthorUpdate = (newAuther: IAuthor) => {
    if (!updateIndex) {
      return;
    }
    const allAuthor: IAuthor[] = authorList.slice();
    allAuthor.splice(updateIndex - 1, 1, newAuther);
    setAuthorList(allAuthor);
    setUpdateAuthor(null);
    setUpdateIndex(null);
  };

  const handleOnAuthorUpdateSet = (index: number) => {
    setUpdateIndex(index + 1);
    setUpdateAuthor(authorList[index]);
    setVisible(true);
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
            onAuthorUpdateSet={handleOnAuthorUpdateSet}
            updateAuthor={updateAuthor}
            handleOnAuthorUpdate={handleOnAuthorUpdate}
          />
        </Col>
        <Col
          xs={{ span: 12, order: 2 }}
          md={{ span: 6, order: 1 }}
          className="px-0 mx-0"
        >
          <BookSection authorList={authorList} />
        </Col>
      </Row>
    </Container>
  );
};
export default Library;
