import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Plus } from 'react-feather';

type AddBookProps = {
    formVisible: () => void
}
const AddBook:React.FC<AddBookProps> = (props) => {

    const {formVisible} = props;
    return (
        <Row>
            <Col xs={12} className="p-0 add-book mb-5" onClick={formVisible}>
                <Plus className='plus me-1 me-md-2'/>
                <span>Add Book</span>
            </Col>
        </Row>
    )
}
export default AddBook;