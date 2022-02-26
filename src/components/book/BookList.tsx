import React from "react";
import { Row, Col } from "react-bootstrap";
import { IBook } from "../types/LibraryTypes";
import Book from "./Book";

type BookListProps = {
    bookList:IBook[],
    onBookDelete : (index:number) => void,
    onBookUpdateSet : (index:number) => void,
}
const BookList:React.FC<BookListProps> = (props) => {

    const randerBook = () => {
        if(props.bookList.length==0){
            return(
                <p className="empty-book mt-2"><i>No Book Listed Here</i></p>
            )
        }
        else{
            return(
                <ul className="p-3 m-0">
                {
                    props.bookList.map((book:IBook, index:number) =>
                            <Book book={book} index={index} key={index}
                            deleteBook = {props.onBookDelete}
                            onBookUpdateSet={props.onBookUpdateSet}/>
                    )
                }
                </ul>
            )
        }
    }
    return (
        <Row>
            <Col xs={12} className="p-0">
                {randerBook()}
            </Col>
        </Row>
    )
}
export default BookList;