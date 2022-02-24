import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import AddAuthor from './AddAuthor';
import AuthorForm from './AuthorForm';
import AuthorList from './AuthorList';
import AuthorTitle from './AuthorTitle';

const AuthorSection:React.FC = () => {

    const [visible, setVisible] = useState(false);

    const handleOnFormVisible = () => {
        return (
            setVisible(true)
        );
    }

    const handleOnFormUnVisible = () => {
        return (
            setVisible(false)
        );
    }

    return (
        <Row className='author-section mx-4 mx-sm-5'>
            <Col xs={12} className="p-0">
                <AuthorTitle/>
            </Col>
            <Col xs={12} className="p-0">
                <AuthorList/>
            </Col>
            <Col xs={12} className="p-0">
                <AddAuthor formVisible = {handleOnFormVisible}/>
            </Col>
            <Col xs={12} sm={9} className="p-0">
                {visible?<AuthorForm formUnVisible = {handleOnFormUnVisible}/>:null}
            </Col>
        </Row>
    )
}
export default AuthorSection;