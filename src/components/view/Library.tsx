import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import AuthorSection from "../author/AuthorSection";
import Welcome from "../welcome/Welcome";

const Library: React.FC = () => {
  	return (
    	<Container fluid={true}>
      		<Row>
        		<Col xs={12}>
          			<Welcome />
        		</Col>
        		<Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 2 }} className="px-0 mx-0">
          			<AuthorSection/>
				</Col>
				<Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }}>
					Book
				</Col>
			</Row>
    </Container>
  );
};
export default Library;