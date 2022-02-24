import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Plus } from 'react-feather';

type AddAuthorProps = {
    formVisible: () => void
}
const AddAuthor:React.FC<AddAuthorProps> = (props) => {

    const {formVisible} = props;
    return (
        <Row>
            <Col xs={12} className="p-0 add-author mb-5" onClick={formVisible}>
                <Plus className='plus me-1 me-md-2'/>
                <span>Add Author</span>
            </Col>
        </Row>
    )
}
export default AddAuthor;