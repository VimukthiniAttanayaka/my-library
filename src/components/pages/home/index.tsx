import React, { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import AuthorSection from "./author/AuthorSection";
import BookSection from "./book/BookSection";
import Welcome from "./welcome/Welcome";
import { IAuthor } from "../../types/LibraryTypes";
import { IBook } from "../../types/LibraryTypes";

const Home: React.FC = () => {

  const [authors, setAuthors] = useState<IAuthor[]>([]);
  const [books, setBooks] = useState<IBook[]>([]);

  const onAuthorListChange = (newAuthors: IAuthor[]) => {
    setAuthors(newAuthors);
  };

  const onBookListChange = (newBooks: IBook[]) => {
    setBooks(newBooks);
  };

  return (
    <Container fluid={true}>
      <Row>
        <Col xs={12} className='px-0'>
          <Welcome />
        </Col>
        <Col
          xs={{ span: 12, order: 1 }}
          md={{ span: 6, order: 2 }}
          className="px-sm-0 mx-0 px-3"
        >
          <AuthorSection books={books}
            onAuthorListChange={onAuthorListChange}
          />
        </Col>
        <Col
          xs={{ span: 12, order: 2 }}
          md={{ span: 6, order: 1 }}
          className="px-sm-0 mx-0 px-3"
        >
          <BookSection authors={authors}
            onBookListChange={onBookListChange} />
        </Col>
      </Row>
    </Container>
  );
};
export default Home;
