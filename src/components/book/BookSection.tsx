import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { IAuthor, IBook } from '../types/LibraryTypes';
import AddBook from './AddBook';
import BookForm from './BookForm';
import BookList from './BookList';
import BookTitle from './BookTitle';

type BookSectionProps = {
    authorList : IAuthor[]
}
const BookSection:React.FC<BookSectionProps> = (props) => {

    const {authorList} = props;

    const books:IBook[] = [
        {name:"vimu",price:"532745",author:"hftgyt"},
        {name:"vimu",price:"532745",author:"hftgyt"},
        {name:"vimu",price:"532745",author:"hftgyt"},
    ]

    const [visible, setVisible] = useState(false);
    const [bookList, setBookList] = useState<IBook[]>(books);


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

    const handleOnBookDelete = (index: number) => {
        const allBook:IBook[] = bookList.slice();
        allBook.splice(index, 1);
        setBookList(allBook);
      };

      const handleOnBookCreate = (newBook:IBook) => {
        const index = bookList.length;
        const allBook: IBook[] = bookList.slice();
        allBook.splice(index, 1, newBook);
        setBookList(allBook);
      };
      
    return (
        <Row className='book-section mx-4 mx-sm-5'>
            <Col xs={12} className="p-0">
                <BookTitle/>
            </Col>
            <Col xs={12} className="p-0">
                <BookList bookList = {bookList}
                        onBookDelete = {handleOnBookDelete}/>
            </Col>
            <Col xs={12} className="p-0">
                <AddBook formVisible = {handleOnFormVisible}/>
            </Col>
            <Col xs={12} sm={9} className="p-0">
                {visible?<BookForm formUnVisible = {handleOnFormUnVisible}
                                    onBookCreate={handleOnBookCreate}
                                    authorList={props.authorList}/>:null}
            </Col>
        </Row>
    )
}
export default BookSection;