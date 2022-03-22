import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { IAuthor, IBook } from "../../../types/LibraryTypes";
import AddAuthor from "./AddAuthor";
import AuthorForm from "./AuthorForm";
import AuthorList from "./AuthorList";
import AuthorTitle from "./AuthorTitle";
import { useToasts } from 'react-toast-notifications';

type AuthorSectionProps = {
  books: IBook[];
  onAuthorListChange: (newAuthors: IAuthor[]) => void;
};

const AuthorSection: React.FC<AuthorSectionProps> = (props) => {

  const { addToast } = useToasts()
  const { books, onAuthorListChange } = props;

  const [isFormVisible, setIsFormVisible] = useState(false);
  const [authors, setAuthors] = useState<IAuthor[]>([]);
  const [updateIndex, setUpdateIndex] = useState<number | null>(null);
  const [updateAuthor, setUpdateAuthor] = useState<IAuthor | null>(null);

  useEffect(() => {
    onAuthorListChange(authors)
  }, [authors]);

  const handleOnFormOpen = () => {
    return setIsFormVisible(true);
  };

  const handleOnFormClose = () => {
    setIsFormVisible(false);
    setUpdateAuthor(null);
    setUpdateIndex(null);
  };

  const handleOnAuthorDelete = (index: number) => {

    const bookauthorinclude: string[] = [];

    for (let i = 0; i < books.length; i++) {
      if (books[i].author === authors[index].name) {
        bookauthorinclude.push(books[i].name)
      }
    }

    if (bookauthorinclude.length === 0) {
      const allAuthors: IAuthor[] = authors.slice();
      allAuthors.splice(index, 1);
      setAuthors(allAuthors);
      addToast("Author Deleted", { appearance: 'success', autoDismiss: true });
    } else {
      addToast("Author Can not Deleted, First you need to remove '" + bookauthorinclude.toString() + "' book", { appearance: 'error', autoDismiss: false });
    }
  };

  const handleOnAuthorCreate = (newAuthor: IAuthor) => {
    const allAuthors: IAuthor[] = authors.slice();
    allAuthors.push(newAuthor)
    setAuthors(allAuthors);
    addToast("Author Created", { appearance: 'success', autoDismiss: true });
  };

  const handleOnAuthorUpdate = (newAuthor: IAuthor) => {
    if (!updateIndex) {
      return;
    }
    const allAuthors: IAuthor[] = authors.slice();
    allAuthors.splice(updateIndex - 1, 1, newAuthor);
    setAuthors(allAuthors);
    setUpdateAuthor(null);
    setUpdateIndex(null);
    addToast("Author Updated", { appearance: 'success', autoDismiss: true });
  };

  const handleOnAuthorUpdateSet = (index: number) => {
    setUpdateIndex(index + 1);
    setUpdateAuthor(authors[index]);
    setIsFormVisible(true);
  };

  return (
    <Row className="author-section mx-3 mx-md-4 mx-lg-5">
      <Col xs={12} className="p-0">
        <AuthorTitle />
      </Col>
      <Col xs={12} className="p-0">
        <AuthorList
          authorList={authors}
          onAuthorDelete={handleOnAuthorDelete}
          onAuthorUpdateSet={handleOnAuthorUpdateSet}
        />
      </Col>
      <Col xs={12} className="p-0">
        <AddAuthor onFormOpen={handleOnFormOpen} />
      </Col>
      <Col xs={12} sm={11} md={10} lg={9} className="p-0">
        {isFormVisible && <AuthorForm
          onFormClose={handleOnFormClose}
          onAuthorCreate={handleOnAuthorCreate}
          updateAuthor={updateAuthor}
          onAuthorUpdate={handleOnAuthorUpdate} />}
      </Col>
    </Row>
  );
};
export default AuthorSection;
