import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import AddBook from './AddBook';
import BookForm from './BookForm';
import BookList from './BookList';
import BookTitle from './BookTitle';

const BookSection:React.FC = () => {

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
        <Row className='book-section mx-4 mx-sm-5'>
            <Col xs={12} className="p-0">
                <BookTitle/>
            </Col>
            <Col xs={12} className="p-0">
                <BookList/>
            </Col>
            <Col xs={12} className="p-0">
                <AddBook formVisible = {handleOnFormVisible}/>
            </Col>
            <Col xs={12} sm={9} className="p-0">
                {visible?<BookForm formUnVisible = {handleOnFormUnVisible}/>:null}
            </Col>
        </Row>
    )
}
export default BookSection;