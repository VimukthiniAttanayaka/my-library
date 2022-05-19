import React,{ useState} from "react";
import { Row, Col } from "react-bootstrap";
import AddAuthor from "./AddAuthor";
import AuthorForm from "./AuthorForm";
import AuthorList from "./AuthorList";
import AuthorTitle from "./AuthorTitle";

const AuthorSection: React.FC = () => {
  const[isFormVisible, setIsFormVisible] = useState(false);

  const handleFormVisible = (state:boolean) => {
      setIsFormVisible(state);
  }

  return (
    <Row className="author-section mx-3 mx-md-4 mx-lg-5">
      <Col xs={12} className="p-0">
        <AuthorTitle />
      </Col>
      <Col xs={12} className="p-0">
        <AuthorList/>
      </Col>
      <Col xs={12} className="p-0">
        <AddAuthor onFormOpen={handleFormVisible}/>
      </Col>
      <Col xs={12} sm={11} md={10} lg={9} className="p-0">
        {isFormVisible && <AuthorForm onFormClose={handleFormVisible}/>}
      </Col>
    </Row>
  );
};
export default AuthorSection;
