import React from 'react';
import {Container, Col} from 'react-bootstrap';
import Welcome from '../welcome/Welcome';

const Library:React.FC = () => {
    return (
        <Container fluid={true}>
            <Col xs={12}>
                <Welcome/>
            </Col>
        </Container>
    )
}
export default Library;